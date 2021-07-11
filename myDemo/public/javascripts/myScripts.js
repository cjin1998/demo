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
    var name = $("#inputName").val();
    var email = $("#inputEmail").val();
    var birthday = $("#inputDate").val();

    $(".tbody").append(
      "<tr><td class='name'>" +
        name +
        "</td><td class='email'>" +
        email +
        "</td><td class='birthday'>" +
        birthday +
        '</td><td><button type="button" class="edit">Edit</button></td></tr>'
    );

    $("#inputName").val("");
    $("#inputEmail").val("");
    $("#inputDate").val("");
  });

  $("#cancel").click(function() {
    $("#hiddenForm").hide();
  });

  $(document).on("click", ".edit", function() {
    if ($(this).text() == "Edit") {
      var name = $(this)
        .closest("tr")
        .find(".name")
        .text();

      $(this)
        .closest("tr")
        .find(".name")
        .html("");

      $(this)
        .closest("tr")
        .find(".name")
        .append(
          '<input type="text" value="' +
            name +
            '" class="form-control editName">'
        );

      var email = $(this)
        .closest("tr")
        .find(".email")
        .text();

      $(this)
        .closest("tr")
        .find(".email")
        .html("");

      $(this)
        .closest("tr")
        .find(".email")
        .append(
          '<input type="text" value="' +
            email +
            '" class="form-control editEmail">'
        );

      var birthday = $(this)
        .closest("tr")
        .find(".birthday")
        .text();
      $(this).html("Save");

      $(this)
        .closest("tr")
        .find(".birthday")
        .html("");

      $(this)
        .closest("tr")
        .find(".birthday")
        .append(
          '<input type="text" value="' +
            birthday +
            '" class="form-control editBirthday">'
        );

      $(this)
        .closest("td")
        .append('<button type="button" class="ms-1 delete">Delete</button>');
    } else {
      //save button functions
      var newName = $(this)
        .closest("tr")
        .find(".editName")
        .val();

      var newEmail = $(this)
        .closest("tr")
        .find(".editEmail")
        .val();

      var newBirthday = $(this)
        .closest("tr")
        .find(".editBirthday")
        .val();

      $(this)
        .closest("tr")
        .find("input")
        .remove();

      $(this)
        .closest("tr")
        .find(".name")
        .html(newName);

      $(this)
        .closest("tr")
        .find(".email")
        .html(newEmail);

      $(this)
        .closest("tr")
        .find(".birthday")
        .html(newBirthday);

      $(this).html("Edit");
      $(this)
        .closest("td")
        .find(".delete")
        .hide();
    }
  });

  //delete button functions
  $(document).on("click", ".delete", function() {
    $(this)
      .closest("tr")
      .remove();
  });

  $("#but").click(function() {
    $(this).val(function(n, c) {
      var number = parseInt(c) + 1;
      alert("you have clicked " + number + " times!");
      return number;
    });
  });
});
