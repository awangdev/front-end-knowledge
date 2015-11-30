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
```javascript
//you can do Object.create(some existing object), or use a constructor with 'new' keyword. In ES6, can even use class.
//They inherite the values, functions in a new instance. Changes on the new instance won't affect original objects.

//With Object.create(...)
"use strict"
var o = {
  a : 2,
  square: function(){
    return this.a * this.a;
  }
};
var newObj1 = Object.create(o);
newObj1.a = 3;
console.log(newObj1.square());//output: 9


//New object example:
function obj(){
  this.a = 1;
  this.b = 2;
  this.product = function(){
    return this.a * this.b;
  }
}
var newObj2 = new obj();
newObj2.a = 3;
newObj2.b = 3;
console.log(newObj2.product());//output: 9

```


* What do you think of AMD vs CommonJS?
```
Never used AMD and CommonJS. Research a bit:
They are working with JavaScript module, dependecies...

AMD: Asynchronous Module Definition format. It's more suited for the browser, because it supports asynchronous loading of module dependencies.
CommonJS: targeting server-side environments.

I haven't got a chance to use it at all, and I handle all my dependencies pretty much in Rails Assests pipeline with bower, gem .. etc.

```

* Explain why the following doesn't work as an IIFE: `function foo(){ }();`.
  * What needs to be changed to properly make it an IIFE?
```javascript
//IIFE: Immediately-invoked function expression. It's nothing to do with event handling, not document onload.
//(...contents) convert the conents into a expression.
//'();' excute the rsult from the evaluated expression.
//so, this will excute automatically:

(function foo(){console.log("IIFE now!")})();
```

* What's the difference between a variable that is: `null`, `undefined` or undeclared?
  * How would you go about checking for any of these states?
```
  null: an object can be set to value null. check: value == null?
  undefined: the object has not appear/not declared in the scope at all. check: typeof someObject == "undefined"
  undeclared: when a variable is initialized without using 'var'. It won't work in 'strict' mode.
```

* What is a closure, and how/why would you use one?
```javascript
//A closure is a special kind of object that combines two things: a function, and the environment in which that function was created. 
function func(){
  var name = "shawn";
  function display(){
    console.log(name);
  }
  display();
  return display;
};

var outterDisplay = func();// returns the entire func() as a closure, in which scope it includes both the 'name' string and 'display() function'

outterDisplay();

/*
  //outputs:
  shawn         // by calling func()
  shawn         // by calling outterDisplay
*/

```

* What's a typical use case for anonymous functions?
```javascript
//Anonymous function is like this. It's declared using 'function()' operator, but without function declaration. Then, it's simply saved into a varaible called 'testFunc'.
var testFunc = function(){
  //.....
}
//The reason that we can assign anonymous function: function is just a special type of javascript object, it can be passed around.
function test(x){
  if (x == 1) {
    return function(){return "ONE";};
  } else {
    return function(){return "ELSE"};
  }
}
console.log(test(1)());

//SO, usage: it's used as a expression. It's created in runtime, and can be pased into other functions as variable easily. 



//Otherwise, here is a named function, in a regular way
function testFun(){
  //...
};

```

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
```javascript
//Host Object: objects that are defined by the language specification:
//Object(constructor), Date, Math, parseInt, eval, split, string methods ... etc.

//Host Ojbect: methods suported in host envrionment. Any non-native object is host object.
//In browser envrionment working with html: window, document, location, history, getElementById, XMLHttpRequest, setTimeout....etc


//Note: for work project, now it's clear that I've been working with native objects for over a year!

```

* Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?
```javascript
//`function Person(){}`: is a Person() constructor;
//`var person = Person()`: called Person() as a function. It's undefined, just because Person() does not return anything.
//`var person = Person`:copy Person into person. We can use person() as constructor now. However, anything changes on person, does not affect original Person()
//`var shawn = new Person()`: create a new instance of that constructor, shawn. If changing the shawn here, it will change the new constructor.

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
```javascript
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
```javascript
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
```
We don't use it normally by ourself. Changing the web page after loaded, is not a good practice.

However, some third party might use it. For example, an extension on google chrome, ads, google analytics... etc.

So, only use it if working for 3rd party.
```

* What's the difference between feature detection, feature inference, and using the UA string?
```javascript
//Well, this features is about cross-browser compatibiilty...

//feature detection: check if certain feature exists. For example, check if a function exists: 
(typeof (clickAction) === "function") // if not exist, it will be undefined.
//feature inference: Something bad: making assumptions on existance of things, and build logic around the assumption. The assumption might turn to be false in a different environment.
//UA String: User-Agent string, like:
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71
//However, using UA String to check browser is still a bad practice. We are making assumptions about how the UA String will be written. If it's written differently, all logics built around the UA string will fail.

```

* Explain AJAX in as much detail as possible.
```
AJAX: Asynchronous JavaScript and XML
As I learn javascript, I've been working for over a year with native Javascript, but not with host JavaScript environment like in browser. So honestly, not close to AJAX, expecially when I learn Angular, most stuff are handled ...

As a brief understanding, it utilizes a set of web technologies used on client-side to create asynchronous web app. 

Allow web page to exchange date to server, without the need to reload the entire page .

And with jQuery, they are pretty much handled and built in AngularJS.

```

* Explain how JSONP works (and how it's not really AJAX).
```
JSONP: JSON with Padding, is a technique used by web developers to overcome the cross-domain restrictions imposed by browsers to allow data to be retrieved from systems other than the one the page was served by.
```

* Have you ever used JavaScript templating?
  * If so, what libraries have you used?
```
The only javascript template that I'm using is AngularJS ui-router. 
I touch JavaScript templating a little bit during the learning process, where I was using inline javascript template.
Basically include html code inside of <script></script> tag, and give that script block a id.
The id will be reference in angular .config routing.
```

* Explain "hoisting".
```


```

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
```javascript
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
```
Native JavaScript objects are implemented according to standard like ES5, ES6. If we choose to change the behavior, there is a chance that we break the rules specified.
Also, if the later on we need to adapt to later version of ECMAScript, we have to check all the extended objects again.

When need some extended feature, just build a standalone object.
```

* Difference between document load event and document ready event?
```
//$(document).ready() fires when the HTML finishes loading. It does not care about images, scripts, css ... etc
//window.onload: a bit slower. It waits for all contents(images, css, scripts ... etc), then fires.
```

* What is the difference between `==` and `===`?
```
=== check for object type matching as well.
vs.
== check for value only.
```
* Explain the same-origin policy with regards to JavaScript.
```
The same-origin policy restricts how a document or script loaded from one origin can interact with a resource from another origin. It is a critical security mechanism for isolating potentially malicious documents.

For example, it fails and triggers cross-origin error, if:
- you try to use different protocol: http vs. https
- you try to use different port
- you try to access different host

It usually happens when I build a simple AngularJS app, and try to build routers onto it.

A not-so-easy way to walk around, is basically to have a backend server. For example, a EasyPHP software would do the trick, it launches a apache server.

```

* Make this work:
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]

function duplicate(arr){
  var size = arr.length;
  for (var i = 0; i < size; i++) {
    arr.push(arr[i])
  }
  return arr;
}

console.log(duplicate([1,2,3,4,5]));
```

* Why is it called a Ternary expression, what does the word "Ternary" indicate?
```
The conditional (ternary) operator is the only JavaScript operator that takes 3 operands. This operator is frequently used as a shortcut for the if statement.

condition ? expr1 : expr2 

```

* What is `"use strict";`? what are the advantages and disadvantages to using it?
```javascript
//'use strict' indicates the code should be executed in 'stric mode'. Well, to have a Java mom style. It converts mistakes into errors

//Disadvantages:
//More constraints. for example, can access 'this' in global scope. 
//Cause confusion if some people from the team are originally in normal mode, but cannot adapt to strict mode, especailly when some features are built in strict mode, so it won't work as expected for guys in normal mode.

//My opinion: I'd use strict mode, because it checks for potential mistakes like if I accidentally initialize a variable without definition. It causes issues. So I prefer to have error checkers. This way, JavaScript won't be able to kill you that easily.

//Examples:
"use strict";
//JavaScript would fail if:
//try to access 'this' in global scope, where 'this' is defined in a function

//initialize a variable without define it:
x = 3.14
//try to delete a variable
delete x;
//duplicating parameter name:
function x(p1, p1) {};  
//using Octal numeric literals
var x = 010;
//reserved keywords:
//eval, arguments

// Assignment to a non-writable property
var obj1 = {};
Object.defineProperty(obj1, "x", { value: 42, writable: false });
obj1.x = 9; // throws a TypeError

// Assignment to a getter-only property
var obj2 = { get x() { return 17; } };
obj2.x = 5; // throws a TypeError

// Assignment to a new property on a non-extensible object
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = "ohai"; // throws a TypeError
//..
```

* Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`
```javascript
for (var i = 0; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + " fizzbuzz");
  } else if (i % 3 == 0) {
    console.log(i + " fizz");
  } else if (i % 5 == 0) {
    console.log(i + " buzz");
  }
}

```


* Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?
```
global scope variable are generally bad in Javascript. Because you don't know where it appears, and where it's initialized, and where-else it's being used.
With that said, since it's already broken, it's just safer to not touch it. Because once you change something on it, pieces of the project will break underneath.
```

* Why would you use something like the `load` event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?
```

```

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
```
/*
event loop:The browser has inner loop, called Event Loop, which checks the event queue and processes events, executes functions etc.

Quite clear explanation:
http://www.altitudelabs.com/blog/what-is-the-javascript-event-loop/

- Javascript: single threaded
- To excute every single line of javascript, Javascript engine uses call stack.
- Call stack has blocking issue. So JavaScript engine uses asynchronous call back.
- Now, we have 3 parties: call stack, event table, event queue.
1. call stack: stores the regular function calls.
2. When it's a callback function, register it in the Event Table.
3. Event Table has a condition that will trigger to move the call back funtion. When it triggers (for example, a wait of 5 seconds), it'll move that callback function into Event Queue. Ready to go!
4. Now, Event Loop comes to play. It checks the callstack. Only if callstack is empty(), it will poll() off the head of the Event Queue, and add it to callstack.
5. Ofcourse the callstack will excute whatever that's next.

So, in conclusion, Event Loop runs indefinitely and checks if call stack if empty(). If so, poll() items from queue and add into call stack.
*/

```



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
```
/*
GET,HEAD,POST,PUT,DELETE,TRACE,OPTIONS,CONNECT,PATCH
GET:request a representation of the specified resource. Only retrieve data. No other effects.
HEAD:same as GET request for same info, but only get header, without response body. Useful to retrieve meta-data
POST:request the server to accept the entity enclosed inthe request. Usually it populates the database, write some conents to the server storage.
*/
```
#### Coding:

*Question: What is the value of `foo`?*
```javascript
var foo = 10 + '20';
//'1020' as a string
```

*Question: How would you make this work?*
```javascript
add(2, 5); // 7
add(2)(5); // 7
/*
  Implement:
  If the function has 2 inputs, simply return x + y.
  Otherwise, return another funtion with a 2nd variable y. Then return x+y.
    This works because add(x,y) creates the closure with 'x' ready to use. Then calling the inner funtion with (y), both x, y will be ready.
*/
function add(x, y){
  if (typeof y != "undefined") {
    return x + y;
  } else {
    return function(y) {
      return x + y;
    };
  }
};

console.log("add(10,20): " + add(10,20));
console.log("add(10)(20): " + add(10)(20));

```

*Question: What value is returned from the following statement?*
```javascript
"i'm a lasagna hog".split("").reverse().join("");

//goh angasal a m'i
/*
  'split("")' separate the string by "", which gives separate chars. Works like Java: str.toCharArray();
  Note: split(" ") will splity by empty space.
  reverse() reverses the array
  join("") merge the array, with "" empty string in between each item in the array.
  Note: join("|") will put a divider in between each array item while merging.
*/


```

*Question: What is the value of `window.foo`?*
```javascript
( window.foo || ( window.foo = "bar" ) );

//"bar"
/*
  1. That || first try to pick window.foo, however it's undefined, so it keeps on looking for the next attribute: ( window.foo = "bar" )
  2. ( window.foo = "bar" ) assigns that string 'bar' to window.foo, so window.foo is no longer undefined.
  3. then (window.foo) is assigned to variable/print out.

  Note: first attribute before || and the 2nd attribute after does not have logic relationship. We can exchange the 2nd attribute to (window.a = "test") and it will work the same

*/
//test
var rst = ( window.foo || ( window.foo = "bar" ) );
console.log(rst);//bar

```

*Question: What is the outcome of the two alerts below?*
```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);

//alert: Hello World
//Uncought ReferenceError: bar is not defined
/*
  First, (function(){...})(); excutes whatever that in the '();'
    foot is in outter scope, it works inside of '();'
  Second, outside of '();', bar is not defined. So it throws the error.
*/

```

*Question: What is the value of `foo.length`?*
```javascript
var foo = [];
foo.push(1);
foo.push(2);

//2;
```

*Question: What is the value of `foo.x`?*
```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};

//foo.x : undefined


//line1:
foo = {n:1}

//line2:
//bar becomes a copy of foo. 

//line3:
//foo.x is a reference, it's same a bar.x. For a quick side example:
var foo = {n: 1};
var bar = foo;

foo.x = 2;
console.log(bar); //{n:1, x:2}

//What actaully happens:
//on the right side, foo = {n:2} is excuted first.
//foo.x is a reference, it's same as bar.x. Then this reference point is assigned with foo, which is just {n:2}. Then
foo = {n:2}
bar = {
  n : 2,
  x : {n : 2}
}
//So, ofcourse if we try to access foo.x, it will be undefined.

//The given code works the same as below:
var foo = {n: 1};
var bar = foo;

foo = {n: 2};
bar.x = foo;


```

*Question: What does the following code print?*
```javascript
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');

//one, three, two
//Regardless of what milliseconds we set to setTimeout() funtion, that function call
//is always registered at end of the browser processes. It means it takes # of milliseconds 
//to excute after all other regular tasks are done.

```

#### Fun:

* What's a cool project that you've recently worked on?
* What are some things you like about the developer tools you use?
* Do you have any pet projects? What kind?
* What's your favorite feature of Internet Explorer?
* How do you like your coffee?

#### Angular:

* basic setup in app.js
```html
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
```
```javascript
//app.js

angular.module("testApp", [])
.controller("MainCtrl", ['$scope', function($scope){
  $scope.test = "TEST Angular";
}]);

```
