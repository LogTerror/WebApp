"use strict";
var loser = null;  // whether the user has hit a wall
alert("hi");
window.onload = function() {
    $("start").onclick = startClick;
    $("end").onmouseover = overEnd;
    $("maze").onmouseleave = overBody;
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
        boundaries[i].onmouseleave = overBoundary;
    }
};

// called when mouse enters the walls; 
// signals the end of the game with a loss
function overBoundary(event) {
    var x = document.getElementsByClassName("boundary");
    
    for (var i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "red";
        if (x[i].style.backgroundColor == "red") {
            var s = document.getElementById("status").innerHTML, innerHTML = "You Lose!";
        }
    }
}

// called when mouse is clicked on Start div;
// sets the maze back to its initial playable state
function startClick() {
    var x = document.getElementsByClassName("boundary");
    for (var i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "#EEEEEE";
        if (x[i].style.backgroundColor != "red") {
            var s = document.getElementById("status").innerHTML, innerHTML = "Move your mouse over the 'S' to begin.";
        }
    }
}

// called when mouse is on top of the End div.
// signals the end of the game with a win
function overEnd() {
    var x = document.getElementsByClassName("boundary");
    for (var i = 0; i < x.length; i++) {
        if (x[i].style.backgroundColor != "red") {
            var s = document.getElementById("status").innerHTML, innerHTML = "You win!";
        }
    }
}

// test for mouse being over document.body so that the player
// can't cheat by going outside the maze
function overBody(event) {
    var x = document.getElementsByClassName("boundary");
    for (var i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "red";
        if (x[i].style.backgroundColor == "red") {
            var s = document.getElementById("status").innerHTML, innerHTML = "Do Again";
        }
    }
}