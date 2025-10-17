//making a program where the button text counts # of clicks

//add a button titled click me
let totalNumber = 0;

//when clicked, 1++
$("#needy-button").click( function(){
    totalNumber = totalNumber + 3;

    let sentence = "I was clicked " + totalNumber + " times";

    $("#needy-button").html(sentence + " divided by 3");

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
        let sentence = "I was clicked " + totalNumber + " times";
        $("#needy-button").html(sentence + " divided by 3");
    }
})
//show how many times clicked
//on button text


//add a limit

//nvm i wanna add a function
function buttonText(newText){
    $("#needy-button").html(newText);
}