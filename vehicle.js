class Vehicle {

    constructor () {
        this.x = random(0, windowWidth);
        this.y = random(0, windowHeight);
        this.pos = createVector(this.x, this.y);
        this.vel = createVector(0,0);
        this.maxSpeed = 10;
        this.radius = 3;
    }

    update() {
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.vel.mult(0);
    }

    follow(flow) {
        var x = Math.floor(this.pos.x / resolution);
        var y = Math.floor(this.pos.y / resolution);
        var force = flow.vectors[x][y];
        this.applyForce(force);
    }

    applyForce(force) {
        this.vel.add(force);
    }

    display() {
        fill(255,0,0);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.radius*2, this.radius*2);
    }

    edge(flow) {
        var width = (flow.cols * flow.resolution) - flow.resolution;
        var height = (flow.rows * flow.resolution) - flow.resolution;
        if (this.pos.x < 0) this.pos.x = width;
        if (this.pos.y < 0) this.pos.y = height;
        if (this.pos.x > width) this.pos.x = 0;
        if (this.pos.y > height) this.pos.y = 0;
 }



}