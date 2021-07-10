function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

$(document).ready(function() {
  $("#hidden").hover(
    function() {
      $(this).css("color", "black");
    },
    function() {
      //$(this).hide();
      $(this).css("color", "white");
    }
  );

  /*  $("#but").click(function() {
    var num = $(this).val();
    var number = parseInt(num);
    number += 1;

    $(this).val(number);

    alert("You have clicked " + number + " times!");
  }); */

  $("#but").click(function() {
    $(this).val(function(n, c) {
      var number = parseInt(c) + 1;
      alert("you have clicked " + number + " times!");
      return number;
    });
  });
});
