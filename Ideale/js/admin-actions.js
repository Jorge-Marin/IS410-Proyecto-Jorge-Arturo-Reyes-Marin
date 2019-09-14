function showFields(){
    $('#container-update-fields').addClass('update-fields');
    $('#container-update-fields').append(
        `<div class="row">
        <div class="col-xl-12 title-h1-hr">
            <h1>Actualiza los Campos 
                <div style="float: right;
                margin-right: 45px;" onclick="cleanupdateFields()">
                    <i class="far fa-window-close"></i>
                </div></h1>
            <hr>
        </div>
    </div>
    <div class="row">
        <div class="col-xl-6" style="padding: 20px 40px 20px 40px;">
            <div class="col-xl-12">
                <h3><i class="far fa-lightbulb"></i>Mision</h3>
                <textarea name="" class="form-control textarea-update-fields" id="" cols="30" rows="3"></textarea>
            </div>
            <div class="col-xl-12">
                <h3><i class="fas fa-glasses"></i>Vision</h3>
                <textarea name="" class="form-control textarea-update-fields" id="" cols="30" rows="3"></textarea>
            </div>
            <div class="col-xl-12">
                <h3><i class="fas fa-directions"></i>Direccion</h3>
                <textarea name="" class="form-control textarea-update-fields" id="" cols="30" rows="3"></textarea>
            </div>
            <div class="col-xl-12">
                <h3><i class="fas fa-phone-square-alt"></i>Telefonos</h3>
                <input type="text" class="input-search" style="border: 1px solid #cccccc;
                width: 100% !important;">
            </div>
        </div>
        <div class="col-xl-6" style="padding: 100px 0px">
            <div class="col-xl-12" style="background-image: url(img/mapa.png);
            height: 400px;">
            </div>
        </div>
        <div class="col-xl-12">
            <button onclick='confirmUpdate()' type="button" class="btn btn-outline-warning">Confirmar Actualizacion</button>
        </div>
    </div>`
    );
    $('html, body').animate({
        scrollTop: $("#container-update-fields").offset().top
        }, 2000);
}

function cleanupdateFields(){
    $('#container-update-fields').empty();
    $('#container-update-fields').removeClass('update-fields');
    $('html, body').animate({
        scrollTop: $("#displayInformationCompany").offset().top
        }, 2000);
}


function putLogotypeBackground(evt) {
    var files = evt.target.files; // FileList object
    
    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {
      
      // Only process image files.
      if (!f.type.match('image.*')){
        continue;
      }
  
      var reader = new FileReader();
      
      // Closure to capture the file information.
      reader.onload = (function(theFile){
        return function(e){
          // Render thumbnail.
  
        document.getElementById('profile-image').style.backgroundImage = `url(${e.target.result})`;
        };
      })(f);
  
      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }
  
  document.getElementById('profile-image').addEventListener('change', putLogotypeBackground, false);

  
  function confirmUpdate(){
    $('#container-update-fields').empty();
    $('#container-update-fields').removeClass('update-fields');
    $('html, body').animate({
        scrollTop: $("#displayInformationCompany").offset().top
        }, 2000);
}