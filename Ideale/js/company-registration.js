var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

function putBannerBackground(evt) {
    var files = evt.target.files; // FileList object

    if(files.length>3){
      $( "#alert-files-size" ).fadeIn( "slow", function(){
      });
      setTimeout(function(){ 
        $( "#alert-files-size" ).fadeOut( "slow", function() {
        });
      }, 5000);
    }else{
      for (let i = 0, f; f = files[i]; i++){
        // Only process image files.
        if (!f.type.match('image.*')){
          continue;
        }
  
        var reader = new FileReader();
        document.getElementById('div-message-publicity').style.display = 'none';
  
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
                `<div class="carousel-item container-wallpaper active position-carousel">
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
                `<div class="carousel-item container-wallpaper position-carousel">
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

        $('#logotype-image').attr('src',`${e.target.result}`);
        
        
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


function hideAlertFiles(){
  $( "#alert-files-size" ).fadeOut( "slow", function() {
  });
}

function addInputPhone(){
  var parent = document.querySelector('#phones-numbers');
  var inputs = parent.querySelectorAll('input');

  if(inputs.length<3){
    $('#input-'+inputs.length).attr('id',`input-${inputs.length+1}`);
    $('#phones-numbers').append(`
    <input type="text" id="phone-${inputs.length}" class="form-control" placeholder="Numero Telefonico">`);
      $('#btn-remove-phone').attr('disabled',false);
    if(inputs.length==2){
      $('#button-addon2').attr('disabled',true);
    }
  }
}

function removeInputPhone(){
  var parent = document.querySelector('#phones-numbers');
  var inputs = parent.querySelectorAll('input');

  $('#phone-'+ (inputs.length-1)).remove();
  $('#button-addon2').attr('disabled',false);

  if((inputs.length-1)==0){
    $('#btn-remove-phone').attr('disabled',true);
  }
}


function verifyFieldsCompany(){
  var fields = [
    {field:'file-banner', fill: false},
    {field:'file-logotype', fill: false},
    {field:'name-company', fill: false},
    {field:'email', fill: false},
    {field:'password', fill: false},
    {field:'input-0', fill: false},
    {field:'text-direction', fill: false},
    {field:'select-country', fill: false},
    {field:'mision-textarea', fill: false},
    {field:'vision-textarea', fill: false},
    {field:'faceboox-textbox', fill: false},
    {field:'twitter-textbox', fill: false},
    {field:'instagram-textbox', fill: false}
  ];

}

document.getElementById('file-banner').addEventListener('change', putBannerBackground, false);
document.getElementById('file-logotype').addEventListener('change', putLogotypeBackground, false);