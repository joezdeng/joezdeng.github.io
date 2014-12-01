// Javascript document

var inClick = false;

$(document).ready(function(){
	$("#pC_controls").on("click", "span", function(){
    	$("#pC article").removeClass("opaque");

		var newImage = $(this).index();

		$("#pC article").eq(newImage).addClass("opaque");

		$("#pC_controls span").removeClass("selected");
		$(this).addClass("selected");
	});


	$('nav ul a').click( function(e){
		e.preventDefault();

		var link = $(this).attr('href');
		console.log(link);

		var height = $(link).position().top;
		console.log(height);

		var time = (height/3)

		$('html,body').animate({
			scrollTop: height
		}, time);

	});

	
	$('#prev').click(function() {
		if(inClick) return;

		inClick = true;

		if ($('#panes').position().left < 0) {

			$('#panes').animate({left: "+=340"}, 250, function() {
				inClick = false;
			});

		}

		else inClick = false;

	});

	$('#next').click(function() {
		if(inClick) return;

		inClick = true;

		if ($('#panes').position().left > -1700) {

			$('#panes').animate({left: "-=340"}, 250, function() {
				inClick = false;
			});

		}

		else(inClick) = false;

	});

});