$(document).ready(function (){


    $('p').click(function(){
        console.log('you clicked on p');
        $('p').hide();
    });

    $('p').hover(function(){
        console.log('you hovered on :' , this);
    });


});