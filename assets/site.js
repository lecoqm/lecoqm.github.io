/* Optional current-page highlighting. All navigation works without JavaScript. */
(() => {
  const links = document.querySelectorAll('.sidebar-nav [data-nav]');
  const update = () => {
    const page = document.body.dataset.page;
    const section = window.location.hash.slice(1);
    const active = page === 'home' && ['about', 'contact'].includes(section) ? section : page;
    links.forEach(link => {
      if (link.dataset.nav === active) {
        link.setAttribute('aria-current', active === page ? 'page' : 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };
  update();
  window.addEventListener('hashchange', update);
})();
