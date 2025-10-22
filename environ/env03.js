let saffObj = {
    name: "Saffron",
    age: 16,
    type: "wandering swordsman",
    hobbies: ["woodcarving", "climbing", "running"]
};

let indObj = {
    name: "Indigo",
    age: 19,
    type: "magician",
    hobbies: ["cooking", "cleaning", "meditation"]
};

let environmentName = "very cool beach environment";

let materials = ["seaweed", "coral", "shells", "feathers"];

$("#output1").html("<p>This is the '"+environmentName+"'!</p>");
$("#flexbox").mouseover(function(){
    $('#output2').append("<p style='background-color:white'>" + materials.join(', ') + "!</p>");
});
$("#flexbox").mouseout(function(){
    $('#output2').html('');
});
$('#indigo').mouseover(function(){
    $('#output3').html("This is " + indObj.name + " the " + indObj.type + ". They are " + indObj.age + ", and they like: " + indObj.hobbies.join(', '));
    $('#descriptions').css('justify-content', 'flex-start');
    $('#output3').css('background', 'rgba(141, 141, 247, 1)')
});
$('#saffron').mouseover(function(){
    $('#output3').html("This is " + saffObj.name + " the " + saffObj.type + ". They are " + saffObj.age + ", and they like: " + saffObj.hobbies.join(', ') + ' :D');
    $('#descriptions').css('justify-content', 'flex-end');
    $('#output3').css('background', 'rgba(247, 206, 141, 1)')
});
$('#foraging').mouseout(function(){
    $('#output3').html('')
    $('#output3').css('background', 'rgba(0, 0, 0, 0)')
})