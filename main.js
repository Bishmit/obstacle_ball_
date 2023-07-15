const resetButton = document.getElementById('btn'); 
const scr = document.querySelector(".score");
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

let spacePressed = false; 
let angle = 0;
let hue = 0; 
let frame = 0; 
let gamespeed = 2; 


function animate(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    handleObstacles();
    bird.update(); 
    ctx.fillStyle ='green';
    ctx.font = '90px Gergia';
    scr.textContent = score;  
    handleCollision(); 
    if( handleCollision() == true){
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
        ctx.fillText('Game over. Your score: ' + score , 200, 200);
        bird.velocity = 0; 
        bird.gravity = 0; 
        return true; 
      }    
    }
  }


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
  
  
  