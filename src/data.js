import { Globe, Code2, Wrench, ShieldCheck, BarChart3, Settings, Store, Rocket, Briefcase, Users } from 'lucide-react';

export const SERVICES = [
  {
    icon: Globe, title: 'Website Development', lead: 'Create a credible, modern online presence.',
    points: ['Business websites and landing pages', 'Portfolio, service and e-commerce websites', 'Responsive UI and website redesign', 'Contact forms, WhatsApp and booking journeys']
  },
  {
    icon: Code2, title: 'Software & Web Apps', lead: 'Build tools around your business workflow.',
    points: ['Custom web applications and dashboards', 'Admin and management systems', 'Booking, inventory and CRM-style tools', 'APIs and third-party integrations']
  },
  {
    icon: Wrench, title: 'Bug Fixing & Troubleshooting', lead: 'Identify issues and fix the agreed problem.',
    points: ['Frontend and backend debugging', 'API, database and integration issues', 'Responsive layout and UI fixes', 'Existing project improvements']
  },
  {
    icon: ShieldCheck, title: 'Testing & Quality Assurance', lead: 'Check that agreed features work as expected.',
    points: ['Functional and regression testing', 'Cross-browser and responsive checks', 'Forms and user-flow testing', 'Bug reports and agreed retesting']
  },
  {
    icon: BarChart3, title: 'SEO & Performance', lead: 'Strengthen technical and search foundations.',
    points: ['Basic on-page SEO setup', 'Local SEO and profile assistance', 'Page speed and performance improvements', 'Indexing and agreed technical checks']
  },
  {
    icon: Settings, title: 'Maintenance & Support', lead: 'Keep your product updated after launch.',
    points: ['Content and feature updates', 'Backup and security configuration', 'Ongoing fixes and technical support', 'Maintenance under an agreed scope']
  },
];

export const STEPS = [
  { t: 'Discover', d: 'Understand your goals, users, current setup and constraints.' },
  { t: 'Define', d: 'Agree the scope, features, deliverables, timeline and budget expectations.' },
  { t: 'Create or improve', d: 'Work on the agreed solution and share progress at planned checkpoints.' },
  { t: 'Test and refine', d: 'Review agreed requirements and complete included revisions.' },
  { t: 'Deliver', d: 'Hand over the agreed work, access details and relevant notes.' },
  { t: 'Support', d: 'Discuss future enhancements or maintenance if needed.' },
];

export const AUDIENCE = [
  { icon: Store, t: 'Local businesses', d: 'Cafes, restaurants, salons, clinics, studios and shops.' },
  { icon: Rocket, t: 'Startups & founders', d: 'MVPs, landing pages, integrations and product improvements.' },
  { icon: Briefcase, t: 'Professionals', d: 'Consultants, tutors, coaches and independent services.' },
  { icon: Users, t: 'Existing product teams', d: 'QA, bug fixes, maintenance and feature enhancements.' },
];

export const PRINCIPLES = [
  { t: 'Clear scope', d: 'Deliverables agreed upfront.' },
  { t: 'Practical solutions', d: 'Built around real needs.' },
  { t: 'Transparent communication', d: 'Clear expectations and trade-offs.' },
];

export const BEFORE = [
  { t: 'Understand', d: 'Discuss goals, requirements and budget expectations.' },
  { t: 'Scope', d: 'Identify features, dependencies, deliverables and exclusions.' },
  { t: 'Quote', d: 'Receive a written estimate and expected timeline.' },
  { t: 'Agree', d: 'Confirm milestones, responsibilities and payment terms.' },
];

export const CLARITY = [
  'Quotes cover only the features, pages, tests and support explicitly listed.',
  'Domain, hosting, paid tools, subscriptions, API usage and other external fees are separate unless specified.',
  'Additional features or major changes may require a revised quotation and timeline.',
  'SEO does not guarantee rankings, traffic, leads or revenue; maintenance scope is agreed separately.',
];

export const SERVICE_OPTIONS = [
  'Website Development', 'Software & Web Apps', 'Bug Fixing & Troubleshooting',
  'Testing & Quality Assurance', 'SEO & Performance', 'Maintenance & Support', 'Something else',
];
export const BUDGET_OPTIONS = ['Under ₹10,000', '₹10,000 – ₹30,000', '₹30,000 – ₹75,000', '₹75,000+', 'Not sure yet'];

export const FAQ = [
  { q: 'Do you have fixed pricing packages?', a: 'No. Every business and project is different, so we understand your requirements first and then send a tailored written quotation before any work begins.' },
  { q: 'What does a quotation cover?', a: 'Only the features, pages, tests and support explicitly listed in it. Anything else is discussed and added to the scope in writing.' },
  { q: 'Are domain and hosting included?', a: 'Domain, hosting, paid tools, subscriptions, API usage and other external fees are separate unless the quote specifies otherwise.' },
  { q: 'What if I need more features later?', a: 'Additional features or major changes may need a revised quotation and timeline. We confirm that with you before starting.' },
  { q: 'Can you guarantee SEO rankings?', a: 'No one honestly can. We set up the technical and on-page foundations, but SEO does not guarantee rankings, traffic, leads or revenue.' },
  { q: 'Do you offer support after launch?', a: 'Yes. Maintenance and support are available and the scope is agreed separately, so you only pay for what you need.' },
];
