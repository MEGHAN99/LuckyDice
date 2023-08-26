 let randomNumber1 = Math.floor(Math.random() * 6)+ 1;
 let randomImg = "dice"+randomNumber1+".png";
 let randomSrc = randomImg ;
 
 let img1=document.querySelectorAll("img")[0].setAttribute("src",randomSrc);



 let randomNo2 = Math.floor(Math.random()*6)+1;
 let randomImg1 = "dice"+randomNo2+".png";
 let randomsrc2 = randomImg1;

 let img2 = document.querySelectorAll("img")[1].setAttribute("src",randomsrc2);
let lucky = "LUCY day";
 if(randomNumber1===randomNo2){
document.querySelector("h1").innerText=("LUCKY day");
alert("Looks like a LUCKY day")
}
else{
    document.querySelector("h1").innerText=("not LUCKY");
    
}
