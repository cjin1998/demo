function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

$(document).ready(function() {
  $("#hidden").hover(
    function() {
      $(this).css("color", "black");
    },
    function() {
      $(this).css("color", "white");
    }
  );

  $("#hiddenForm").hide();

  $("#addButton").click(function() {
    $("#hiddenForm").show();
  });

  $("#register").click(function() {
    $("#hiddenForm").hide();
  });

  $("#cancel").click(function() {
    $("#hiddenForm").hide();
  });

  $("#but").click(function() {
    $(this).val(function(n, c) {
      var number = parseInt(c) + 1;
      alert("you have clicked " + number + " times!");
      return number;
    });
  });
});
