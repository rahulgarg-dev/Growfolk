export const LIMITS = { message: 1000 };

/**
 * Filter out everything except alphabetic characters and spaces.
 * Strictly supports characters only.
 */
export const sanitizeCharacters = (raw) => {
  if (typeof raw !== 'string') return '';
  // Support English alphabet and Unicode letters + spaces
  return raw.replace(/[^\p{L}\s]/gu, '');
};

/**
 * Filter out everything except digits 0-9.
 * Strictly supports numbers only.
 */
export const sanitizeNumbers = (raw) => {
  if (typeof raw !== 'string') return '';
  return raw.replace(/\D/g, '');
};

/**
 * KeyDown guard to prevent entering numbers or special characters into character-only fields.
 */
export const handleCharacterKeyDown = (e) => {
  // Allow control/nav keys: Backspace, Tab, Enter, Delete, Arrows, etc.
  if (
    e.ctrlKey || e.metaKey || e.altKey ||
    ['Backspace', 'Delete', 'Tab', 'Enter', 'Escape', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(e.key)
  ) {
    return;
  }
  // Allow letters and space only
  if (!/^[\p{L}\s]$/u.test(e.key)) {
    e.preventDefault();
  }
};

/**
 * KeyDown guard to prevent entering non-numeric characters into number-only fields.
 */
export const handleNumberKeyDown = (e) => {
  // Allow control/nav keys
  if (
    e.ctrlKey || e.metaKey || e.altKey ||
    ['Backspace', 'Delete', 'Tab', 'Enter', 'Escape', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(e.key)
  ) {
    return;
  }
  // Allow numbers 0-9 only
  if (!/^[0-9]$/.test(e.key)) {
    e.preventDefault();
  }
};

export const normalizePhone = (raw) => {
  let p = sanitizeNumbers(String(raw));
  if (p.startsWith('91') && p.length === 12) p = p.slice(2);
  else if (p.startsWith('0') && p.length === 11) p = p.slice(1);
  return p;
};

const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const CHAR_ONLY_RE = /^[\p{L}\s]+$/u;

export const validators = {
  name: (v) => {
    const s = String(v ?? '').trim();
    if (!s) return 'Please enter your name.';
    if (/[0-9]/.test(s)) return 'Name cannot contain numbers. Only characters are allowed.';
    if (!CHAR_ONLY_RE.test(s)) return 'Name can only contain alphabetic characters and spaces.';
    if (s.length < 2) return 'Name must be at least 2 characters.';
    if (s.length > 60) return 'Name must be 60 characters or fewer.';
    return '';
  },

  phone: (v) => {
    const raw = String(v ?? '').trim();
    if (!raw) return 'Please enter your 10-digit mobile number.';
    if (/\D/.test(raw)) return 'Phone number can only contain numbers (0-9).';
    const digits = sanitizeNumbers(raw);
    if (digits.length < 10) return `Phone number is too short (${digits.length}/10 digits).`;
    if (digits.length > 10) return `Phone number must be exactly 10 digits (${digits.length}/10).`;
    if (!/^[6-9]/.test(digits)) return 'Indian mobile numbers must start with 6, 7, 8, or 9.';
    return '';
  },

  email: (v) => {
    const s = String(v ?? '').trim();
    if (!s) return ''; // Email is optional, but validated if provided
    if (s.length > 100 || !EMAIL_RE.test(s)) return 'Please enter a valid email address (e.g. name@domain.com).';
    return '';
  },

  service: (v) => (v ? '' : 'Please select a service.'),

  budget: () => '',

  message: (v) => {
    const s = String(v ?? '').trim();
    if (!s) return 'Please tell us a little about your requirement.';
    if (s.length < 10) return `Please add a few more details (minimum 10 characters, current: ${s.length}).`;
    if (s.length > LIMITS.message) return `Please keep it under ${LIMITS.message} characters.`;
    return '';
  },
};

export const validateAll = (values) => {
  const errors = {};
  Object.keys(validators).forEach((k) => {
    const e = validators[k](values[k] ?? '');
    if (e) errors[k] = e;
  });
  return errors;
};
