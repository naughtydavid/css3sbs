(function($){
	$(function(){

		var frame = document.getElementById('view-experiment');

		$('.experiments > div').click(function(event){
			event.preventDefault()
			var href = $(this).data('href');
			console.log(href);

			$(frame).attr('src', href).load(function(){
			});
			goFullScreen(frame);
		})
	});


	function goFullScreen(element) {
		if(element.requestFullScreen) {
			element.requestFullScreen();
		} else if(element.mozRequestFullScreen) {
			element.mozRequestFullScreen();
		} else if(element.webkitRequestFullScreen) {
			element.webkitRequestFullScreen();
		}
	}

	function closeFullScreen() {
  if(document.cancelFullScreen) {
    document.cancelFullScreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  }
}

})(jQuery);