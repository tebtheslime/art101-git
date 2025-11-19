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
    $('#output3').append("This is " + characterObject.name + " the " + characterObject.type + ". They are " + characterObject.age + ", and they like: " + characterObject.hobbies.join(', '));
    $('#output3').css('background', color);
    if(characterObject.name == "Indigo"){
        $('#descriptions').css('justify-content', 'flex-start');
    }
    else if(characterObject.name == "Saffron"){
        $('#descriptions').css('justify-content', 'flex-end');
    }
};

$("#output1").html("<p>This is the '"+environmentName+"'!</p>");

$(".flexbox").click(function(){
    //$('#output2').html("<p style='background-color:white'>" + materials.join(', ') + "!</p>");
    $('#materialInput').show();
    let mushroom1 = $("#saffron");
    let mushroom2 = $("#indigo");
    function animateImage(image, speed){
        image.animate({marginLeft: '+=120px'}, speed);
        image.animate({marginLeft: '-=120px'}, speed);
        image.animate({marginRight: '+=120px'}, speed);
        image.animate({marginRight: '-=120px'}, speed);
    };
    animateImage(mushroom2, 1000);
    animateImage(mushroom1, 750);
});
$('#materialInput input').change(function(){
    let tempval = $(this).val();
    console.log(tempval);
    /*$('#saffron').animate({marginLeft: '500px'}, "fast");
    $('#saffron').animate({marginRight: '500px'}, "fast");*/
    materials.push(tempval);
    $('#output2').html("<p style='background-color:white'>" + materials.join(', ') + "! But could there be more? (try clicking)</p>");
})
$(".flexbox").hover(function(){
        $('#output2').html("<p style='background-color:white'>" + materials.join(', ') + "! But could there be more? (try clicking)</p>");
    }, function(){
        $('#output2').html('');
        $('#materialInput').hide();
    });
$('#indigo').hover(function(){
    mushroomInfo(indigoObject, 'rgba(141, 141, 247, 1)')
    }, function(){
        $('#output3').html('');
        $('#output3').css('background', 'rgba(0, 0, 0, 0)')
});
$('#saffron').hover(function(){
    mushroomInfo(saffronObject, 'rgba(247, 206, 141, 1)')
    }, function(){
        $('#output3').html('');
        $('#output3').css('background', 'rgba(0, 0, 0, 0)')
})