// JavaScript function that wraps everything
$(document).ready(function () {
    //array to hold guitar values.  empty at this point
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
    var chordArray = ["assets/images/achord.m4a", "assets/images/echord.m4a", "assets/images/fchord.m4a", "assets/images/gchord.m4a"]
    var winSongArray = ["assets/images/blackbird.m4a", "assets/images/ribbonsinthesky.m4a", "assets/images/sayyouwontletgo.m4a", "assets/images/winner.m4a", "assets/images/winner2.m4a"]


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
        goalScore = (Math.floor(Math.random() * 20)) + 20
        $("#goalScore").html(goalScore)

        // set random GuitarValues - this assigns point values for attribute "points"
        for (var x = 0; x < 4; x++) {
            guitarArr[x].value = Math.floor(Math.random() * (Math.floor(goalScore / 4)))
            $(".guitar" + x).attr("points", guitarArr[x].value)
        }
    }

    //initialize values on load
    initialize()


    $(".guitar").on("click", function () {
        //update totalScore and update display
        totalScore = totalScore + parseInt($(this).attr("points"))
        $("#totalScore").html(totalScore)


        //play random chord  
        let chord = new Audio(chordArray[Math.floor(Math.random() * 4)])
        chord.play()


        //win logic
        if (totalScore === goalScore) {
            totalWins++

            
            $("#totalWins").html(totalWins)

            //play random win song
            var randomSong = winSongArray[Math.floor(Math.random() * 5)]
            let winnerSong = new Audio(randomSong)
            winnerSong.play()
            alert("Winner - "+randomSong.slice(14))
            initialize()
        }
        //loss logic
        else if (totalScore > goalScore) {
            totalLosses++

            //jquery animation to shake guitar images
            $(".guitar").jrumble()
            $(".guitar").trigger('startRumble')
            setInterval(function () {
                $(".guitar").trigger('stopRumble')
            },1000)

            $("#totalLosses").html(totalLosses)
            let lossSong = new Audio("assets/images/loser.m4a")
            lossSong.play()
            initialize()
        }
    })
});



