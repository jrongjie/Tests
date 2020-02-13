//defines the space we want the word change to happen
/*var container = document.getElementById("container");

//This is the list of word that will be cycled through, if you change it make sure that it's in quotes and has a comma between each word
var nextWord = ["Love", "Peace", "Joy", "Patience", "Kindness", "Goodness", "Faith", "Confidence"];

nextWord.forEach(function(element){
  console.log(element);
  //container.replaceChild(nextWord, container);
})
*/

var body = document.body;
var six = body.innerHTML;
var splittedText = ["Hello", "World", "How", "Are", "You", "Today"];

loopThroughArray(splittedText, function (arrayElement, loopTime) {
    six += arrayElement+ ": " + loopTime+ "<br/>";
}, 1000);

function loopThroughArray(array, callback, interval) {
    var newLoopTimer = new LoopTimer(function (time) {
        var element = array.shift();
        callback(element, time - start);
        array.push(element);
    }, interval);

    var start = newLoopTimer.start();
};

// Timer
function LoopTimer(render, interval) {
    var timeout;
    var lastTime;

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
        var thisTime = Date.now();
        var loopTime = thisTime - lastTime;
        var delay = Math.max(interval - loopTime, 0);
        timeout = setTimeout(createLoop, delay);
        lastTime = thisTime + delay;
        render(thisTime);
    }
}
