const particleArray = []; 

class Particle{
    constructor(){
        this.x = bird.x; 
        this.y = bird.y ; 
        this.size = Math.random() * 7 + 3; 
        this.speedY = (Math.random() * 1) - 0.5; 
        this.color = '#ACD7F7';
    }
    update(){
        this.x -= gamespeed; 
        this.y += this.speedY; 
    }
    draw(){
        ctx.fillStyle = this.color; 
        ctx.beginPath(); 
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill(); 
    }
}

function handleParticles(){
    particleArray.unshift(new Particle);
    for(let i = 0; i<particleArray.length; i++){
        particleArray[i].update(); 
        particleArray[i].draw(); 
    }
    if(particleArray.length > 200){
        for(let i = 0; i<20; i++){
            particleArray.pop(particleArray[i]); 
        }
    }
}
