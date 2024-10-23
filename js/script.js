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

    



// let textViewer = true

//     $('#btn').click(function(){
//         if(textViewer) { $('#text').hide(function(){ console.log('text hidden');  textViewer=false; }); } 
    
//         else { $('#text').show(function(){ console.log('text shown'); textViewer=true; }); }
//     });


    // const colors = ['lightblue', '#9653ef', 'lightcoral', 'lightgoldenrodyellow', 'lightpink'];
    // const colorNames = ['Light Blue', 'Purple', 'Light Coral', 'Light Golden Rod Yellow', 'Light Pink'];
    // let currentColorIndex = 0;

    // $('#colorBtn').click(function () {
    //     currentColorIndex = (currentColorIndex + 1) % colors.length; // Cycle through colors
    //     $('#colorBox').css('background-color', colors[currentColorIndex]);
    //     $('#colorName').text(colorNames[currentColorIndex]); // Update the color name display
    // });

    const color = ['lightblue', 'black' , 'red' , 'green'];
    const colorName = ['Light Blue', 'Black', 'Red', 'Green'];
    let currentColorValue = 0;

    $('#colorBtn').click(function(){
        currentColorValue = (currentColorValue + 1) % color.length;
        $('#colorBox').css('background-color', color[currentColorValue]);
        $('#colorName').text(colorName[currentColorValue]); 
        console.log('color has been changed');
    });


});


