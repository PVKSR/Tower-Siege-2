class Block{
  
  constructor(x, y, width, height) {
      
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      
      
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      
    

      World.add(world, this.body);
    
    }
    
    display(){


    //console.log(this.body.speed)  

      var pos= this.body.position;
      
      if(this.body.position.y < 300){

     image(blockimg,pos.x,pos.y,this.width, this.height);

      }
      
      if(this.body.position.y > 300) {
        
        
        World.remove(world,this.body);
        
     }

    
}

}