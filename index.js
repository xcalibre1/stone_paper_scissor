var mypic=["paper.png","rock.png","scissor.png"];
function change(){
var randomNum = Math.floor(Math.random() * mypic.length);
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",mypic[randomNum]);
var randomNum1 = Math.floor(Math.random() * mypic.length);
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",mypic[randomNum1]);
var res="";
if(randomNum===0 && randomNum1===1)
    res="player 1 won";
else if(randomNum===0 && randomNum1===2)
    res="player 2 won";
else if(randomNum===1 && randomNum1===0)
    res="player 2 won";
else if(randomNum===1 && randomNum1===2)    
    res="player 1 won";
else if(randomNum===2 && randomNum1===0)
    res="player 1 won";
else if(randomNum===2 && randomNum1===1)
    res="player 2 won";
else{
    res="draw";
}
document.getElementById("result").innerHTML=(res==="draw")?res+"&#128524":res+"&#x1F389";                
}