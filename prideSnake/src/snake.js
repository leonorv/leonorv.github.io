export default class Snake {
    constructor(GRID_SIZE, colors) {
        this.colors = colors;
        this.xspeed = 1;
        this.yspeed = 0;
        this.gridSize = GRID_SIZE; 
        this.size = 1;
        this.tail = [[0, 0]]; //0 will be head
        this.dir = "right";
    }

    draw(context) {
        for(var i = 0; i < this.size; i++) {
            context.fillStyle = this.colors[i%6];
            context.fillRect(this.tail[i][0], this.tail[i][1], this.gridSize, this.gridSize);
            context.rect(this.tail[i][0], this.tail[i][1], this.gridSize, this.gridSize);
        }
    }

    update(deltatime) {
        for(var i = this.size - 1; i > 0; i--) {
            this.tail[i][0] = this.tail[i-1][0];
            this.tail[i][1] = this.tail[i-1][1];
        }

        var newx = this.tail[0][0] + this.xspeed*this.gridSize;
        var newy = this.tail[0][1] + this.yspeed*this.gridSize;
        if (newx >= 0 && newx <= 600 - this.gridSize) this.tail[0][0] = newx;
        else if (newx > 600 - this.gridSize){
            this.tail[0][0] = 0;
        }
        else this.tail[0][0] = 600;
        if (newy >= 0 && newy <= 400 - this.gridSize) this.tail[0][1] = newy;
        else if (newy > 400 - this.gridSize) {
            console.log("passou y");
            this.tail[0][1] = 0;
        }
        else this.tail[0][1] = 400;
    }

    moveLeft() {
        if (this.dir != "right") {
            this.xspeed = -1;
            this.yspeed = 0;
            this.dir = "left";
        }
    }

    moveRight() {
        if (this.dir != "left") {
            this.xspeed = 1;
            this.yspeed = 0;
            this.dir = "right";
        }
    }

    moveUp() {
        if (this.dir != "down") {
            this.yspeed = -1;
            this.xspeed = 0;
            this.dir = "up";
        }
    }

    moveDown() {
        if (this.dir != "up") {
            this.yspeed = 1;
            this.xspeed = 0;
            this.dir = "down";
        }
    }

    grow() {
        this.size++;
        this.tail.push([]);
    }

    die() {
        for(var i = 1; i < this.size; i++) {
            
            var pos = this.tail[i];
            var a = pos[0] - this.tail[0][0];
            var b = pos[1] - this.tail[0][1];
            var dist = Math.sqrt( a*a + b*b );
            if (dist < 1) {
                this.size = 1;
                this.tail = [[0,0]];
                return true;
            }
            
        }
        return false;
    }

}