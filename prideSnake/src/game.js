import Snake from "./snake.js";
import Food from "./food.js";

export default class Game {
    constructor(SCREEN_WIDTH, SCREEN_HEIGHT, GRID_SIZE, snake, food) {
        this.screenWidth = SCREEN_WIDTH;
        this.screenHeight = SCREEN_HEIGHT;
        this.gridSize = GRID_SIZE;
        this.snake = snake;
        this.food = food;
        this.score = 0;
        this.over = "false";
    }

    eat() {
        var a = this.snake.tail[0][0] - this.food.x;
        var b = this.snake.tail[0][1] - this.food.y;
        var dist = Math.sqrt( a*a + b*b );
        return (dist < 1);
    }

    draw(context) {
        this.snake.draw(context);
        this.food.draw(context);

    }

    update(deltatime) {
        if (this.snake.die()) {
            this.end();
        }
        this.snake.update(deltatime);
        if (this.eat()) {
            this.food = new Food(this.gridSize);
            this.snake.grow();
            this.score++;
            document.getElementById("score").innerHTML = this.score;
        }
    }

    end() {
        this.score = 0;
        document.getElementById("score").innerHTML = this.score;
        this.over = "true";
    }

}