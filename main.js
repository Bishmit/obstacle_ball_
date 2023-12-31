const resetButton = document.getElementById('reset'); 
const rhs = document.getElementById('reset-highscore'); 
const hs = document.getElementById('highscore-value'); 
const scr = document.querySelector(".score");
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const congrats = document.querySelector(".congo"); 
canvas.width = 600;
canvas.height = 400;

let highscore = 0; 
let spacePressed = false; 
let angle = 0;
let hue = 0; 
let frame = 0; 
let gamespeed = 2; 
const isColliding = true; 

function animate(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    handleObstacles();
    handleParticles(); 
    bird.update(); 
    ctx.fillStyle ='green';
    ctx.font = '90px Gergia';
    scr.textContent = score;
    storeHighscore(); 
    const isColliding = handleCollision();
    if (isColliding) {
      resetButton.style.display = "block";  
       return;      
    }
    requestAnimationFrame(animate);
    frame += 2; 
}
animate(); 

window.addEventListener('keydown', (e)=>{      
  if(e.code === 'Space') spacePressed = true;   
});



window.addEventListener('keyup', (e)=>{ 
  if(e.code === 'Space') spacePressed = false;   
});

function storeHighscore() {
  // Retrieve the current high score from local storage
  let currentHighscore = JSON.parse(localStorage.getItem('highScore'));
  if (score > currentHighscore) {
    currentHighscore = score;
    localStorage.setItem('highScore', JSON.stringify(currentHighscore));
    congrats.style.display = "block";
  }
  hs.textContent = currentHighscore;
}


function handleCollision() {
    for (let i = 0; i < obstaclesArray.length; i++) {
      var topdistX = Math.abs(bird.x - obstaclesArray[i].x);
      var topdistY = Math.abs(bird.y - obstaclesArray[i].top);
      
      var downdistX = Math.abs(bird.x - obstaclesArray[i].x);
      var downdistY = Math.abs(bird.y - (canvas.height - obstaclesArray[i].bottom));
      
      var topDistance = Math.sqrt(topdistX ** 2 + topdistY ** 2);
      var downDistance = Math.sqrt(downdistX ** 2 + downdistY ** 2);
      
      if (
        topDistance <= bird.radius + obstaclesArray[i].width / 2 ||
        downDistance <= bird.radius + obstaclesArray[i].width / 2
      ) {
        //console.log("Collision detected"); 
        ctx.font = "25px Gergia";
        ctx.fillStyle = "white";
        ctx.fillText('Game over. Your score: ' + score , 170, 200);
        return true; 
      }    
    }
  }

 resetButton.addEventListener("click", ()=>{
  location.reload(); 
})
 addEventListener("keypress", (e)=>{
  if(e.key == "Enter")
  location.reload(); 
})

function resetHighScore() {
  highscore = 0;
  localStorage.setItem('highScore', JSON.stringify(highscore));
  hs.textContent = highscore;
}
rhs.addEventListener("click", ()=>{
     resetHighScore(); 
})
