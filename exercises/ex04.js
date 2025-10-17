//making a program where the button text counts # of clicks

//add a button titled click me
let totalNumber = 0;
let colors = ['Orchid', "Coral", "HotPink", "Plum"];

//when clicked, 1++
$("#needy-button").click( function(){
    
    buttonText("Clicks: " + totalNumber + " Color: " + colors[totalNumber % 4]);
    $("body").css("background-color", colors[totalNumber % 4]);

    totalNumber = totalNumber + 1;

})

$("#needy-button").mouseover(function(){
    if (totalNumber == 0){
        $("#needy-button").html("you wanna click me?!");
    }
    else{
        buttonText("you wouldn't....");
    }
    
})
$("#needy-button").mouseout(function(){
    if (totalNumber == 0){
        $("#needy-button").html("wow a button");
    }
    else{
        buttonText("Clicks: " + totalNumber + " Color: " + colors[totalNumber % 4]);
    }
})

//nvm i wanna add a function
function buttonText(newText){
    $("#needy-button").html(newText);
}