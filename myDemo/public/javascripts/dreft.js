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
    }
    return true;
  },
  ""
);

$(this)
  .closest("tr")
  .find("form[name='change']")
  .validate({
    rules: {
      editName: {
        required: true,
        minlength: 2
      },

      editEmail: {
        required: true,
        email: true
      },

      editBirthday: {
        required: true,
        dateFormat: true
      }
    },

    messages: {
      editName: {
        required: "Please enter your name",
        minlength: "Your name must be at least 2 characters long"
      },

      editEmail: "Please enter a valid email address",
      editBirthday: {
        required: "Please enter your birthday",
        dateFormat: "Date format must be yyyy-mm-dd"
      }
    }
  });
