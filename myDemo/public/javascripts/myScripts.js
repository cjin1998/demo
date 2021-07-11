$(document).ready(function() {
  $("#hiddenForm").hide();

  $("#addButton").click(function() {
    if ($(this).text() == "ADD") {
      $(this).html("CANCEL");
      $("#hiddenForm").show();

      jQuery.validator.addMethod(
        "dateFormat",
        function(value, element) {
          var year = parseInt(value.slice(0, 4));
          var month = parseInt(value.slice(5, 7));
          var day = parseInt(value.slice(8));

          var firstSlash = value.slice(4, 5);
          var secondSlash = value.slice(7, 8);

          if (isNaN(year) || isNaN(month) || isNaN(day)) {
            return false;
          } else if (firstSlash != "-" || secondSlash != "-") {
            return false;
          }
          return true;
        },
        ""
      );

      $("form[name='registration']").validate({
        rules: {
          inputName: {
            required: true,
            minlength: 2
          },

          inputEmail: {
            required: true,
            email: true
          },

          inputDate: {
            required: true,
            dateFormat: true
          }
        },

        messages: {
          inputName: {
            required: "Please enter your name",
            minlength: "Your name must be at least 2 characters long"
          },

          inputEmail: "Please enter a valid email address",
          inputDate: {
            required: "Please enter your birthday",
            dateFormat: "Date format must be yyyy-mm-dd"
          }
        }
      });
    } else {
      $(this).html("ADD");
      $("#inputName").val("");
      $("#inputEmail").val("");
      $("#inputDate").val("");
      $("#hiddenForm").hide();
    }
  });

  $("#register").click(function() {
    if ($("form[name='registration']").valid()) {
      $("#hiddenForm").hide();
      $("#addButton").html("ADD");
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
    } else {
      alert("Please complete the form correctly before submission :)");
    }
  });

  $(document).on("click", ".edit", function() {
    if ($(this).text() == "Edit") {
      $(this).html("Save");

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
      $(this).html("Edit");
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

  $("#hidden").hover(
    function() {
      $(this).css("color", "black");
    },
    function() {
      $(this).css("color", "white");
    }
  );

  $("#but").click(function() {
    $(this).val(function(n, c) {
      var number = parseInt(c) + 1;
      alert("you have clicked " + number + " times!");
      return number;
    });
  });
});

function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
