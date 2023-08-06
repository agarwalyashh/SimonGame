var randomNumber;
var randomChosenColour="";
var gamePattern=[]
var userClickedPattern=[]
const buttonColours =["red","blue","green","yellow"]
var count=-1;
var cl=-1,c=0;
function gameover()
{
    const audiowrong =new Audio("/wrong.mp3")
    audiowrong.play();
    document.querySelector("h1").innerHTML="Game Over, Refresh Page to Restart"
    document.body.style.backgroundColor="red"
    setTimeout( ()=>{
        document.body.style.backgroundColor="black"
    },400)
}
function playsound(Colour)
{
    const audiored =new Audio("/red.mp3")
    const audioblue =new Audio("/blue.mp3")
    const audiogreen =new Audio("/green.mp3")
    const audioyellow =new Audio("/yellow.mp3")
    switch(Colour)
    {
        case 'red':
            audiored.play();
            break;
        case 'blue':
            audioblue.play();
            break;
        case 'green':
            audiogreen.play();
            break;
        case 'yellow':
            audioyellow.play();
            break;
    }
}
function checkAnswer(currentLevel)
{
    if(userClickedPattern[cl]==gamePattern[gamePattern.length-1])
    {
        for(i=0;i<cl;i++)
        {
            if(userClickedPattern[i]==gamePattern[i])
            c++;
        }
        if(cl==userClickedPattern.length-1)
        {
            count++;
            cl=-1;
            userClickedPattern=[]
            setTimeout(()=>{
                nextSequence(count);
            },1000)
        }
        else
        {
            gameover()
        }
    }
    else
    {
        gameover()
    }
}
function animation(Colour)
{
    document.getElementById(Colour).style.opacity="0.5";
    setTimeout(()=>{
        document.getElementById(Colour).style.opacity="1";
    },200)
}
function nextSequence(count)
{
    randomNumber=(Math.floor(Math.random()*4))
    randomChosenColour=buttonColours[randomNumber]
    gamePattern.push(randomChosenColour);
    playsound(randomChosenColour)
    animation(randomChosenColour)
    document.querySelector("h1").innerHTML=`Level ${count}`;
}
for(var i=0;i<4;i++)
    {
        document.querySelectorAll("button")[i].addEventListener("click",function(e){
            cl++;
            var userChosenColour=e.target.id
            userClickedPattern.push(userChosenColour);
            console.log(gamePattern);
            console.log(userClickedPattern)
            playsound(userChosenColour)
            animation(userChosenColour)
            if((userClickedPattern[userClickedPattern.length-1])!=(gamePattern[userClickedPattern.length-1]))
            gameover();
            if(gamePattern.length==userClickedPattern.length)
                checkAnswer(cl);
        })
    }
document.body.addEventListener("click", function(event) {
    // const key = event.key;
    // if(key=="Enter"&&count==-1)
    // {   
    //     count++;
    //     nextSequence(count);
    // }
    if(count==-1)
    {
        count++;
        nextSequence(count);
    }
});
