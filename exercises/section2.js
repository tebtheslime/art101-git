function checkMood(score, funny) {
    let result = ""
    function logic(){
        if (score > 7){
            return "ex1";
        }
        else if(score > 4){
            return "ex2";
        }
        else{
            return "ex3";
        }
    }

    if (funny == 0){
        result = logic();
    }
    else {
        result = "oops, try again"
    }
    
    return result
  }
  
function showMood() {
    let randomScore = Math.floor(Math.random() * 10) + 1;
    let funnyBool = Math.floor(Math.random() + 0.5);
    let moodResult = checkMood(randomScore, funnyBool);
  
    $("#mood-display").html(
      "Score: " + randomScore + "<br>Your mood is: <b>" + moodResult + "</b>"
    );

    return moodResult;
}
  
  $("#mood-button").click(function () {
    showMood();
    if (moodResult == "ex1"){
        $("body").css("background-color", "red");
        $("#mood-display").append("<img src = '../images/Orchid.jpeg' width=200px>")
    }
    else if (moodResult == "ex2"){
        $("body").css("background-color", "white");
        $("#mood-display").append("<img src = '../images/Coral.jpeg' width=200px>")
    }
    else {
        $("body").css("background-color", "blue")
        $("#mood-display").append("<img src = '../images/HotPink.jpg' width=200px>")
    }
  });

  $("#reset-button").click(function () {
    showMood();
  });