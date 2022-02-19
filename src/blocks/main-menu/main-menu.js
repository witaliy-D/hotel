/* eslint-env jquery*/

require('../../js/utils/closestPolifil.js');
const ready = require('../../js/utils/documentReady.js');


ready(function (){

  function checkSection() {
    const sections = document.querySelectorAll('.section');
    for (let n = 0; n < sections.length; n++) {
      const section = sections[n];
      const topEdge = section.offsetTop;
      const bottomEdge = topEdge + section.clientHeight;
      const wScroll = window.pageYOffset + 50;
      if (topEdge < wScroll && bottomEdge > wScroll) {
        const currentId = section.dataset.id;
        const reqLinks = document.querySelectorAll('.main-menu__link');
        for (let i = 0; i < reqLinks.length; i++) {
          const link = reqLinks[i];
          link.closest('.main-menu__item').classList.remove('main-menu__item--active');
          if (link.href.split('#')[1] === currentId) {
            link.closest('.main-menu__item').classList.add('main-menu__item--active');
          }
        }
      }
    }
  }

  window.addEventListener('scroll', function () {
    checkSection();
  });
});
