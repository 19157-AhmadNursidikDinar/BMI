var index = 0;

fungsi();

function fungsi(){
	var i;
	var slides = document.getElementsByClassName('slide');
	var dot = document.getElementsByClassName('titik');

	for(i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}

	index++;
	if(index > slides.length){
		index = 1
	}

	for(i = 0; i < dot.length; i++){
		dot[i].className = dot[i].className.replace(" active", "");
	}

	slides[index-1].style.display = "block";
	dot[index-1].className += " active"
	setTimeout(fungsi, 1000);
}