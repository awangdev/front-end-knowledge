"use strict"
function onLoad(){
  document.getElementById("parent-list").addEventListener("click", function(e) {
  		console.log(e.target.nodeName);
		// e.target is the clicked element!
		// If it was a list item
		if(e.target && e.target.nodeName == "LI") {
			// List item found!  Output the ID!
			console.log("List item ", e.target.id, " was clicked!");
		}
	});
 }


var test = "1";
var abc = null;
console.log(abc);



angular.module("testApp", [])
.controller("MainCtrl", ['$scope', function($scope){
	$scope.test = "TEST Angular";
}]);