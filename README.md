#Front-end Knowledge

Forked from [h5bp](https://github.com/h5bp/Front-end-Developer-Interview-Questions) to learn basic front-end knowldge.

**Note:** This doc is used to document resources and potential answers to the question list. Please refer back to [h5bp](https://github.com/h5bp/Front-end-Developer-Interview-Questions) for original contents.

## Table of Contents

  1. [General](#general)
  1. [HTML](#html)
  1. [CSS](#css)
  1. [JS](#js)
  1. [Testing](#testing)
  1. [Performance](#performance)
  1. [Network](#network)
  1. [Coding](#coding)
  1. [Fun](#fun)
  1. [Angular](#angular)


#### General:

* What did you learn yesterday/this week?
* What excites or interests you about coding?
* What is a recent technical challenge you experienced and how did you solve it?
* What UI, Security, Performance, SEO, Maintainability or Technology considerations do you make while building a web application or site?
* Talk about your preferred development environment.
* Which version control systems are you familiar with?
* Can you describe your workflow when you create a web page?
* If you have 5 different stylesheets, how would you best integrate them into the site?
* Can you describe the difference between progressive enhancement and graceful degradation?
* How would you optimize a website's assets/resources?
* How many resources will a browser download from a given domain at a time?
  * What are the exceptions?
* Name 3 ways to decrease page load (perceived or actual load time).
* If you jumped on a project and they used tabs and you used spaces, what would you do?
* Describe how you would create a simple slideshow page.
* If you could master one technology this year, what would it be?
* Explain the importance of standards and standards bodies.
* What is Flash of Unstyled Content? How do you avoid FOUC?
* Explain what ARIA and screenreaders are, and how to make a website accessible.
* Explain some of the pros and cons for CSS animations versus JavaScript animations.
* What does CORS stand for and what issue does it address?

#### HTML:

* What does a `doctype` do?
* What's the difference between standards mode and quirks mode?
* What's the difference between HTML and XHTML?
* Are there any problems with serving pages as `application/xhtml+xml`?
* How do you serve a page with content in multiple languages?
* What kind of things must you be wary of when design or developing for multilingual sites?
* What are `data-` attributes good for?
* Consider HTML5 as an open web platform. What are the building blocks of HTML5?
* Describe the difference between a `cookie`, `sessionStorage` and `localStorage`.
* Describe the difference between `<script>`, `<script async>` and `<script defer>`.
* Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`? Do you know any exceptions?
* What is progressive rendering?
* Have you used different HTML templating languages before?

#### CSS:

* What is the difference between classes and ID's in CSS?
* What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?
* Describe Floats and how they work.
* Describe z-index and how stacking context is formed.
* Describe BFC(Block Formatting Context) and how it works.
* What are the various clearing techniques and which is appropriate for what context?
* Explain CSS sprites, and how you would implement them on a page or site.
* What are your favourite image replacement techniques and which do you use when?
* How would you approach fixing browser-specific styling issues?
* How do you serve your pages for feature-constrained browsers?
  * What techniques/processes do you use?
* What are the different ways to visually hide content (and make it available only for screen readers)?
* Have you ever used a grid system, and if so, what do you prefer?
* Have you used or implemented media queries or mobile specific layouts/CSS?
* Are you familiar with styling SVG?
* How do you optimize your webpages for print?
* What are some of the "gotchas" for writing efficient CSS?
* What are the advantages/disadvantages of using CSS preprocessors?
  * Describe what you like and dislike about the CSS preprocessors you have used.
* How would you implement a web design comp that uses non-standard fonts?
* Explain how a browser determines what elements match a CSS selector.
* Describe pseudo-elements and discuss what they are used for. 
* Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.
* What does ```* { box-sizing: border-box; }``` do? What are its advantages?
* List as many values for the display property that you can remember.
* What's the difference between inline and inline-block?
* What's the difference between a relative, fixed, absolute and statically positioned element?
* The 'C' in CSS stands for Cascading.  How is priority determined in assigning styles (a few examples)?  How can you use this system to your advantage?
* What existing CSS frameworks have you used locally, or in production? How would you change/improve them?
* Have you played around with the new CSS Flexbox or Grid specs?
* How is responsive design different from adaptive design?
* Have you ever worked with retina graphics? If so, when and what techniques did you use?
* Is there any reason you'd want to use `translate()` instead of *absolute positioning*, or vice-versa? And why?

#### JS:

Well, it turns out I refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript) quite often.


* Explain event delegation
```
If we have a parent elements with tons of child nodes. We don't have to bind event listener to each individual child. 
We only need to bind event listener to the parent, the event will be triggered whenever a child is clicked
```

* Explain how `this` works in JavaScript
```
The global this, it's the `window` object.
If `this` is in a method of a object, it refers to the object where the method is called.
It's the same when it's used in a constructor. It refers to that `new` object created.

Note: function.call(o, arg1, arg2, ... etc)
It uses that 'o' object as `this` for method add, and uses arg1, arg2 as input arguments.

Be Careful!
If somehow, a method() is assigned to a global object, then 'this' of course refers to the window object. Then, call this method() in global scope will return global corresponding global variables via 'this'
```

* Explain how prototypal inheritance works



* What do you think of AMD vs CommonJS?
* Explain why the following doesn't work as an IIFE: `function foo(){ }();`.
  * What needs to be changed to properly make it an IIFE?
* What's the difference between a variable that is: `null`, `undefined` or undeclared?
  * How would you go about checking for any of these states?
```
  null: an object can be set to value null. check: value == null?
  undefined: the object has not appear/not declared in the scope at all. check: typeof someObject == "undefined"
  undeclared: when a variable is initialized without using 'var'. It won't work in 'strict' mode.
```

* What is a closure, and how/why would you use one?
* What's a typical use case for anonymous functions?

* How do you organize your code? (module pattern, classical inheritance?)
```
I usualy work in RubyOnRails environment, where I orgnize the Angular front-end code in app/assessts.
Because I'm using MVC framework, my front-end code is organized in VC pattern.
I split the code by pages(view), and put Javascript code (controller)for with each view. And use angular ui-router at highest level.
The app is built as one-page web app.


zen-notepad/app/assets/ 
       |----javascripts 
                ||- home/ 
                        ||**||- _home.html 
                        ||**||- notePadCtrl.js 
                ||- note/ 
                        ||**||- _note.html 
                        ||**||- noteCtrl.js 
                        ||**|| noteService.js 
                ||- app.js 
                ||- application.js
       |----stylesheets 
                ||- application.css


```
* What's the difference between host objects and native objects?

* Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?
```
`function Person(){}`: is a Person() constructor;
`var person = Person()`: called Person() as a function. It's undefined, just because Person() does not return anything.
`var person = Person`:copy Person into person. We can use person() as constructor now. However, anything changes on person, does not affect original Person()
`var shawn = new Person()`: create a new instance of that constructor, shawn. If changing the shawn here, it will change the new constructor.

function Person() {
  this.value = 2;
    return this.value;
};

var person = Person;
var shawn = new person();

person.value = 4;
shawn.value = 3;

console.log(person);//2
console.log(shawn);//3


```

* What's the difference between `.call` and `.apply`?
```
//`.call` gets multiple arguments, separate by comma.
//`.apply' takes an array as 2nd input argument

//'call' can be used to chain constructure
function Product(name, price) {
  this.name = name;
  this.price = price;

  if (price < 0) {
    throw RangeError('Cannot create product ' +
                      this.name + ' with a negative price');
  }

  return this;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

//Apply can be used to chain constructor as well. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
//Also, a simple use case might be, again, to put a array of arguments into a function call:
/* min/max number in an array */
var numbers = [5, 6, 2, 3, 7];

/* using Math.min/Math.max apply */
var max = Math.max.apply(null, numbers); // This about equal to Math.max(numbers[0], ...)

```

* Explain `Function.prototype.bind`.
```
var x = 9;
var module = {
  x: 81,
  getX: function() { return this.x; }
};

var noBindGetX = module.getX;
console.log(noBindGetX());  //9

//Bind back to that particular module
var bindGetX = noBindGetX.bind(module);
console.log(bindGetX());  //81

```

* When would you use `document.write()`?
* What's the difference between feature detection, feature inference, and using the UA string?
* Explain AJAX in as much detail as possible.
* Explain how JSONP works (and how it's not really AJAX).

* Have you ever used JavaScript templating?
  * If so, what libraries have you used?
```
The only javascript template that I'm using is AngularJS ui-router. 
I touch JavaScript templating a little bit during the learning process, where I was using inline javascript template.
Basically include html code inside of <script></script> tag, and give that script block a id.
The id will be reference in angular .config routing.
```

* Explain "hoisting".


* Describe event bubbling.
```
Event bubbling triggers the innermost elements that has a event handler registered with it. If no event handler registered, it propagates to its parent/outer element.

Event bubbling directs an event to its intended target, it works like this:
A button is clicked and the event is directed to the button
If an event handler is set for that object, the event is triggered
If no event handler is set for that object, the event bubbles up (like a bubble in water) to the objects parent

//capturing:
Different from event bubbling. The event is first captured by outermost elements, then propagates to inner elements.
```

* What's the difference between an "attribute" and a "property"?
```
//Note: we are looking at JavaScript property here.
//It's bascially the different property items separated by ',' in the javascript object.
var person = {
    firstname:"John",
    lastname:"Doe",
    age:50,
    eyecolor:"blue"
};
//firstname, lastname, age, eyecolor are all properties.

//About attributes of a Javascript object's perperty: http://xahlee.info/js/javascript_property_attributes.html
console.log(Object.getOwnPropertyDescriptor(person, "firstname"));
//Object {value: "John", writable: true, enumerable: true, configurable: true}
//Property's attribute (property descriptor) tells if a property is: writable, enumerable, configurable.

```

* Why is extending built-in JavaScript objects not a good idea?
* Difference between document load event and document ready event?
* What is the difference between `==` and `===`?
```
=== check for object type matching as well.
vs.
== check for value only.
```
* Explain the same-origin policy with regards to JavaScript.
* Make this work:
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```
* Why is it called a Ternary expression, what does the word "Ternary" indicate?
* What is `"use strict";`? what are the advantages and disadvantages to using it?
* Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`
* Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?
* Why would you use something like the `load` event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?
* Explain what a single page app is and how to make one SEO-friendly.
* What is the extent of your experience with Promises and/or their polyfills?
* What are the pros and cons of using Promises instead of callbacks?
* What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
* What tools and techniques do you use debugging JavaScript code?
* What language constructions do you use for iterating over object properties and array items?
* Explain the difference between mutable and immutable objects.
  * What is an example of an immutable object in JavaScript?
  * What are the pros and cons of immutability?
  * How can you achieve immutability in your own code?

* Explain the difference between synchronous and asynchronous functions.
```
They both talks about the case that: One action can only happen after last action is finished.
synchronous: have to wait on it; cannot move on to other task before it finishes.
asynchronous: can move on the other tasks. When the original action finishes, it will trigger the call back. Works like a promise. Typical example: http request and .then(function(){...}).

We run multiple http request to different sources on a web page, and we won't ever wait for one http response before starting another. So it has to be asynchronous.



```
* http example? Expand a bit on experience with it?
```
//Most experience with Angular $http.
It has a .then function on $http object, where the first function in .then() is success response, and the 2nd is the error response.

Working as callback function, .then() catches server response and trigger corresponding functions.
```

* What is event loop?
  * What is the difference between call stack and task queue?




#### Testing:

* What are some advantages/disadvantages to testing your code?
* What tools would you use to test your code's functionality?
* What is the difference between a unit test and a functional/integration test?
* What is the purpose of a code style linting tool?

#### Performance:

* What tools would you use to find a performance bug in your code?
* What are some ways you may improve your website's scrolling performance?
* Explain the difference between layout, painting and compositing.

#### Network:

* Traditionally, why has it been better to serve site assets from multiple domains?
* Do your best to describe the process from the time you type in a website's URL to it finishing loading on your screen.
* What are the differences between Long-Polling, Websockets and Server-Sent Events?
* Explain the following request and response headers:
  * Diff. between Expires, Date, Age and If-Modified-...
  * Do Not Track
  * Cache-Control
  * Transfer-Encoding
  * ETag
  * X-Frame-Options
* What are HTTP actions? List all HTTP actions that you know, and explain them.

#### Coding:

*Question: What is the value of `foo`?*
```javascript
var foo = 10 + '20';
```

*Question: How would you make this work?*
```javascript
add(2, 5); // 7
add(2)(5); // 7
```

*Question: What value is returned from the following statement?*
```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

*Question: What is the value of `window.foo`?*
```javascript
( window.foo || ( window.foo = "bar" ) );
```

*Question: What is the outcome of the two alerts below?*
```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

*Question: What is the value of `foo.length`?*
```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

*Question: What is the value of `foo.x`?*
```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

*Question: What does the following code print?*
```javascript
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');
```

#### Fun:

* What's a cool project that you've recently worked on?
* What are some things you like about the developer tools you use?
* Do you have any pet projects? What kind?
* What's your favorite feature of Internet Explorer?
* How do you like your coffee?

#### Angular:

* basic setup in app.js
```
//html:
<head>
<title>TEST APP</title>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
<script type="text/javascript" src="app.js"></script>
</head>
<div ng-app="testApp">
  <div ng-controller="MainCtrl">
    {{test}}
  </div>
</div>


//app.js

angular.module("testApp", [])
.controller("MainCtrl", ['$scope', function($scope){
  $scope.test = "TEST Angular";
}]);

```
