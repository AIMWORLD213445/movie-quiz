$(document).ready(function() {
  $("form#quizForm").submit(function(event) {

    var movie = parseInt($("input:radio[name=movie]:checked").val());
    var song = parseInt($("input:radio[name=song]:checked").val());
    var tvshow = parseInt($("input:radio[name=tvshow]:checked").val());
    var food = parseInt($("input:radio[name=food]:checked").val());
    var place = parseInt($("input:radio[name=place]:checked").val());
    console.log(movie + " " + song);
    var score = (place + movie + song + food + tvshow);
    // return(score);

    if (score <= 7) {
      $("#result1").show();

    } else if (score > 7 && score < 12){
        $("#result2").show();
      } else if (score > 12 && score < 13){
          $("#result3").show();
        }else if(score > 13 && score < 18){
            $("#result4").show();
          } else {
              $("#result5").show();
            }

    event.preventDefault();

    });


    $("#resetBtn").click(function() {
      $("#result1").hide();
      $("#result2").hide();
      $("#result3").hide();
      $("#result4").hide();
      $("#result5").hide();
    		// $("#result1#result2#result3#result4#result5").hide();
    		// $(".container").css("background-color", "white");
    	});



});
