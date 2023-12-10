//write code here
let currentScore=0;
let activePlayer=0
let scores=[0,0]
let playGame=true

// Roll
document.querySelector(".btn--roll").addEventListener('click',function(){
   if(playGame){
    if(scores[activePlayer] >= 10){
        currentScore= 0;
        document.querySelector(`#current--${activePlayer}`).innerText=currentScore;
        document.querySelector('.dice').src=`dice-${dice}.png`
        }
    let dice = Math.floor(Math.random() * 6) + 1. // random dice number from 1 - 6
    document.querySelector('.dice').src=`dice-${dice}.png`
    
    if(dice === 1){
        currentScore=0;
        document.querySelector(`#current--${activePlayer}`).innerText=0;

        if(activePlayer === 0){
            activePlayer =1

        }else{
            activePlayer =0
        }

        document.querySelector(".player--0").classList.toggle("player--active")
        document.querySelector(".player--1").classList.toggle("player--active")
    }else{
        currentScore= currentScore + dice;
        document.querySelector(`#current--${activePlayer}`).innerText=currentScore;
    }
   }
    
        
})


// hold
document.querySelector(".btn--hold").addEventListener('click',function(){
    scores[activePlayer]=scores[activePlayer] + currentScore
    document.querySelector(`#score--${activePlayer}`).innerText=scores[activePlayer]
    document.querySelector(`#current--${activePlayer}`).innerText=0

    if(scores[activePlayer] >= 10){
        document.querySelector(`#name--${activePlayer}`).innerText="Winner"
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
        
        if(scores[activePlayer] >= 10){
        currentScore= 0;
        document.querySelector(`#current--${activePlayer}`).innerText=currentScore;
        }
        


        
    }else{
        currentScore=0;
        document.querySelector(`#current--${activePlayer}`).innerText=0;

        if(activePlayer === 0){
            activePlayer =1

        }else{
            activePlayer =0
        }

        document.querySelector(".player--0").classList.toggle("player--active")
        document.querySelector(".player--1").classList.toggle("player--active")
    }
})


// new
document.querySelector(".btn--new").addEventListener("click",function(){
    scores=[0,0]
    activePlayer=0
    currentScore=0
    document.querySelector("#score--0").innerText=0
    document.querySelector("#score--1").innerText=0
    document.querySelector(".player--0").classList.remove("player--winner")
    document.querySelector(".player--1").classList.remove("player--winner")
    document.querySelector("#name--0").innerText='Player1'
    document.querySelector("#name--1").innerText='Player2'
    document.querySelector(".player--0").classList.add("player--active")
    document.querySelector(".player--1").classList.remove("player--active")
})
