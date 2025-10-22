let count = 0;
let colors = ['Orchid', "Coral", "HotPink", "Plum"];

$('#needy-button').click(function(){
    let mood = '';
    let colorsIndex = (count) % colors.length;
    if ((count >= 5) && (count < 10)){
        mood = "keep pushing";
    }
    else if (count < 5){
        mood = "fresh and happy";
    }
    else{
        mood = "so tired!"
    }
    if (colors[colorsIndex]=='Orchid'){
        $("#test-div").html("<img width = 50 src='../images/How-to-Do-A-Reverse-Image-Search-on-Your-iPhone-FT-GettyImages.jpg'>")
    }
    else{
        $('#test-div').html('');
    }
    $('#needy-button').html(count + " clicks... " + colors[colorsIndex].toLowerCase() + "... " + mood);
    $('#needy-button').css('background-color', colors[(count+1)%colors.length]);
    $('body').css('background-color', colors[colorsIndex]);
    count = count + 1;
});

function autoClick(){
    $('#needy-button').click(function(){
        
    })
}