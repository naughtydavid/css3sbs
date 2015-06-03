
$(function(){



	perspective = {
		x : parseInt($('#playground1').css('-webkit-perspective-origin').split(' ')[0].replace('px','')),
		y : parseInt($('#playground1').css('-webkit-perspective-origin').split(' ')[1].replace('px',''))
	}
	zoom = 10.0;
	moveBox(10);

	$(window).keydown(function(e){
		switch(e.keyCode){
			case 40:
			zoom++;
			break;
			case 38:
			zoom--;
			break;
			case 32:
			$('.box').toggleClass('play')
			break;

		}
		console.log(e.keyCode, zoom, perspective);
		moveBox();

	});
	
	moveBox();


})

function moveBox(){
	$('.info .depth').text("Depth: " + (10 - zoom))
	$('#playground1').css('-webkit-perspective-origin', (perspective.x-zoom) + "px " + perspective.y + "px")
	$('#playground2').css('-webkit-perspective-origin', (perspective.x+zoom) + "px " + perspective.y + "px")
}
