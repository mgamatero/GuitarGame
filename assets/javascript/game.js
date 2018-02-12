// JavaScript function that wraps everything
$(document).ready(function () {

    var guitarArr = [
        {
            value: 0
        },

        {
            value: 0
        },

        {
            value: 0
        },

        {
            value: 0
        }
    ]


    //random gameplay soundfiles
    var chordArray =["assets/images/achord.m4a","assets/images/echord.m4a","assets/images/fchord.m4a","assets/images/gchord.m4a"]
    var winSongArray = ["assets/images/blackbird.m4a","assets/images/ribbonsinthesky.m4a","assets/images/sayyouwontletgo.m4a","assets/images/winner.m4a","assets/images/winner2.m4a"]
    

    // initializetotalWins, display on screen
    var totalWins = 0
    $("#totalWins").html(totalWins)

    // initialize totalWins, display on screen
    var totalLosses = 0
    $("#totalLosses").html(totalLosses)

    //display "--" on screen for previous game status
    $("#win_lose").html("---")

    var totalScore
    var goalScore


    function initialize() {
        // initialize totalScore, display on screen
        totalScore = 0
        $("#totalScore").html(totalScore)

        // initialize goal score, display on screen
        //+100 because sometimes the goalScore is less than 100 and it messes up the random values
        goalScore = (Math.floor(Math.random() * 100)) + 100
        $("#goalScore").html(goalScore)

        // set random GuitarValues - this assigns point values for attribute "points"
        for (var x = 0; x < 4; x++) {
            guitarArr[x].value = Math.floor(Math.random() * (Math.floor(goalScore / 4)))
            $(".guitar" + x).attr("points", guitarArr[x].value)
        }
    }

    initialize()

    $(".guitar").on("click", function () {
        //update totalScore and update display
        totalScore = totalScore + parseInt($(this).attr("points"))
        $("#totalScore").html(totalScore)
        
        //play random chord  
        let chord = new Audio(chordArray[Math.floor(Math.random()*4)])
        chord.play()

        //logic
        if (totalScore === goalScore) {
            totalWins++
            //display to html
            $("#win_lose").html("You won!")
            $("#totalWins").html(totalWins)

            //play random win song
            let winnerSong = new Audio(winSongArray[Math.floor(Math.random()*5)])
            winnerSong.play()
            initialize()
        }
        else if (totalScore > goalScore) {
            totalLosses++
            //display to html
            $("#win_lose").html("You lost!")
            $("#totalLosses").html(totalLosses)
            let lossSong = new Audio("assets/images/loser.m4a")
            lossSong.play()
            initialize()
        }
    })
});



