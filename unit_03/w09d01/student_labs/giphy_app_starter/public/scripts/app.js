$(function() {

	$('.get-gif').on('click', function () {
		$.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg')
    		.done(function (data) {
      			console.log(data.data.image_url);
      		$('.image-jumbotron').attr('src', data.data.image_url); 
  	  });
	})

}) 