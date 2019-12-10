//FUNCTIONS

//innerHTML injects HTML code into the website, and it replaces the HTML inside the div.

//DOM Manipulation
//document object model
/*document.querySelector(".test-area").innerHTML="<h1>hello</h1>";
document.querySelector(".test-area").innerHTML="<p>this is a document</p>";*/
// document.write("<div class='ppp'></div>");
// document.write('<div class="ppp"></div>')

var clicksound= new Audio('button-25.wav')
var death= new Audio("Death 6.wav")
var win= new Audio ("win music 3.wav")
var opening= new Audio ("opening.wav")
var battle= new Audio("battle.wav")
var shit= new Audio("")
var laugh= new Audio("applause-1.wav")



document.querySelector(".button1").addEventListener("click", function() {
    battle.play();
    clicksound.play();
//story 1 text 
    document.querySelector(".storywindow").innerHTML= "<p>You stepped out of your room to see what is going on in your house. Which place do you wnat to go first?</p><br><img src=https://media.tenor.com/images/184e76a671869b19b83326a667c6010c/tenor.gif width='385' height='240'></img>";
//erase old button       add dot                   no dot
document.querySelector(".button1").classList.add("invisible");
//create a new button
document.querySelector(".choiceA-btn").classList.remove("invisible");
document.querySelector(".choiceB-btn").classList.remove("invisible");
document.querySelector(".ppp").classList.add("invisible");
})

//respond A
document.querySelector(".choiceA-btn").addEventListener("click", function() {
    clicksound.play()

        document.querySelector(".storywindow").innerHTML= "<p>'What's up? Shouldn't you be studying in your room?' says your dad,<br><br> 'Ohh...I'm just...Umm.. looking for something ot eat.' you say<br><br> ' Alright.' says your dad<br><br> And you end up in the kitchen, what do you do now?</p>";
    
    document.querySelector(".choiceA-btn").classList.add("invisible");
    document.querySelector(".choiceB-btn").classList.add("invisible");
    //create a new button
    document.querySelector(".choiceA1-btn").classList.remove("invisible");
    document.querySelector(".choiceA2-btn").classList.remove("invisible");
    })


    //respond A-1
    document.querySelector(".choiceA1-btn").addEventListener("click", function() {
        clicksound.play();
        death.play();
        battle.pause();
         document.querySelector(".storywindow").innerHTML= "<p>Oops! You accidently broke you leg when you went off the window. Now you ain't going anywhere with that broken leg, LOL.</p><br><img src=https://media1.tenor.com/images/b25511087b27597960f77dd0dbaf568d/tenor.gif?itemid=5368681 width='385' height='225'>";
    
        document.querySelector(".choiceA1-btn").classList.add("invisible");
        document.querySelector(".choiceA2-btn").classList.add("invisible");
     
        })

    //respond A-2
    document.querySelector(".choiceA2-btn").addEventListener("click", function() {
        clicksound.play()
        document.querySelector(".storywindow").innerHTML= "<p> Sitting on your chair and staring at your chocolate bar, your thinking of the next step to get out.<br><br> 'Okay, now I have only 10 minutes left' you say.</p><br><img src=https://media.giphy.com/media/ZdT2zDh3Bvnkk/giphy.gif width='385' height='225'>";
   
       document.querySelector(".choiceA1-btn").classList.add("invisible");
       document.querySelector(".choiceA2-btn").classList.add("invisible");
    //create a new button
       document.querySelector(".choiceA21-btn").classList.remove("invisible");
       document.querySelector(".choiceA22-btn").classList.remove("invisible");
       })
    //A-2-1(in the room)
       document.querySelector(".choiceA21-btn").addEventListener("click", function() {
        clicksound.play()
        battle.pause();
        document.querySelector(".storywindow").innerHTML= "<p> (On the phone call) <br> 'hey man, I probably can not join you guys tonight, you know my dad.....' you said,<br><br> 'Ehh why don't we just gather at your house tonight, maybe we can have a 'study night', shall we? We'll be right at your door!' say your friends,<br><br> they hang up the call, and you then heard the bell ring on the door.... <br><br> You and your friends have a great time during the 'study night', but you failed on your next exam... </p><img src=https://media.giphy.com/media/1dNiYdQaqg5YiwJN5H/giphy.gif width='385' height='225'>";
   
       document.querySelector(".choiceA21-btn").classList.add("invisible");
       document.querySelector(".choiceA22-btn").classList.add("invisible");
       })

    //A-2-1(in the room)
    document.querySelector(".choiceA22-btn").addEventListener("click", function() {
        clicksound.play()
        document.querySelector(".storywindow").innerHTML= "<p>(grabbed keys, phone, and wallet)<br><br>' Ok! I'm perfectly ready'<br><br><img src=https://media.giphy.com/media/UqZ4imFIoljlr5O2sM/giphy.gif width='385' height='225'></p>";
        document.querySelector(".choiceA220-btn").classList.remove("invisible")

       document.querySelector(".choiceA21-btn").classList.add("invisible");
       document.querySelector(".choiceA22-btn").classList.add("invisible");
       })
//door open
       document.querySelector(".choiceA220-btn").addEventListener("click", function() {
        clicksound.play();
        battle.pause();
        shit.play();
        document.querySelector(".storywindow").innerHTML= "<p>' Oh shoot! this is bad....' you say, <br><br> 'What is bad?' says your dad, <br><br><img src=https://media0.giphy.com/media/6yLYpyYJsAFXi/source.gif width='385' height='225'></p>";
        document.querySelector(".choiceA220-btn").classList.remove("invisible")

       document.querySelector(".choiceA220-btn").classList.add("invisible");
       })

//respond B
document.querySelector(".choiceB-btn").addEventListener("click", function() {
    clicksound.play()
        document.querySelector(".storywindow").innerHTML= "<p>'Where are you going this late?' says your dad,<br><br> 'Ohh...' </p>";
    
    document.querySelector(".choiceB-btn").classList.add("invisible");
    document.querySelector(".choiceA-btn").classList.add("invisible");
    //create a new button
    document.querySelector(".choiceB1-btn").classList.remove("invisible");
    document.querySelector(".choiceB2-btn").classList.remove("invisible");
    })

    //respond B-1
    document.querySelector(".choiceB1-btn").addEventListener("click", function() {
        clicksound.play();
        win.play();
        battle.pause();
        document.querySelector(".storywindow").innerHTML= "<p>' Ohh, I'm just going next door to watch some movies, might stay overnight, or jsut a few hours you say,<br><br> ' Ohh, no problem, be sure not to bother our neighbor for too long' says your dad,<br><br>Your dad actually let you go with this excuse. Now, your night begins!</p><br><img src=https://media3.giphy.com/media/fxsqOYnIMEefC/giphy.gif width='350' height='200'></img>";
   
       document.querySelector(".choiceB1-btn").classList.add("invisible");
       document.querySelector(".choiceB2-btn").classList.add("invisible");
    
       })

   //respond B-2
   document.querySelector(".choiceB2-btn").addEventListener("click", function() {
    clicksound.play()
       document.querySelector(".storywindow").innerHTML= "<p>'What are you doing at the front door?'says your dad,<br><br>'I..uh.. I'm just waiting for my delivery'you say,<br><br>'Why are you wearing your shoes then?' says your dad, </p>";
  
      document.querySelector(".choiceB1-btn").classList.add("invisible");
      document.querySelector(".choiceB2-btn").classList.add("invisible");
   //create a new button
      document.querySelector(".choiceB21-btn").classList.remove("invisible");
      document.querySelector(".choiceB22-btn").classList.remove("invisible");
      })
            //respond B-2-1
        document.querySelector(".choiceB21-btn").addEventListener("click", function() {
            clicksound.play();
            win.play();
            battle.pause();
            document.querySelector(".storywindow").innerHTML= "<p>'Uhh... I'm actually going to hang out with some friends. You know, it's friday' you say,<br><br> 'hmm....well, yeah, it's friday. Off you go then, but don't forget to come back' says your dad</p><br><br><img src=https://media.giphy.com/media/SiEwO52iDXsqjGJHzs/giphy.gif width='385' height='225'></img>";
  
            document.querySelector(".choiceB21-btn").classList.add("invisible");
            document.querySelector(".choiceB22-btn").classList.add("invisible");
        })
        //respond B-2-2
        document.querySelector(".choiceB22-btn").addEventListener("click", function() {
            clicksound.play()
            document.querySelector(".storywindow").innerHTML= "<p>' I'LL BE BACK AT 10!!! PROBABLY!!!' you shout, <br><br> 'YOUR DEAD WHEN YOU COME BACK!!! YOU BETTER NOT COME BACK' says your dad</p><img src=https://media.giphy.com/media/eES8V1HrvuM1y/giphy.gif width='385' height='225'>";
  
            document.querySelector(".choiceB21-btn").classList.add("invisible");
            document.querySelector(".choiceB22-btn").classList.add("invisible");
        })
