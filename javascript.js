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