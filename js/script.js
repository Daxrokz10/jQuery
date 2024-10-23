$(document).ready(function (){


    // $('p').click(function(){
    //     console.log('you clicked on p');
    //     $('p').hide();
    // });

    // $('p').hover(function(){console.log('you hovered on :' , this);});

    // $('p').dblclick(function(){
    //     console.log('you double clicked on : ',this);
    //     console.log('thanks');
    // });

    // $('#btn').click(function(){
    //     $('#text').fadeOut(1000, function(){
    //         console.log('faded out');
    //     });
    //     $('#text').fadeIn(1000, function(){
    //         console.log('faded in');
    //     });
    // });

    // let isTextVisible = true; // Flag to track the visibility of the text

    // $('#btn').click(function() {
    //     if (isTextVisible) {
    //         $('#text').fadeOut(1000, function() {
    //             console.log('faded out');
    //             isTextVisible = false; // Update the flag to indicate the text is now hidden
    //         });
    //     } else {
    //         $('#text').fadeIn(1000, function() {
    //             console.log('faded in');
    //             isTextVisible = true; // Update the flag to indicate the text is now visible
    //         });
    //     } 
    // });


    $('#btn').click(function(){
        $('#text').hide(function(){
            console.log("text has been hidden");
        })
    })
}); 