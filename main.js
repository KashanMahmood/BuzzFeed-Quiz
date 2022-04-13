var total= 2

$('body').on('click', '.answer', function() {

    $('input[type="radio"]:checked').each(function() {

        $(this).parent().siblings().each(function(){
    
            $(this).removeClass('checked');
            $(this).addClass('unChecked');             
        });

        $(this).parent().addClass('checked');
        $(this).parent().removeClass('unChecked');
    
    });

});

$('#doneButton').on('click', function() {
    
     
    console.log("Die Bitch")

});



