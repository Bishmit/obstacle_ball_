const resetButton = document.getElementById('reset'); 
const hs = document.getElementById('highscore-value'); 
const scr = document.querySelector(".score");
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
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
    showHighscore(); 
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

function storeHighscore(){
localStorage.setItem('highScore', JSON.stringify(highscore));
}

function showHighscore(){
  let currentHighscore = JSON.parse(localStorage.getItem('highScore'));
  if(score>currentHighscore){
    currentHighscore = score; 
    hs.textContent = currentHighscore; 
  }
  else{
    hs.textContent = currentHighscore; 
  }
  //console.log(currentHighscore); 
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
  // collison detection 
// function handlecollison() {
    
//     for(let i = 0; i<obstaclesArray.length; i++){
//         var topdistX = Math.abs(bird.x - (obstaclesArray[i].x - obstaclesArray[i].width/2));
//         var topdistY = Math.abs(bird.y - (0 - obstaclesArray[i].top)/2);
         
//         var downdistX = Math.abs(bird.x - (obstaclesArray[i].x - obstaclesArray[i].width/2));
//         var downdistY = Math.abs(bird.y - ((canvas.height - obstaclesArray[i].bottom) - obstaclesArray[i].bottom/2)); 
       
//         if(topdistX <= obstaclesArray[i].width/2 || 
//           topdistY <= obstaclesArray[i].top/2 ||
//           downdistX <= obstaclesArray[i].width/2 ||
//           downdistY <= obstaclesArray[i].bottom/2
//         ){
//             console.log("collison detected");
//         }
//     }
//   }
  
  
  
