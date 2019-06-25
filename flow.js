class Flow {

    constructor(_resolution) {
        
        this.cols = Math.floor(windowWidth / _resolution);
        this.rows = Math.floor(windowHeight / _resolution);
        this.resolution = _resolution;
        
        this.vectors = new Array(this.cols);

        this.xoff = 0;

        for (var x=0; x<this.vectors.length; x++) {
            this.yoff = 0;
            this.vectors[x] = new Array(this.rows);
            for (var y=0; y<this.vectors[x].length; y++) {
                var vectorDirection = noise(this.xoff, this.yoff, time) * 2*(TWO_PI);
                this.vectors[x][y] = p5.Vector.fromAngle(vectorDirection);
                this.vectors[x][y].setMag(5);
                this.yoff += noiseInc;
            };
            this.xoff += noiseInc;
        };
    }

}