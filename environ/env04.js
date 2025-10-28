let saffronObject = {
    name: "Saffron",
    age: 16,
    type: "wandering swordsman",
    hobbies: ["woodcarving", "climbing", "running"]
};

let indigoObject = {
    name: "Indigo",
    age: 19,
    type: "magician",
    hobbies: ["cooking", "cleaning", "meditation"]
};

let environmentName = "very cool beach environment";

let materials = ["seaweed", "coral", "shells", "feathers"];

function mushroomInfo(characterObject, color){
    $('#output3').html("This is " + characterObject.name + " the " + characterObject.type + ". They are " + characterObject.age + ", and they like: " + characterObject.hobbies.join(', '));
    $('#output3').css('background', color);
    if(characterObject.name == "Indigo"){
        $('#descriptions').css('justify-content', 'flex-start');
    }
    else if(characterObject.name == "Saffron"){
        $('#descriptions').css('justify-content', 'flex-end');
    }
};

$("#output1").html("<p>This is the '"+environmentName+"'!</p>");
$("#flexbox").click(function(){
    $('#output2').append("<p style='background-color:white'>" + materials.join(', ') + "!</p>");
});
$("#flexbox").mouseout(function(){
    $('#output2').html('');
});
$('#foraging').mouseout(function(){
    $('#output3').html('')
    $('#output3').css('background', 'rgba(0, 0, 0, 0)')
});
$('#indigo').mouseover(function(){
    mushroomInfo(indigoObject, 'rgba(141, 141, 247, 1)');
});
$('#saffron').mouseover(function(){
    mushroomInfo(saffronObject, 'rgba(247, 206, 141, 1)');
})