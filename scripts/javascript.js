// Javascript document

 $(document).ready(
    function(){
      $("#pC_controls").on("click", "span", function(){
        $("#pC article").removeClass("opaque");

        var newImage = $(this).index();

        $("#pC article").eq(newImage).addClass("opaque");

        $("#pC_controls span").removeClass("selected");
        $(this).addClass("selected");
    });
  });

 $(document).ready( function(){
	
	$('nav ul a').click( function(e){
		e.preventDefault();

		var link = $(this).attr('href');
		console.log(link);

		var height = $(link).offset().top;
		console.log(height);

		var time = (height/3)

		$('html,body').animate({
			scrollTop: height
		}, time);

	});

});

$(document).ready( function(){
	$('#prev').click(function() {
		$('#panes').animate(
			{right: "170px"}
		)
	});
});

$(document).ready( function(){
	$('#next').click(function() {
		$('#panes').animate(
			{left: "170px"}
		)
	});
});