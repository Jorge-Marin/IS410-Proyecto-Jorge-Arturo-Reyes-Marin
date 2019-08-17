function initMap(){
    var options = {
       zoom: 7,
       center: {lat:42.3601, lng:-71.0589}
   }

   var mapCompany = new google.maps.Map(document.getElementById('map-profile'), options);
}