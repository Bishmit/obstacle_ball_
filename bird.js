class Bird{
    constructor(){
        this.x = 50; 
        this.y = 200; 
        this.radius = 12; 
        this.velocity = 0; 
        this.gravity = 1;  
        this.height = 13; 
    }

    update(){
        if(this.y>canvas.height - this.height){
            this.y = canvas.height - this.height;
            this.velocity = 0; 
        }
        else{
            this.velocity+= this.gravity; 
            this.velocity*= 0.9; 
            this.y+= this.velocity; 
        } 
        if(this.y < 0 + this.height){
            this.y = 0 + this.height; 
            this.velocity = 0; 
        }
       if(spacePressed)
       this.flap();

       this.draw();    
    }

    draw(){
        ctx.beginPath();
        ctx.fillStyle = 'yellow'; 
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI); 
        ctx.fill(); 
    }
    flap(){
        this.velocity -= 2;      
    }
}

const bird = new Bird(); 