


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

let aChord = new Audio("assets/images/achord.m4A")
let winSong = new Audio("assets/images/Win.m4A")
let lossSong = new Audio("assets/images/Lost.m4A")

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
        goalScore = (Math.floor(Math.random() * 200)) + 100
        $("#goalScore").html(goalScore)

        // set random GuitarValues - this assigns point values for attribute "points"
        for (var x = 0; x < 4; x++) {
            guitarArr[x].value = Math.floor(Math.random() * (Math.floor(goalScore / 4)))
            console.log(guitarArr[x].value) //debug only
            $(".guitar" + x).attr("points", guitarArr[x].value)
        }
    }

    initialize()

    $(".guitar").on("click", function () {
        //update totalScore and update display
        totalScore = totalScore + parseInt($(this).attr("points"))
        $("#totalScore").html(totalScore)
        aChord.play()

        //logic
        if (totalScore === goalScore) {
            totalWins++
            winSong.play()
            var timeDelay = setTimeout(function () {
                $("#win_lose").html("You are a Winner!")
                $("#totalWins").html(totalWins)
                
            }, 500)

            var timeReset = setTimeout(function () {
                initialize()
                
            }, 750)
        }
        else if (totalScore > goalScore) {
            lostSong.play()
            totalLosses++
            var timeDelay = setTimeout(function () {
                $("#win_lose").html("You are a Loser!")
                $("#totalLosses").html(totalLosses)
            }, 500)
            var timeReset = setTimeout(function () {
                initialize()
            }, 750)
        }

    })



});



