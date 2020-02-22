//Need to create a loop in which every 1.5 seconds the word changes to a new one going down the array next word. Needs to repeat forever

//https://repl.it/@ColeHenson/help-jenny

const words = ["Joy", "Community", "Peace", "Strength", "Fullness", "Victory", "Healing", "Purpose", "Rest", "Wisdom", "Freedom"]; //This is the list of word that will be cycled through, if you change it make sure that it's in quotes and has a comma between each word
const speed = 1500; //time is in miliseconds
let wordReplacement = document.querySelector("#word");
let currentWord = 0;

//acts as a timer
window.setInterval(function replaceWord() {
    currentWord++;
    
    if (currentWord > words.length-1) currentWord = 0;
    wordReplacement.innerText = words[currentWord];
  }, speed);