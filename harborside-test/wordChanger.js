const card = document.getElementById("card"); //defines the space we want the word change to happen
let word = document.getElementById("word");
let nextWord = ["Joy", "Community", "Peace", "Strength", "Fullness", "Victory", "Healing", "Purpose", "Rest", "Wisdom", "Freedom"]; //This is the list of word that will be cycled through, if you change it make sure that it's in quotes and has a comma between each word

const speed = 2000; //time is in miliseconds
let index = nextWord.indexOf();

setInterval(function(){
    nextWord.forEach(function(nextWord){
        console.log();
        //card.replaceChild(nextWord, word);
      });
}, speed);

/*const body = document.body;
const six = body.innerHTML;


loopThroughArray(nextWord, function (arrayElement, loopTime) {
    six += arrayElement+ ": " + loopTime+ "<br/>";
}, 1000);

function loopThroughArray(array, callback, interval) {
    let newLoopTimer = new LoopTimer(function (time) {
        var element = array.shift();
        callback(element, time - start);
        array.push(element);
    }, interval);

    let start = newLoopTimer.start();
};
// Timer
function LoopTimer(render, interval) {
    let timeout;
    let lastTime;

    this.start = startLoop;
    this.stop = stopLoop;

    // Start Loop
    function startLoop() {
        timeout = setTimeout(createLoop, 0);
        lastTime = Date.now();
        return lastTime;
    }
    // Stop Loop
    function stopLoop() {
        clearTimeout(timeout);
        return lastTime;
    }
    // The actual loop
    function createLoop() {
        let thisTime = Date.now();
        let loopTime = thisTime - lastTime;
        let delay = Math.max(interval - loopTime, 0);
        timeout = setTimeout(createLoop, delay);
        lastTime = thisTime + delay;
        render(thisTime);
    }
}
*/