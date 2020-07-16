

export default class Food {
    constructor(GRID_SIZE) {

        this.gridSize = GRID_SIZE;

        

        this.x = Math.floor((Math.random() * 30) + 1)*20;
        this.y = Math.floor((Math.random() * 20) + 1)*20;

        this.image = new Image(20,20);
        this.image.src = "./src/apple.png";
    }

    draw(context) {
        context.drawImage(this.image, this.x, this.y, 20, 20);
    }

}