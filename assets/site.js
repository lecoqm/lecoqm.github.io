/* Optional navigation enhancement. All project content works without JavaScript. */
(() => {
  const navigation = document.querySelector('nav');
  const sectionLinks = [...navigation.querySelectorAll('a[href^="#"]')];
  const sections = sectionLinks.map(link => document.querySelector(link.hash));
  if (!('IntersectionObserver' in window)) return;

  const visible = new Map();
  const update = () => {
    const active = sections.find(section => visible.get(section.id));
    sectionLinks.forEach(link => {
      if (active && link.hash === `#${active.id}`) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => visible.set(entry.target.id, entry.isIntersecting));
    update();
  }, { rootMargin: '-10% 0px -45% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
})();
