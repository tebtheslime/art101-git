var count = 0;
let colorCount = 0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"];

/*if (colors[colorCount] == "Orchid"){
    $('body').append("<img width=50 src='images/selfe-fall2025.jpg'>")
}
*/

//button
$("#needy-button").click(function () {
   if (count < 5) { mood = "gresh and happy"; }
   else if ((count >= 5) && (count < 10)) { mood = "keep pushing"; }
   else { mood = "so tired"; }
   $("#needy-button").html("Clicks: " + count + " Color: " + colors[colorCount] + " " + mood);
   
   /*if (colors[colorCount] == "Orchid") {
       $("body").append("<img width=50 src='images/orchid.png'>");
   }*/

   makeImage("Coral");
   makeImage("Orchid");
   changeBackground("coral");

   count = count + 1;
   colorCount = colorCount + 1;
   if (colorCount == 4) { colorCount = 0; }
});

$(".color-button").click(function(){
    changeBackground(this.id);
})

function makeImage(imageName){
    if (colors[colorCount]=="Orchid"){
        $('body').append("<img width=50 src='../images/" + imageName + ".jpeg'>")
    }
    return "hello lol"
};

function changeBackground(newColor){
    $("body").css("background-color", newColor);
};