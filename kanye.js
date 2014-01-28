var awe_shit_bitch = function() {
	var canvas = document.getElementById("canvas")
	var ctx = canvas.getContext("2d");

	function resetCanvas() {
		// Set canvas to white
		ctx.fillStyle = "rgb(255, 255, 255)";
		ctx.fillRect (0, 0, window.innerWidth, window.innerHeight);
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

	var mouse_offset = 100;

	function mouseMove(e) {
		if (e.offsetX) {
			mouseX = e.offsetX;
			mouseY = e.offsetY;
		}
		else if (e.layerX) {
			mouseX = e.layerX;
			mouseY = e.layerY;
		}

		ctx.drawImage(img, mouseX - mouse_offset, mouseY - mouse_offset, img_w, img_h);
	}

	// Bind to mouse move
	window.onmousemove = mouseMove;
};

document.addEventListener('DOMContentLoaded', awe_shit_bitch);
