//variables and select elements
const hamShowBtn = document.querySelector(".ham-show-btn");
const hamCloseBtn = document.querySelector(".ham-close-btn");
const hamContainer = document.querySelector(".ham-container");
 




 

//hamburger show function
const hamburgerShow=()=>{
hamContainer.style = "left:0; transition:0.5s"; 
hamShowBtn.style = "display:none";
hamCloseBtn.style= "display:block; transition:0.5s";
document.querySelector("body").style = "overflow:hidden"
document.querySelector(".ham-bg-container").style = "visibility: visible; ";
document.querySelector(".ham-bg-container").classList.add("ham-bg-container-show");


}
// hamburger close function
const hamburgerClose=()=>{
hamContainer.style = "left:-20rem;transition:0.5s";
hamCloseBtn.style = "display:none";
document.querySelector("body").style = "overflow:none"
hamShowBtn.style= "display:block;transition:0.5s";
document.querySelector(".ham-bg-container").style = "visibility: hidden;";
}

//hamburger show EventListener 
hamShowBtn.addEventListener("click",hamburgerShow);
// hamburger hide EventListener
hamCloseBtn.addEventListener("click",hamburgerClose);



// like and unlike feature in product box

//getting refrence of like and unlike image
 
 
 
const heartImg= document.querySelectorAll(".heart-size");
 
 
heartImg.forEach((elements)=>{
     elements.addEventListener("click",(event)=>{
             let targetIcon = event.target;
           
             if(targetIcon.classList.contains("unlike")){                   
                targetIcon.src ="images/heartlike.png";
                targetIcon.classList.remove("unlike");

            }else{
                       targetIcon.src ="images/heart.png";
                     targetIcon.classList.add("unlike");
             }
     })
});





//counter
const CpacityCounter = setInterval(()=>{
      const number =Number(document.querySelector("#cpacity-counter").innerText);

        if(number<69){
            document.querySelector("#cpacity-counter").innerText = number+1; 
        }else{
            clearInterval(CpacityCounter);
        }

 
},30);


const costCounter = setInterval(()=>{
      const number =Number(document.querySelector("#cost-counter").innerText);

        if(number<88){
            document.querySelector("#cost-counter").innerText = number+1; 
        }else{
            clearInterval(costCounter);
        }

 
},30);



const unplannedCounter = setInterval(()=>{
      const number =Number(document.querySelector("#unplanned-counter").innerText);

        if(number<100){
            document.querySelector("#unplanned-counter").innerText = number+1; 
        }else{
            clearInterval(unplannedCounter);
        }

 
},30);





 