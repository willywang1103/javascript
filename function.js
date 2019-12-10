//functions are basiclly a lsit of commands
//you can reuse them as much as you like
//function have names, and execute when you call them
//Ask user for name. then print it 


//Declared a function, and it doesn't execute until called
function getName(){
// write your list of command in side {}
//1. ask user for name 
var name=prompt("what's your name");

//2. print user name
document.write(name);
}
// CALL THE FUNCTION, and execute
getName();

//Variables for profile
var name='Willy';
var yob='2000';
var favfood='cookie';

function showProfile(){
document.querySelector(".text").innerHTML+= yob+ '<br>';
document.querySelector(".text").innerHTML+= name+ '<br>';
document.querySelector(".text").innerHTML+= favfood+ '<br>';
};
// using += means add to the original HTML 

// call the funtion
showProfile();
document.querySelector(".profile-btn").addEventListener("click", showProfile);

//declare reset function
function reset(){
    //clear the text div
    document.querySelector(".text").innerHTML= "";
}

document.querySelector(".reset-btn").addEventListener("click",reset);