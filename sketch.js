let resolution = 40;
let noiseInc = 0.01;
let vehicleCount = 20;
let vehicles = [];
var flow;
var vehicle;
var time = 0;

function setup() {

  for (var i=0; i<vehicleCount; i++) {
    vehicles[i] = new Vehicle(flow);
  }
  
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  background(20);
  noStroke();

  flow = new Flow(resolution);

  for (var x=0; x<flow.vectors.length; x++) {
    for (var y=0; y<flow.vectors[x].length; y++) {
      
      stroke(255, 60);
      push();
      translate(x * resolution, y * resolution);
      rotate(flow.vectors[x][y].heading());
      line(0, 0, resolution, 0);
      pop();

      fill(255, 0, 0);
      ellipse(x * resolution, y * resolution, 1, 1, 20);
    };
  };

  for (var i=0; i<vehicles.length; i++) {
    vehicles[i].update();
    vehicles[i].edge(flow);
    vehicles[i].follow(flow);
    vehicles[i].display();
  }

  time += 0.01;


  fill(255);
  text(Math.floor(frameRate()), 20, 20);
  noFill();
}