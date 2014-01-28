var awe_shit_bitch = function() {
	var canvas = document.getElementById("canvas")
	var ctx = canvas.getContext("2d");

	function resetCanvas() {
		// Set canvas to white
		ctx.fillStyle = "rgb(255, 255, 255)";
		ctx.fillRect (10, 10, 55, 50);
	}

	function resizeCanvas() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		resetCanvas();
	};

	window.addEventListener('resize', resizeCanvas, false);
	resizeCanvas();

	// Image and image properties
	var img_w = 246;
	var img_h = 347;
	var img = document.getElementById("kanye_img");


	function mouseMove(e) {
		if (e.offsetX) {
			mouseX = e.offsetX;
			mouseY = e.offsetY;
		}
		else if (e.layerX) {
			mouseX = e.layerX;
			mouseY = e.layerY;
		}

		ctx.drawImage(img, mouseX , mouseY, img_w, img_h);
	}

	// Bind to mouse move
	canvas.onmousemove = mouseMove;
};


document.addEventListener('DOMContentLoaded', awe_shit_bitch);
