
//Terrain ist einfach ein Rechteck mit einer definierten Größe
class Terrain{
	constructor(x_pos, y_pos, terrain_width, terrain_length) {
		this.x_pos = x_pos;
		this.y_pos = y_pos;
		this.width = terrain_width;
		this.length = terrain_length;
	}

	//Zeichnet das Rechteck
	show() {
		strokeWeight(4);
		rect(this.x_pos, this.y_pos, this.width, this.length);
	}
}