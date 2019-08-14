function initMap(){
    var options = {
       zoom: 7,
       center: {lat:42.3601, lng:-71.0589}
   }

   var map = new google.maps.Map(document.getElementById('map'), options);
}

function putBannerBackground(evt) {
    var files = evt.target.files; // FileList object
    
    // Loop through the FileList and render image files as thumbnails.
    for (let i = 0, f; f = files[i]; i++) {
      console.log(i);
      // Only process image files.
      if (!f.type.match('image.*')){
        continue;
      }

      var reader = new FileReader();

      if(i==0){
        $('#ol-indicators').append(`
        <li data-target="#banner" data-slide-to="${i}" class="active"></li>`);
      }else{
        $('#ol-indicators').append(`
        <li data-target="#banner" data-slide-to="${i}"></li>`);
      }
      
      if(i==0){
        // Closure to capture the file information.
          reader.onload = (function(theFile){
          return function(e){
            // Render thumbnail.  
            
            $('#carousel-image').append(
              `<div class="carousel-item active position-carousel">
              <img src="${e.target.result}" class="d-block w-100">
            </div>`
            ); 
          };
        })(f);
        }else{
         // Closure to capture the file information.
         reader.onload = (function(theFile){
          return function(e){
            // Render thumbnail.  
            $('#carousel-image').append(
              `<div class="carousel-item position-carousel">
              <img src="${e.target.result}" class="d-block w-100">
             </div>`
            ); 
          };
        })(f);
      }

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
}


function putLogotypeBackground(evt) {
  var files = evt.target.files; // FileList object
  
  // Loop through the FileList and render image files as thumbnails.
  for (var i = 0, f; f = files[i]; i++) {
    
    console.log(f);
    // Only process image files.
    if (!f.type.match('image.*')){
      continue;
    }

    var reader = new FileReader();
    
    // Closure to capture the file information.
    reader.onload = (function(theFile){
      console.log(theFile);
      return function(e){
        // Render thumbnail.

        document.getElementById('logotype').style.backgroundImage = `url(${e.target.result})`;
        document.getElementById('logotype').style.backgroundRepeat = "no-repeat";
        document.getElementById('logotype').style.backgroundSize = "200px 200px";
        
        
      };
    })(f);

    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
  }
}

$(document).ready(function () {
  $('#show-password').click(function () {
    console.log("Llamado Correcto");
    if ($('#show-password').is(':checked')) {
      $('#password-one').attr('type', 'text');
      $('#password-two').attr('type', 'text');
    } else {
      $('#password-one').attr('type', 'password');
      $('#password-two').attr('type', 'password');
    }
  });
});

document.getElementById('file-banner').addEventListener('change', putBannerBackground, false);
document.getElementById('file-logotype').addEventListener('change', putLogotypeBackground, false);

/*
*/