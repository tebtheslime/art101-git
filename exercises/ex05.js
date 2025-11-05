var count = 0;
let colorCount = 0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"];

/*if (colors[colorCount] == "Orchid"){
    $('body').append("<img width=50 src='images/selfe-fall2025.jpg'>")
}
*/

//button
$("#needy-button").click(function () {
    moodFunction();
   $("#needy-button").html("Clicks: " + count + " Color: " + colors[colorCount] + " " + mood);
   
   /*if (colors[colorCount] == "Orchid") {
       $("body").append("<img width=50 src='images/orchid.png'>");
   }*/

    //makes images and changes the background color of the page
    for (var i=0; i<4; i++){
        makeImage(colors[i]);
    }
   
   changeBackground(colors[colorCount]);

   count = count + 1;
   colorCount = colorCount + 1;
   if (colorCount == 4) { 
        colorCount = 0; 
    }
});

$(".color-button").click(function(){
    changeBackground(this.id);
})

$("#reset-button").click(function(){
    resetCount(0);
    $("#needy-button").html("Click me!");
})

function makeImage(imageName){
    //only creates images if the color is orchid
    if (colors[colorCount]=="Orchid"){
        if (imageName == "Orchid" || imageName == "Coral"){
            $('#imgdiv').append("<img width=50 src='../images/" + imageName + ".jpeg'>");
        }
        else{
            $('#imgdiv').append("<img width=50 src='../images/" + imageName + ".jpg'>");
        }
    }
    return "hello lol"
};

function changeBackground(newColor){
    $("body").css("background-color", newColor);
};

function moodFunction(){
    if (count < 5) { mood = "gresh and happy"; }
    else if ((count >= 5) && (count < 10)) { mood = "keep pushing"; }
    else { mood = "so tired"; }
};

function resetCount(countNumber){
    $('#imgdiv').html('');
    count = countNumber;
    colorCount = countNumber%colors.length;
}