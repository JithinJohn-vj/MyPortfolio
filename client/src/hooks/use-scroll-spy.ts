import { useState, useEffect } from 'react';

interface UseScrollSpyOptions {
  rootMargin?: string;
  threshold?: number | number[];
}

export const useScrollSpy = (
  ids: string[],
  options: UseScrollSpyOptions = {}
): string | null => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: options.rootMargin || '0px 0px -80% 0px',
        threshold: options.threshold || 0.1,
      }
    );

    elements.forEach(element => observer.observe(element));

    return () => {
      elements.forEach(element => observer.unobserve(element));
    };
  }, [ids, options.rootMargin, options.threshold]);

  return activeId;
};
