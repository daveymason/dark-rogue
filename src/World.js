class World {
    constructor(width,height,tilesize){
        this.width=width;
        this.height=height;
        this.tilesize=tilesize;
        this.worldmap = new Array(this.width);
        for (let x=0; x<this.width;x++){
            this.worldmap = new Array(this.height);
        }
        
    }
}