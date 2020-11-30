class Box {
    constructor(x, y, width, height) {
        var options = {
            'static':true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        World.add(world, this.body);    
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        fill('red');
        rect(this.x, this.y, this.width, this.height);
        pop();
    }
}