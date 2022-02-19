const ready = require('../../js/utils/documentReady.js');

ready(function () {
  function initialize() {
    const x = 55.813374;
    const y = 37.478881;
    const mapOptions = {
      zoom: 18,
      // eslint-disable-next-line no-undef
      center: new google.maps.LatLng(x, y),
      scrollwheel: false,
      disableDefaultUI: true
    };
    // eslint-disable-next-line no-undef
    const map = new google.maps.Map(
      document.querySelector('.contacts__map'),
      mapOptions
    );
    // const image = 'img/map-marker.png';
    // eslint-disable-next-line no-undef
    const myLatLng = new google.maps.LatLng(x, y);
    // eslint-disable-next-line no-unused-vars, no-undef
    const beachMarker = new google.maps.Marker({
      position: myLatLng,
      map
      // icon: image
    });
  }
  // eslint-disable-next-line no-undef
  google.maps.event.addDomListener(window, 'load', initialize);
});
