
function initMap() {
    const myLatLng = {lat: 40.78582697898668, lng: -73.97587832395611};
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 18,
      center: myLatLng,
      mapId: '218b88a3099c9f02',
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false
    });

    // Name
    // LAT, LONG
    // IMAGE URL
    // scaledSize width, height
    const markers = [
        //40.79440950779437, -73.97522933894274
        [
            "Yoshi\'s House",
            40.79440950779437,
            -73.97522933894274,
            "yoshi_house.svg",
            38,
            31

        ],
        
        [
            'You Are Here',
            42.78582697898668,
            -74.97587832395611,
            'pointer.svg',
            30,
            47.8,
        ],

        //40.782354831748485, -73.97366292863926
        [
            'Ghost House',
            40.782354831748485,
            -73.97366292863926,
            'ghosthouse.svg',
            40,
            48,
        ],
        //40.792029613754224, -73.97594817091861
        ['Castle', 40.792029613754224,
        -73.97594817091861, 'castle.svg', 40, 53],

        //40.791550375579874, -73.96962888653945
        ['Warp Pipe', 40.791550375579874,
        -73.96962888653945, 'pipe.svg', 38, 42.5],
        //40.78326469495651, -73.95778425215707
        ['Star World', 40.783264694956518,
        -73.95778425215707, 'star.svg', 38, 38],
        //40.78352465358373, -73.96593816710737
        [
            'Donut Plains',
            40.78352465358373,
            -73.96593816710737,
            'hill_with_eyes.svg',
            50,
            60.7,
        ],
        //40.78995830537344, -73.96357782330597
        [
            'Donut Plains',
            40.78995830537344,
            -73.96357782330597,
            'hill_with_eyes.svg',
            50,
            60.7,
        ],
        //40.78950342117893, -73.95589597711594
        [
            'Donut Plains',
            40.78950342117893,
            -73.95589597711594,
            'hill_with_eyes.svg',
            50,
            60.7,
        ],

    ];

for(let i = 0; i < markers.length; i++){
    const currMarker = markers[i];
    const marker = new google.maps.Marker({
        position: {lat: currMarker[1], lng: currMarker[2] },
        map,
        title: currMarker[0],
        icon: {
            url: currMarker[3],
            scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
        },
        animation: google.maps.Animation.DROP
      });
  
      const infowindow = new google.maps.InfoWindow({
          content: currMarker[0],
      });
  
      marker.addListener("click", () => {
          infowindow.open(map, marker)
      });
}

  }