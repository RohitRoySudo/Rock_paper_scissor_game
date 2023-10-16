let con=document.querySelectorAll(".con");
let computer=document.querySelectorAll(".computer");
let play=document.querySelector(".play");
let random=Math.floor(Math.random()*3);
let user= document.querySelector(".you");
let machine= document.querySelector(".pc");
let winModal=document.querySelector(".win-modal");
let winner=document.querySelector(".winner");
console.log(computer);
let btnnext=document.querySelector(".btn-next");
let rulebtn=document.querySelector(".btn-rule");
let rulemodal=document.querySelector(".rule-modal");
let gamerule=document.querySelector(".game-rules");
let closebtn=document.querySelector(".close-btn");
let line=document.querySelectorAll(".lin");
con.forEach((element,index) => {
    element.addEventListener("click",()=>{
        user.style.opacity="1";
        line.forEach(item =>{
              item.style.display="none";
        });

       con.forEach(item =>{
           item.style.display="none";
       });
       element.style.display="block";
       element.classList.add("show");
       setTimeout(()=>{
        machine.style.opacity="1";
        setTimeout(()=>{
            computer[random].style.display="block";
            computer[random].classList.add("right");
            
        },1000);
       },500);
       setTimeout(()=>{
        if(index==0 && random==2 || index==1 && random==0 || index==2 && random==1){

          winModal.style.display="grid";
          winner.innerText="You Win";
          btnnext.style.display="block";
         
        }
        else if(random==index){
            winModal.style.display="grid";
          winner.innerText="TIE UP";
          
        }
        else{
         winModal.style.display="grid";
         winner.innerText="You Lost";
         
         
        }
     },1500);
    })
});

play.addEventListener("click",()=>{
    window.location.reload();
})

rulebtn.addEventListener("click",()=>{
    
    gamerule.style.display="block";
    closebtn.style.display="block";
});

closebtn.addEventListener("click",()=>{
    gamerule.style.display="none";
    closebtn.style.display="none";
    
});