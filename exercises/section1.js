let colors = ["red", "orange", "yellow", "green"];

let count = 0;

$("#magic-button").click(function(){
    $("body").css("background-color", colors[count]);
    count = (count + 1) % colors.length;
});
