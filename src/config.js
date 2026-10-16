// Single place to edit all business details.
export const SITE = {
  name: 'Growfolk',
  domain: 'growfolk.in',
  url: 'https://growfolk.in',
  phone: '7849881366',
  whatsapp: '917849881366', // country code + number, no + or spaces
  people: [
    { name: 'Rahul Garg', role: 'Owner & Tech Lead', email: 'rahul@growfolk.in' },
    { name: 'Vanita Panda', role: 'Business Development', email: 'vanita@growfolk.in' },
  ],
  mailTo: 'rahul@growfolk.in',
  mailCc: '',
  // PostDrop form service integration (postdrop.online)
  // Set your PostDrop Public ID (e.g. pd_...) or custom form endpoint URL here or via .env
  postdropId: import.meta.env.VITE_POSTDROP_ID || import.meta.env.VITE_POSTDROP_PUBLIC_ID || '',
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || import.meta.env.VITE_POSTDROP_ENDPOINT || '',
};

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
];
