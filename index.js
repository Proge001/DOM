//alert("Hello world")

//console.log("Hello guys")
//node script.js use this for debugging in vs code terminal
// what are variables in js... container for storing data values could store values of different types
// declare variables... var,let,const

//arithmetic operators
//+, -, /, *, %, ++, --

//string concatenation
let name = "israel"
let surname = "igbaji egorp"
let ageNumber = 22;

console.log (name + " " + surname + " " + ageNumber);

//template literals
console.log(`My name is ${name} and i am ${2 * 11}`);

function greet(name,lastName) {
    console.log(`"Hello ${name} ${lastName}"`);
}

greet("john","rogers");

var subtract = function(a,b) {
    return a - b;
}
    console.log(subtract(5,3));

function cube(n){
    return n*n*n;
}
console.log(cube(2));

var cube = function(n){
    return n*n*n
}
console.log(cube(5));


/*the IF statement*/
function checkIfNumber(x){
    if (typeof x === 'number'){
        console.log(x, 'is a number.');
    }
}
        checkIfNumber(5)
        console.log(checkIfNumber("5"))
        console.log(checkIfNumber())

/*the ELSE statement*/
function checkIfNumber(y){
    if (typeof y === 'number'){
        console.log(y, 'is a number.');
    } else{
        console.log("ooops that's not a number");
    }
}
checkIfNumber(7)
checkIfNumber("7")
checkIfNumber()


/*the else if statement*/
function decodeColor(code){
    if(code === 1){
    console.log('red');
    } else if (code === 2){
        console.log('yellow');
    } else if ( code === 3){
        console.log('green');
    } else (console.log('unknown code'))
}
decodeColor(1)
decodeColor(2)
decodeColor(3)
decodeColor()


/*the switch statement*/
function decodeColoring(code){
    switch(code) {
    case 1:
        console.log('red');
        break;
    case 2:
        console.log('green');
        break;
    case "x":
        console.log('yellow');
        break;
    default:
        console.log('unknown code');
    }
}
decodeColoring(1)
decodeColoring(2)
decodeColoring("x")
decodeColoring(3)

function school(grade){
    switch(grade){
        case 'A':
            console.log("you did great!")
            break;
        case 'B':
            console.log("you did good!")
            break;
        case 'C':
            console.log("you did okay!")
            break;
        case 'D':
            console.log("you... did not do that well!")
            break;
        case 'F':
            console.log("YOU FAILED!")
            break;
        default:
            console.log(grade, "is not a letter")
    }
}
school('F')



/*the while loop*/
let age = 1

while (age <= 10) {
    console.log("your age is less than 10");
    age++;
}
console.log("you are now over 10")


/*the do while loop*/
let day = 1
do {
    day++;
    console.log("your age is less than 5");
} while(day < 5)



/*for loop*/
var ourArray = [];
for (var i = 0; i < 5; i++ ){
    if (i > 2) break;
    ourArray.push(i);
}
console.log(ourArray);

//for in and for of loop//
/*break and continue*/ //lets sum every second element of the numbers array
var numbers = [19,65,1,2,6,1,9,9,1,2];
var sum = 0;
for (var i in numbers){
    if (i % 2 == 0) continue;
    sum += numbers[i]
}
console.log(sum);

//object in javascript//
//initializing a gimli object
var gimli = {
    name: "gimli",
    race: "dwarf",
    weapon: "axe",
    greet: function(){
        return`Hi, my name is ${this.name}!`;
    }
}
console.log(gimli);
//accessing object properties
//dot notation
console.log(gimli.weapon);
//bracket notation
console.log(gimli["race"]);
//calling the method
console.log(gimli.greet());

//adding and modifying object properties with the assignment operator (=)
//((.) dot notation)
gimli.age = 139;
//([]) bracket notation)
gimli["age"] = 139;

//adding new fight method to gimli
gimli.fight = function () {
    return `Gimli attacks with an ${this.weapon}!`;
}
console.log(gimli)
//calling the newly created method
console.log(gimli.fight());

//updating weapon from axe to battle axe
gimli.weapon = "epic battle axe";
console.log(gimli.fight());

//removing weapon from gimli
delete gimli.weapon;
//we can test the output of gimli to see if it succeeded
console.log(gimli);





const color = ['Red', 'Blue', 'Green', 'Orange', 'Purple'];

let colours = 0


//DOM selector
//QUERY selector this would select the first element that matches the one called in the string
var el= document.querySelector('h1');
console.log(el);

//getElementById
var id= document.getElementById('middleSpan');
console.log(id);

//querySelectorAll()
var be= document.querySelectorAll('span');
console.log(be);

//getElementByClassName()
var cl= document.getElementsByClassName('text-desc');
console.log(cl);

//getElementByTagName()
var hk= document.getElementsByTagName('pan');
console.log(hk);


//getAtrribute() value of an element
var mainEl= document.getElementById('main-paragraph');
console.log(mainEl);

var elClassName = mainEl.getAttribute('class');
console.log(elClassName);

var withoutStyleEl = document.getElementById('without-style');
      console.log(withoutStyleEl);

      var withoutStyleElClassName = withoutStyleEl.getAttribute('class');
      console.log( withoutStyleElClassName);

/*setAttributes( )  setting an element attribute value
var btn = document.getElementById('myBtn');
btn.setAttribute('class','click-btn');
btn.setAttribute('disabled', '');*/

//removing an elements attribute value
//selecting the element
let btn = document.getElementById('myBtn');
//removing class attributes
btn.removeAttribute('class');



//STYLING DOM ELEMENT
  // Selecting element
var elem = document.getElementById('intro');

  // Appling styles on element
elem.style.color = 'blue';
elem.style.fontSize = '18px';
elem.style.fontWeight = 'bold';
console.log('elem:', elem);

//creating a new div element
var newDiv = documemt.createElement('div');

//creating a text node
var newContent = document.createTextNode('Hi, how are you doing?');

//adding the text node to the newly created div
newDiv.appendChild(newContent);

//adding the newly created element and its content into the DOM
var currentDiv = document.getElementById('main');
document.body.appendChild(newDiv, currentDiv);

const body = document.body
//with append we can only append ('string',and any other thing) while appendChild we can only append html elements and tags
//body.append  appendChild

const divv = document.createElement('div');
body.append(div)
div.innerText = "Hello WORLD"
div.textContent = "Hello World 2"
body.append(div)

//with innerHtml we can add html element from a string like this div.innerHtml = "<strong>HELLO WORLD</strong>" but its not a secure way to do it
//this is a more secure way to do it
const strong = document.createElement('strong');
strong.innerText ="HELLO WORLD2"
div.append(strong)

  // Getting inner HTML conents
var contents = document.getElementById('main').innerHTML;
console.log('contents', contents);

  // Setting inner HTML contents
var mainDiv = document.getElementById('main');
mainDiv.innerHTML = '<p>This is <em>newly inserted</em> paragraph.</p>';

//removing element
var parentElem = document.getElementById('main');
var childElem = document.getElementById('hint');
parentElem.removeChild(childElem);
console.log("parentElem", parentElem)
//btn.onclick=foo;


//adding event
/*first way

 // the second way

 // Getting the button
var btns = document.querySelector('button');
btns.onclick=foo;*/

// the third way
// Getting the button
var btns1 = document.querySelector('button');
btns1.addEventListener('click', foo); 

  // Getting the button
var btns1 = document.querySelector('button');
  // Remove the event listener  
btns1.removeEventListener('click',foo);

/*var key = document.getElementsByClassName('keydown')
key.addEventListener('keydown', logKey);
function logKey(event) {
log.textContent += " " + e.code;
}*/

document.addEventListener('keydown', logKey);
function logKey(event) {
log.textContent += " " + e.code;
}


function validateForm(e) {
e.preventDefault()
var name = document.loginForm.name.value
var password = document.loginForm.password.value
if (name.length==0)
return alert(`name is required`)
if (password.length<5)
return alert(`password length should more than 5`)
}