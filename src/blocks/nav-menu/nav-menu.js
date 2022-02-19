// eslint-disable-next-line no-redeclare
/* global document */

const ready = require('../../js/utils/documentReady.js');

ready(function (){

  function navMenuToggle() {
    document.getElementById('nav').classList.toggle('nav-menu--open');
    document.getElementById('toggle-button').classList.toggle('burger--close');
  }

  document.addEventListener('click', function (event) {
    if (innerWidth < 768) {
      if (event.target.dataset.toggleNative === 'nav-menu') {
        navMenuToggle();
      }
    }
  });
});
