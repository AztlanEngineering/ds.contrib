import L from 'leaflet'

export default new L.Icon({
  /* iconUrl      :require('../img/marker-pin-person.svg'),
     iconRetinaUrl:require('../img/marker-pin-person.svg'), */
  iconUrl     :'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl   :'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  shadowAnchor:null,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
  //className   :'leaflet-div-icon'
})

