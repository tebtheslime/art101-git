let myCommutes = ["metro bus", "walking", "carpool", "driving", "caltrain"];

let myFavoriteCommute = {
    type: "Bus",
    route: 18,
    hasCallouts: true,
    drivers: ["hat person", "person who says good morning", "old man"]
};

let megaSentence;

megaSentence = "<p>My top commutes from the array are: " + myCommutes[0] + ", " + myCommutes[3] + "</p>";

megaSentence = megaSentence + "<p>My favourite commute is: type - " + myFavoriteCommute.type + ", route number " + myFavoriteCommute.route + ", the best driver: " + myFavoriteCommute.drivers[1] + "!</p>";
$("#output").html(megaSentence);