const headerForm = "#headerform";
const popupForm = "#popupform";
const footerForm = "#footerForm";

$("document").ready(function () {
  $(headerForm).validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
      },
      phone: {
        required: true,
        minlength: 10,
        maxlength: 10,
      },
      email: {
        required: true,
        email: true,
      },
    },
    errorElement: "span",
    errorClass: "text-danger",
    messages: {
      name: { minlength: "Name at least have 3 characters" },
      phone: {
        minlength: "Mobile Number at least have 10 Digits",
      },
      email: { email: "Please Enter Valid Email Address" },
    },
    submitHandler: function () {
      submitForm(headerForm);
    },
  });
  // Popup Form
  $(popupForm).validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
      },
      mobile: {
        required: true,
        minlength: 10,
        maxlength: 10,
      },
      email: {
        required: true,
        email: true,
      },
    },
    errorElement: "span",
    errorClass: "text-danger",
    messages: {
      name: { minlength: "Name at least have 4 characters" },
      mobile: {
        minlength: "mobile number at least have 10 Digits",
      },
      email: { email: "please enter a valid email address" },
    },
    submitHandler: function () {
      submitForm(popupForm);
    },
  });
  /* handle form submit */

  $(footerForm).validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
      },
      mobile: {
        required: true,
        minlength: 10,
        maxlength: 10,
      },
      email: {
        required: true,
        email: true,
      },
    },
    errorElement: "span",
    errorClass: "text-danger",
    messages: {
      name: { minlength: "Name at least have 4 characters" },
      mobile: {
        minlength: "mobile number at least have 10 Digits",
      },
      email: { email: "please enter a valid email address" },
    },
    submitHandler: function () {
      submitForm(footerForm);
    },
  });

  function submitForm(formName) {
    const data = $(formName).serialize();
    $.ajax({
      type: "POST",
      // add zap link here
      url: "",
      data: data,
      beforeSend: function () {
        $("#errmsgthree").html("");
        $("#submitf1").html("Sending...");
        $("#submitf1").attr("disabled", true);
      },
      success: function (data) {
        if (data.status === "error") {
          $("#errmsgthree").fadeIn(1000, function () {
            $("#errmsgthree").fadeOut(5000).hide();
            $("#submitf1").html("Submit");
            $("#submitf1").removeAttr("disabled");
          });
        } else if (data.status === "success") {
          $("#submitf1").html("Submit");
          $("#submitf1").removeAttr("disabled");

          setTimeout(thankYou, 750);
        } else {
          $("#errmsgthree").fadeIn(100, function () {
            $("#errmsgthree")
              .html("" + data.message + "")
              .fadeIn(100)
              .show();
            $("#btn-pop").html("Submit");
            $("#btn-pop").removeAttr("disabled");
            $("#errmsgthree").html(
              '<div class="alert alert-danger"><span class="glyphicon glyphicon-info-sign"></span> &nbsp; ' +
                data +
                " !</div>"
            );
          });
        }
      },
    });
    return false;
  }

  function thankYou() {
    window.location.replace("thank-you.html");
  }
});

// name=shivam&email=s%40gmail.com&country=India%20%2B91&phone=7738822023&qs=&formid=HeaderForm
