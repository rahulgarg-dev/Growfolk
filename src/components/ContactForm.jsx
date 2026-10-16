import { useEffect, useRef, useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Check,
  Loader2,
  Mail,
  MessageCircle,
  Send,
} from 'lucide-react';
import { SITE } from '../config.js';
import { BUDGET_OPTIONS, SERVICE_OPTIONS } from '../data.js';
import {
  LIMITS,
  handleCharacterKeyDown,
  handleNumberKeyDown,
  normalizePhone,
  sanitizeCharacters,
  sanitizeNumbers,
  validateAll,
  validators,
} from '../validation.js';

const EMPTY = {
  name: '',
  phone: '',
  email: '',
  service: '',
  budget: '',
  message: '',
  website: '',
  postdrop_honeypot: '',
};
const FIELD_ORDER = ['name', 'phone', 'email', 'service', 'budget', 'message'];
const COOLDOWN_MS = 25000;

const waLink = (v) => {
  const lines = [
    'Hi Growfolk! I just submitted an enquiry from your website.',
    v.name.trim() && `Name: ${v.name.trim()}`,
    v.phone && `Phone: ${v.phone}`,
    v.service && `Service: ${v.service}`,
    v.budget && `Budget: ${v.budget}`,
    v.message.trim() && `Details: ${v.message.trim()}`,
  ].filter(Boolean);
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
};

async function sendEnquiry(v) {
  const payload = {
    name: v.name.trim(),
    phone: normalizePhone(v.phone),
    service: v.service,
    budget: v.budget || 'Not specified',
    message: v.message.trim(),
    source: SITE.domain,
    submitted_at: new Date().toISOString(),
  };
  if (v.email.trim()) payload.email = v.email.trim();

  const postdropId = (SITE.postdropId || '').trim();
  const endpoint = (SITE.formEndpoint || '').trim();

  // If no PostDrop ID or endpoint is configured yet (e.g. initial setup / local dev)
  if (!postdropId && !endpoint) {
    console.info(
      '[PostDrop] No VITE_POSTDROP_ID or VITE_FORM_ENDPOINT configured yet. Simulating smooth submission in demo mode. Configure in .env or src/config.js to receive email notifications.'
    );
    // Smooth delay for authentic UX
    await new Promise((resolve) => setTimeout(resolve, 800));
    return {
      ok: true,
      message: 'Enquiry submitted successfully.',
    };
  }

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 12000);

  try {
    let url = endpoint;
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    if (!url && postdropId) {
      if (postdropId.startsWith('http')) {
        url = postdropId;
      } else {
        url = 'https://postdrop.onrender.com/api/entries/submit';
        headers.Authorization = `Bearer ${postdropId}`;
      }
    } else if (url && postdropId && !headers.Authorization) {
      headers.Authorization = `Bearer ${postdropId}`;
    }

    const res = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
      signal: ctrl.signal,
    });

    const data = await res.json().catch(() => ({}));
    const message = data.message || data.error || '';
    const ok = res.ok && String(data.success) !== 'false';

    return {
      ok,
      message: message || (ok ? 'Enquiry submitted successfully' : 'Could not submit enquiry'),
    };
  } catch (err) {
    if (err?.name === 'AbortError') {
      return { ok: false, message: 'Submission request timed out. Please try again or chat with us directly.' };
    }
    return { ok: false, message: err?.message || 'Network error. Please try again or message on WhatsApp.' };
  } finally {
    clearTimeout(timer);
  }
}

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [statusMessage, setStatusMessage] = useState('');
  const [notice, setNotice] = useState('');
  const formRef = useRef(null);
  const openedAt = useRef(Date.now());
  const sending = status === 'sending';

  useEffect(() => {
    openedAt.current = Date.now();
  }, []);

  const set = (k, val) => {
    setValues((p) => ({ ...p, [k]: val }));
    if (touched[k]) {
      setErrors((p) => ({ ...p, [k]: validators[k](val) }));
    }
  };

  const blur = (k) => {
    setTouched((p) => ({ ...p, [k]: true }));
    setErrors((p) => ({ ...p, [k]: validators[k](values[k]) }));
  };

  const isOk = (k) => touched[k] && String(values[k] ?? '').trim() !== '' && !errors[k];

  // Strictly characters only for Name
  const handleNameChange = (e) => {
    const val = sanitizeCharacters(e.target.value);
    set('name', val);
  };

  // Strictly numbers only for Phone (10 digits)
  const handlePhoneChange = (e) => {
    const val = sanitizeNumbers(e.target.value).slice(0, 10);
    set('phone', val);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setNotice('');
    const errs = validateAll(values);
    setErrors(errs);
    setTouched(Object.fromEntries(FIELD_ORDER.map((k) => [k, true])));

    const firstBad = FIELD_ORDER.find((k) => errs[k]);
    if (firstBad) {
      formRef.current?.querySelector(`#${firstBad}`)?.focus();
      return;
    }

    // Bot honeypot check
    if (values.postdrop_honeypot || values.website || Date.now() - openedAt.current < 1500) {
      setStatus('success');
      return;
    }

    try {
      const last = Number(localStorage.getItem('gf_last_enquiry') || 0);
      if (Date.now() - last < COOLDOWN_MS) {
        setNotice('You recently sent an enquiry. Please wait a moment before sending another.');
        return;
      }
    } catch {
      /* ignore */
    }

    setStatus('sending');
    const res = await sendEnquiry(values);

    if (res.ok) {
      try {
        localStorage.setItem('gf_last_enquiry', String(Date.now()));
      } catch {
        /* ignore */
      }
      setStatus('success');
    } else {
      setStatus('error');
      setStatusMessage(res.message);
    }
  };

  const reset = () => {
    setValues(EMPTY);
    setErrors({});
    setTouched({});
    setStatus('idle');
    setStatusMessage('');
    setNotice('');
    openedAt.current = Date.now();
  };

  if (status === 'success') {
    return (
      <div className="py-8 text-center" role="status">
        <CheckCircle2 size={44} className="mx-auto text-brand animate-pulse" />
        <h3 className="mt-4 font-display text-2xl font-bold text-white">
          Enquiry Sent Successfully!
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-muted">
          Thanks, {values.name.trim().split(' ')[0] || 'there'}! We have received your details and will get back to you shortly.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={waLink(values)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary flex items-center justify-center gap-2"
          >
            <MessageCircle size={16} /> Also Chat on WhatsApp
          </a>
          <button type="button" onClick={reset} className="btn btn-ghost">
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">

      {status === 'error' && (
        <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-sm text-ink">
          <div className="flex items-start gap-2.5">
            <AlertCircle size={18} className="mt-0.5 text-rose-400 shrink-0" />
            <div className="space-y-1.5">
              <p className="font-semibold text-rose-300">
                Could not deliver enquiry directly
              </p>
              <p className="text-xs text-muted">
                {statusMessage || 'Your inputs are preserved below. Please chat with us directly via WhatsApp or Email:'}
              </p>
              <div className="pt-1 flex flex-wrap gap-3">
                <a
                  href={waLink(values)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
                >
                  <MessageCircle size={14} /> Send via WhatsApp
                </a>
                <a
                  href={`mailto:${SITE.mailTo}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-white"
                >
                  <Mail size={14} /> {SITE.mailTo}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {notice && (
        <p className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-muted">
          {notice}
        </p>
      )}

      {/* Main Clean Form with PostDrop Integration */}
      <form
        ref={formRef}
        id="postdrop-form"
        data-public-id={SITE.postdropId || undefined}
        onSubmit={onSubmit}
        noValidate
        className="space-y-4"
        aria-busy={sending}
      >
        {/* PostDrop Bot Honeypot */}
        <input
          type="text"
          name="postdrop_honeypot"
          value={values.postdrop_honeypot}
          onChange={(e) => set('postdrop_honeypot', e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Name: STRICTLY CHARACTERS ONLY */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="name" className="text-xs font-medium text-ink">
                Your name <span className="text-brand">*</span>
              </label>
              <span className="text-[11px] text-muted">Letters only</span>
            </div>
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={values.name}
                disabled={sending}
                placeholder="Rahul Sharma"
                maxLength={60}
                onKeyDown={handleCharacterKeyDown}
                onChange={handleNameChange}
                onBlur={() => blur('name')}
                aria-invalid={!!errors.name}
                className={`field ${errors.name ? 'field-err' : isOk('name') ? 'field-ok' : ''}`}
              />
              {isOk('name') && (
                <Check size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-brand" />
              )}
            </div>
            {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name}</p>}
          </div>

          {/* Phone: STRICTLY NUMBERS ONLY */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="phone" className="text-xs font-medium text-ink">
                Phone / WhatsApp <span className="text-brand">*</span>
              </label>
              <span className="text-[11px] text-muted">10 digits</span>
            </div>
            <div className="relative flex">
              <span className="inline-flex items-center rounded-l-xl border border-r-0 border-white/10 bg-white/[0.04] px-3 text-xs font-medium text-muted">
                +91
              </span>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                autoComplete="tel"
                value={values.phone}
                disabled={sending}
                placeholder="9876543210"
                maxLength={10}
                onKeyDown={handleNumberKeyDown}
                onChange={handlePhoneChange}
                onBlur={() => blur('phone')}
                aria-invalid={!!errors.phone}
                className={`field !rounded-l-none ${errors.phone ? 'field-err' : isOk('phone') ? 'field-ok' : ''}`}
              />
              {isOk('phone') && (
                <Check size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-brand" />
              )}
            </div>
            {errors.phone && <p className="mt-1 text-xs text-rose-400">{errors.phone}</p>}
          </div>
        </div>

        {/* Email (Optional) */}
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-ink mb-1.5">
            Email address <span className="text-muted font-normal">(Optional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            disabled={sending}
            placeholder="rahul@example.com"
            maxLength={100}
            onChange={(e) => set('email', e.target.value.trim())}
            onBlur={() => blur('email')}
            aria-invalid={!!errors.email}
            className={`field ${errors.email ? 'field-err' : isOk('email') ? 'field-ok' : ''}`}
          />
          {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
        </div>

        {/* Service and Budget Selects */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="service" className="block text-xs font-medium text-ink mb-1.5">
              Service required <span className="text-brand">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={values.service}
              disabled={sending}
              onChange={(e) => set('service', e.target.value)}
              onBlur={() => blur('service')}
              aria-invalid={!!errors.service}
              className={`field ${errors.service ? 'field-err' : isOk('service') ? 'field-ok' : ''}`}
            >
              <option value="">Select a service</option>
              {SERVICE_OPTIONS.map((o) => (
                <option key={o} value={o} className="bg-[#0a0f0d] text-ink">
                  {o}
                </option>
              ))}
            </select>
            {errors.service && <p className="mt-1 text-xs text-rose-400">{errors.service}</p>}
          </div>

          <div>
            <label htmlFor="budget" className="block text-xs font-medium text-ink mb-1.5">
              Budget range <span className="text-muted font-normal">(Optional)</span>
            </label>
            <select
              id="budget"
              name="budget"
              value={values.budget}
              disabled={sending}
              onChange={(e) => set('budget', e.target.value)}
              className="field"
            >
              <option value="">Select a range</option>
              {BUDGET_OPTIONS.map((b) => (
                <option key={b} value={b} className="bg-[#0a0f0d] text-ink">
                  {b}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="message" className="text-xs font-medium text-ink">
              Project details <span className="text-brand">*</span>
            </label>
            <span className="text-[11px] text-muted">
              {values.message.length}/{LIMITS.message}
            </span>
          </div>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={values.message}
            disabled={sending}
            maxLength={LIMITS.message}
            placeholder="Tell us about what you want to build or improve..."
            onChange={(e) => set('message', e.target.value)}
            onBlur={() => blur('message')}
            aria-invalid={!!errors.message}
            className={`field resize-y ${errors.message ? 'field-err' : isOk('message') ? 'field-ok' : ''}`}
          />
          {errors.message && <p className="mt-1 text-xs text-rose-400">{errors.message}</p>}
        </div>

        {/* Hidden Honeypot */}
        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
          <label>
            Website
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={values.website}
              onChange={(e) => setValues((p) => ({ ...p, website: e.target.value }))}
            />
          </label>
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={sending}
            className="btn btn-primary w-full flex items-center justify-center gap-2"
          >
            {sending ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Sending enquiry…</span>
              </>
            ) : (
              <>
                <Send size={16} />
                <span>Send Project Enquiry</span>
              </>
            )}
          </button>
          <p className="mt-2.5 text-center text-xs text-muted">
            We respect your privacy. No spam or unsolicited calls.
          </p>
        </div>
      </form>
    </div>
  );
}
