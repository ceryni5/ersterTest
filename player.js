class Player{
	constructor(x_pos, y_pos, speed, size) {
		this.x_pos = x_pos;
		this.y_pos = y_pos;
		this.speed = speed;
		this.size = size;
	}

	//Bewegeung des Spielers entsprechend Pfeiltasten
	updatePos(terrain) {
		//Wenn Pfeiltaste links
		if(keyIsDown(37)){
			//Bewegung nach links, entsprechend Geschwindigkeit
			this.x_pos -= this.speed;
			//Test, ob diese Bewegung in Wand geführt hat
			let moveLeft = true;
			for(let i = 0; i < terrain.length; i++){
				if(this.overlaps(terrain[i])) {
					moveLeft = false;
					break;
				}
			}
			//Falls move in Wand, wieder vor die Wand zurück setzten.
			if(!moveLeft){
				this.x_pos += this.speed*1.5;
			}
		}
		//Entsprechend für die anderen 4 Richtungen:
		if(keyIsDown(39)){
			this.x_pos += this.speed;
			let moveRight = true;
			for(let i = 0; i < terrain.length; i++){
				if(this.overlaps(terrain[i])) {
					moveRight = false;
					break;
				}
			}
			if(!moveRight){
				this.x_pos -= this.speed*1.5;
			}
		}
		if(keyIsDown(38)){
			this.y_pos -= this.speed;
			let moveUp = true;
			for(let i = 0; i < terrain.length; i++){
				if(this.overlaps(terrain[i])) {
					moveUp = false;
					break;
				}
			}
			if(!moveUp){
				this.y_pos += this.speed*1.5;
			}
		}
		if(keyIsDown(40)){
				this.y_pos += this.speed;
				let moveDown = true;
				for(let i = 0; i < terrain.length; i++){
				if(this.overlaps(terrain[i])) {
					moveDown = false;
					break;
				}
			}
			if(!moveDown){
				this.y_pos -= this.speed*1.5;
			}
		}
	}

	//Zeichnet den Spieler an seiner Position in Draw
	show() {
		rect(this.x_pos, this.y_pos, this.size, this.size);
	}

	overlaps(terrain) {
		//Spieler rechts vom Hindernis:
		if(this.x_pos > terrain.x_pos + terrain.width){
			return false;
		}
		//Spieler über dem Hindernis:
		else if(this.y_pos + this.size < terrain.y_pos) {
			return false;
		}
		//Spieler unter dem Hindernis:
		else if(this.y_pos > terrain.y_pos + terrain.length) {
			return false;
		}
		//Spieler links des Hindernis:
		else if(this.x_pos + this.size < terrain.x_pos){
			return false;
		}
        else{
      	   	return true;  	
        }
	}
}