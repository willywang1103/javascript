/* HEALTHY BMI is between 18.5 to 24.9!
You are trying to compare your BMI (Body Mass Index) with your friend's BMI.
BMI is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meters).

1. Store you and your friend's mass and height in variables
2. Calculate both BMIs
3. Create an if else statement containing information about whether you have a higher BMI than your friend.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

BONUS: tell if you and your friend have a healthy BMI

GOOD LUCK ‍💪
*/
var name1= "Willy's"
var name2= "Justine's"

var mh=1.72
var mw=72
var fh=1.62
var fw=46

var answer1=(mw/mh/mh)
var answer2=(fw/fh/fh)

//Willy's BMI section
document.write("BMI is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meters).");
document.write("<br><br>");
document.write( name1+" BMI");
document.write("= "+ answer1);

document.write("<br><br>");

//Justine's BMI section
document.write( name2+" BMI");
document.write("= "+ answer2);

document.write("<br><br>");

//comparision section
document.write("CONCLUSION");
document.write("<br>");


if(answer1>26.3){
    //first condition
    document.write(name1+ " is overweighted");
} 
else if(answer1<18.7){
    //second condition
    document.write(name1+ " is underweighted");
}
else{
    document.write(name1+ " is fine")};

document.write("<br><br>");

if(answer2>25.2){
    //first condition
    document.write(name2+ " is overweighted");
} 
else if(answer2<17.2){
    //second condition
    document.write(name2+ " is underweighted");
}
else{
    document.write(name2+ " is fine")};

//question
document.write("<br><br>");

document.write("So.....")
document.write("Is "+name1+" BMI higher than "+name2+"?");
document.write("<br><br>");

if(answer1>answer2){
    //first condition
    document.write("- Okay fine, yes.");
} 
else if(answer1<answer2){
    //second condition
    document.write('Hell no!!');
}
else{
    document.write("It's the same la.")};