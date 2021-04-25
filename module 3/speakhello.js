/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function(){
 var helloSpeaker = {};
 

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
var speakWord = "Hello";
helloSpeaker.speak = function (name) {
  		console.log(speakWord + " " + name);
	}

window.helloSpeaker = helloSpeaker;

})();
