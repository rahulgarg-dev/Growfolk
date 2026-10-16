import { useEffect } from 'react';

export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | Growfolk` : 'Growfolk | Websites, Software & Digital Solutions';
    if (description) {
      let m = document.querySelector('meta[name="description"]');
      if (m) m.setAttribute('content', description);
    }
  }, [title, description]);
}
