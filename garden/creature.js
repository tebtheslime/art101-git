//a variable for storing names

//when the button is clicked (event)
$("#crAdd").click(function(){
    
    //$("#creature-list").html("button is clicked");
    let crName = $("#crNameInput").val();
    let crColor = $("#crColorInput").val();
    let crEyesNum = $("#crEyeInput").val();
    let crEyesHTML = "";

    for (let i=0; i<crEyesNum; i++){
        crEyesHTML = crEyesHTML + '<div class = eye>.</div>';
    }

    if ((crName != "") || (crName.length < 11)){
        /* old code
        $("#creature-list").append(crName + ", " + crColor + ", " + crEyes);
        $("#crNameInput").val('done!');*/ 
        //$("#crNameInput").html("done!") doesnt work for whatever reason)
        $("#creature-list").append(
            `<div class="creature">
                <div class="creature-body" style = "background: ${crColor}">${crEyesHTML}</div>
                <div class="creature-info">${crName}</div>
            </div>`
        )
    }
    
});
//the magic move(?)
