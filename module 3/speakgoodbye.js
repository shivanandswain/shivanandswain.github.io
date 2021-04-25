/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function(){
	var byeSpeaker = {};

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
var speakWord = "Good Bye";
byeSpeaker.speak = function (name) {
  		console.log(speakWord + " " + name);
	}
window.byeSpeaker = byeSpeaker;

})();
