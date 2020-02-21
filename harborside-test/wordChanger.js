//reference https://javascript.info/array-methods

const card = document.getElementById("card");
let word = document.getElementById("word");
let nextWord = ["Joy", "Community", "Peace", "Strength", "Fullness", "Victory", "Healing", "Purpose", "Rest", "Wisdom", "Freedom"]; //This is the list of word that will be cycled through, if you change it make sure that it's in quotes and has a comma between each word

const speed = 2000; //time is in miliseconds

//acts as a timer
setInterval(function(){
    //acts as a loop to go through array positions
    //replaces word with next word
        //replaceChildNode
            //card.replaceChild(nextWord, word);

}, speed);

/*
const body = document.body;
const six = body.innerHTML;
loopThroughArray(nextWord, function (arrayElement, loopTime) {
    six += arrayElement+ ": " + loopTime+ "<br/>";
}, 1000);

function loopThroughArray (array, callback, interval) {
    let newLoopTimer = new LoopTimer(function (time) {
        var element = array.shift();
        callback(element, time - start);
        array.push(element);
    }, interval);

    let start = newLoopTimer.start();
};
*/