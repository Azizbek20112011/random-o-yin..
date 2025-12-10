const btnRoll = document.querySelector('.btn-roll')
const imgDico = document.querySelector('.dico')

imgDico.style.display = 'none'
let . currentScore = 0
let activePleyer = 0 


btnRoll.addEventListener("click", ()=>{
imgDico.style.display="blok"
const random = Math.floor(Math.random()*6 + 1)
diceimg.src=`dice-${random}.png`
currentScore += random
if (random !==1) {
  document.querySelector(`#current--${ activePleyer}`).textContent.currentScore 
}
else{
   document.querySelector(`#current--${ activePleyer}`).textContent = 0
   activePleyer =  activePleyer = 0 ? 1 : 0
   currentScore = 0
   document.querySelector(".activePleyer").classList.toggle("Pleyer--active")
    document.querySelector(".activePleyer").classList.toggle("Pleyer--active")
  }

})
