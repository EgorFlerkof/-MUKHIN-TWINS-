let center = [57.689027, 39.755807];

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 20
	});

    let placemark = new ymaps.Placemark(center, {}, {
	});

  
  map.geoObjects.add(placemark);

}

ymaps.ready(init);