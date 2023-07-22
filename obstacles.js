let score = 0; 
const obstaclesArray = []; 

class Obstacle{
    constructor (){
        this.top = (Math.random() * canvas.height/2.6) + 20; 
        this.bottom = (Math.random() * canvas.height/2.8 ) + 20; 
        this.x = canvas.width; 
        this.width = 20; 
        this.scored = false; 
    }

    draw(){
        ctx.beginPath(); 
        ctx.fillStyle = 'aliceblue'; 
        ctx.fillRect(this.x, 0, this.width, this.top);
        ctx.fillRect(this.x, canvas.height-this.bottom, this.width, this.bottom);
        
    }
    update(){
        this.x -= gamespeed; 
        this.draw(); 
    }
}

function handleObstacles(){
    if(frame%50 == 0){
        obstaclesArray.unshift(new Obstacle); 
    }
    for(let i = 0; i<obstaclesArray.length; i++){
        obstaclesArray[i].update(); 
        if (obstaclesArray[i].x + obstaclesArray[i].width < bird.x && !obstaclesArray[i].scored) {
            obstaclesArray[i].scored = true;
            score++; highscore++; 
    }
    if(obstaclesArray.length > 20){
        obstaclesArray.pop(obstaclesArray[0]); 
    }
}
}

