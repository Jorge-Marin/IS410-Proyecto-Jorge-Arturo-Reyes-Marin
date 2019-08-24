function activeCurrent(currentActive){
    var navElements = ['home','products','promotions','logotype','locals','dashboard','promocion'];

    for(let i=0; i<navElements.length; i++){
        if($('#'+navElements[i]).hasClass('active')){
            $('#'+navElements[i]).removeClass('active');
            $('#'+navElements[i]).remove('span');
            $('#'+navElements[i]+'-a').removeClass('border-active');            
        }
    } 
    

    $('#'+currentActive).addClass('active');
    $('#'+currentActive).append(
        `<span class="sr-only">(current)</span>`  
    );
    $('#'+currentActive+' a').addClass('border-active');
}

$('#s5').cycle({ 
    fx:     'scrollLeft', 
    timeout: 5000, 
    before:  onBefore, 
    after:   onAfter 
 });