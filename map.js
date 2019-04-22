class Map{
	constructor(map_width, map_height) {
		this.width = map_width;
		this.height = map_height;
		this.terrain = [];
	}

	//Generiert zu Anfang in Setup die Karte 
	generateMap() {
		this.generateEdges();
		this.generatePillars(15);
		return this.terrain;
	}

	//Hilfsfunktion um die Außenkanten zu erstellen
	generateEdges() {
		let bottomEdge = new Terrain(10, (this.height-10), this.width-20, 10);
		this.terrain.push(bottomEdge);
		let rightEdge = new Terrain(this.width-10, 10, 10, (this.height-20));
		this.terrain.push(rightEdge);
		let leftEdge = new Terrain(0, 10, 10, this.height-20);
		this.terrain.push(leftEdge);
		let topEdge = new Terrain(10, 0, this.width-20, 10);
		this.terrain.push(topEdge);
		console.log("Kanten wurden generiert!");
	}

	//erstellt Pfeiler innerhalb des Feldes
	generatePillars(numberOfPillars) {
		for(let i = 0; i < numberOfPillars; i++) {
			let x = random(20, this.width-30); 
			let y = random(20, this.height-30);
			let edgelength = random(10, 20);
			let pillar = new Terrain(x, y, edgelength, edgelength);
			this.terrain.push(pillar);
		}
		console.log("Pfeiler auch");

	}
	
	//Zeichnet die Karte in Draw
	show() {
		fill(50);
		for(let i = 0; i < this.terrain.length; i++){
			this.terrain[i].show();
		}
	}
}