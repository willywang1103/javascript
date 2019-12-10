// Project 2
// Create a simple calculator that can add, subtract, multiply, and divide two numbers

// 1. Get two values from the user and store them as two numbers
// 2. Display what the numbers are on the HTML test-area
// 3. Perform addition, subtraction, multiplication, and division on the numbers
// 4. Display the sum, difference, product, and quotient of the two numbers
//     -  For example, your HTML test-area should say something like:
//          "3 + 7 = 10"
//          "the sum of 3 and 7 is..."
// 5. compare which number is larger, and then write whether it is greater or less than.
alert('Welcome to Samrt Calculator!!');


var name= prompt('choose a number');
var name2= prompt('choose another number');
var sum= +name + +name2
var subtract= +name - +name2
var multiplication= +name * +name2
var divide= +name / +name2

document.write("You've chose "+name+", ");
document.write(name2);
document.write("<br>"+"Lets start calculating!")
//--------------------------------------------------------------------------------
document.write("<br><br>"+"ADDITION")
document.write("<br>"+name+"+"+name2+"=")
document.write(sum)
document.write("<br>"+"the sum of "+name+" and "+name2+ " is "+sum)
//--------------------------------------------------------------------------------
document.write("<br><br>"+"SUBTRACTION")
document.write("<br>"+name+"-"+name2+"=")
document.write(subtract)
document.write("<br>"+"the subtraction of "+name+" and "+name2+ " is "+subtract)
//--------------------------------------------------------------------------------
document.write("<br><br>"+"MULTIPLICATION")
document.write("<br>"+name+"*"+name2+"=")
document.write(multiplication)
document.write("<br>"+"the multiplication of "+name+" and "+name2+ " is "+multiplication)
//--------------------------------------------------------------------------------
document.write("<br><br>"+"DIVISION")
document.write("<br>"+name+"/"+name2+"=")
document.write(divide)
document.write("<br>"+"the division of "+name+" and "+name2+ " is "+divide)

document.write("<br><br>")
if(name>name2){
    //first condition
    document.write("the first number you choose is greater than the second one");
} 
else if(name<name2){
    //second condition
    document.write('the first number you choose is less than the second one');
}
else{
    document.write('the first number you choose is equal to the second oneY');
}




