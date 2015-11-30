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

	"use strict"

var o = {f:function(){ return this.a + this.b; }};
var p = Object.create(o);
p.a = 1;
p.b = 4;


console.log(p.f());