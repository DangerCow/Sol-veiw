
//----------<THE STUFF YOU NEED>----------

test_p = new PLanet(50,300,1,147, 183, 242);
egg = new PLanet(100,940,0.17,219, 187, 114);
wew = new PLanet(73,475,0.83,64,128,128);
egggs = new PLanet(50,1800,0.1,255,255,255);
sunbol = new Sol(165,255, 248, 150);


function draw() {
	background(25);
	interaction();

	test_p.P_draw();
	egg.P_draw();
	wew.P_draw();
	egggs.P_draw();
	sunbol.S_draw();
	//print(veiw_s_s * 1000);
}

//----------<OTHER UNREALTED STUFF I DIDENT TAKE UP A FEW DAYS MAKEING>----------

var veiwx = 0;
var veiwy = 0;

var pause = false;

var veiw_s = 1;
var veiw_s_s = 1;

var s = 1;

function PLanet(s,x,sp,r,g,b) {

	this.an = random(0,360);
	this.x = x;

	this.P_set = function() {

	};

	this.P_draw = function() {

		translate(width / 2, height / 2);

		fill(r, g, b);
		
		if (pause == false) {rotate(this.an);}

		ellipse(this.x, 0, s);

		if(pause == false) {this.an -= sp / 100;}

		fill(255,255,255);

		if (pause == false) {rotate(-this.an);}
		translate(-width / 2, -height / 2);

		//print(this.s);
	};
}

function Sol(s,r,g,b) {
	this.S_draw = function() {
		fill(r, g, b);

		ellipse(width / 2, height / 2, s);

		fill(255,255,255);
	};
}

function setup() {
	createCanvas(800, 800, WEBGL);
}

function mouseWheel(event) {
	if(veiw_s > 0) {veiw_s += -event.delta / 2000 * veiw_s * 3; veiw_s_s -= -event.delta / 2000 * veiw_s_s * 3;}
	else if(veiw_s == 0) {veiw_s += -event.delta / 2000; veiw_s_s -= -event.delta / 2000;}
	else{veiw_s =  1; view_s_s = 1;}
}

function interaction() {

	translate(veiwx + width / 2,veiwy + height / 2); 
	scale(veiw_s);

	var speed = 10;

	if(keyIsDown(87)){ //up
		veiwy += speed;
	}
	if(keyIsDown(83)){ //down
		veiwy -= speed;
	}

	if(keyIsDown(65)){ //left
		veiwx += speed;
	}
	if(keyIsDown(68)){ //right
		veiwx -= speed;
	}		

	translate(veiwx + width / 2 * -1,veiwy + height / 2 * -1);
}

function keyPressed(){
	if (keyCode == "81"){
		pause = !pause;
	}
}
