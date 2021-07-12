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

          if (isNaN(year) || isNaN(month) || isNaN(day) || value.length != 10) {
            return false;
          } else if (firstSlash != "-" || secondSlash != "-") {
            return false;
          } else if (month > 12 || month < 1 || day > 31 || day < 1) {
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
            dateFormat: "Please enter a valid date (yyyy-mm-dd)"
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
        "<tr><td class='name'><form name='changeName' class='changeName'>" +
          name +
          "</form></td><td class='email'><form name='changeEmail' class='changeEmail'>" +
          email +
          "</form></td><td class='birthday'><form name='changeDate' class='changeDate'>" +
          birthday +
          '</form></td><td><button type="button" class="edit">Edit</button></td></tr>'
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
      jQuery.validator.addMethod(
        "dateFormat",
        function(value, element) {
          var year = parseInt(value.slice(0, 4));
          var month = parseInt(value.slice(5, 7));
          var day = parseInt(value.slice(8));

          var firstSlash = value.slice(4, 5);
          var secondSlash = value.slice(7, 8);

          if (isNaN(year) || isNaN(month) || isNaN(day) || value.length != 10) {
            return false;
          } else if (firstSlash != "-" || secondSlash != "-") {
            return false;
          } else if (month > 12 || month < 1 || day > 31 || day < 1) {
            return false;
          }
          return true;
        },
        ""
      );

      $(this)
        .closest("tr")
        .find("form[name='changeName']")
        .validate({
          rules: {
            editName: {
              required: true,
              minlength: 2
            }
          },

          messages: {
            editName: {
              required: "Please enter your name",
              minlength: "Name must be at least 2 characters long"
            }
          }
        });

      $(this)
        .closest("tr")
        .find("form[name='changeEmail']")
        .validate({
          rules: {
            editEmail: {
              required: true,
              email: true
            }
          },

          messages: {
            editEmail: "Please enter a valid email address"
          }
        });

      $(this)
        .closest("tr")
        .find("form[name='changeDate']")
        .validate({
          rules: {
            editBirthday: {
              required: true,
              dateFormat: true
            }
          },

          messages: {
            editBirthday: {
              required: "Please enter your birthday",
              dateFormat: "Please enter a valid date (yyyy-mm-dd)"
            }
          }
        });

      $(this).html("Save");

      var name = $(this)
        .closest("tr")
        .find(".changeName")
        .text();

      $(this)
        .closest("tr")
        .find(".changeName")
        .html("");

      $(this)
        .closest("tr")
        .find(".changeName")
        .append(
          '<input type="text" value="' +
            name +
            '" class="form-control editName" name="editName">'
        );

      var email = $(this)
        .closest("tr")
        .find(".changeEmail")
        .text();

      $(this)
        .closest("tr")
        .find(".changeEmail")
        .html("");

      $(this)
        .closest("tr")
        .find(".changeEmail")
        .append(
          '<input type="text" value="' +
            email +
            '" class="form-control editEmail" name="editEmail">'
        );

      var birthday = $(this)
        .closest("tr")
        .find(".changeDate")
        .text();

      $(this)
        .closest("tr")
        .find(".changeDate")
        .html("");

      $(this)
        .closest("tr")
        .find(".changeDate")
        .append(
          '<input type="text" value="' +
            birthday +
            '" class="form-control editBirthday" name="editBirthday">'
        );

      $(this)
        .closest("td")
        .append('<button type="button" class="ms-1 delete">Delete</button>');
    } else {
      if (
        $(this)
          .closest("tr")
          .find("form[name='changeName']")
          .valid() &&
        $(this)
          .closest("tr")
          .find("form[name='changeEmail']")
          .valid() &&
        $(this)
          .closest("tr")
          .find("form[name='changeDate']")
          .valid()
      ) {
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
          .find(".changeName")
          .html(newName);

        $(this)
          .closest("tr")
          .find(".changeEmail")
          .html(newEmail);

        $(this)
          .closest("tr")
          .find(".changeDate")
          .html(newBirthday);

        $(this)
          .closest("td")
          .find(".delete")
          .remove();
      } else {
        alert("Please complete the form correctly before submission");
      }
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
});
