/* sidebar js */

$("#menu-open").click(function (e) {
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("toggled");
  $(".navfont, #menu-close").fadeIn(100);
  $("#menu-open").css("visibility", "hidden");
});

$("#menu-close").click(function (e) {
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("toggled");
  $(".navfont, #menu-close").fadeOut(100);
  $("#menu-open").css("visibility", "visible");
});
/* end of sidebar js */

/* onload form reset */
$(document).ready(function () {
  $("form").trigger("reset");
});
/* end of onload form reset */

/* sticky mob fadein */
$("#stickymob").hide();

$(window).scroll(function () {
  if ($(this).scrollTop() >= 100) {
    $("#stickymob").fadeIn(500);
  } else {
    $("#stickymob").fadeOut(500);
  }
});
/* end of sticky mob fadein */

/* modal killer */
if (sessionStorage.getItem("popOnce") !== "true") {
  function showModal() {
    if (!$("#exampleModalCenter").is(":visible")) {
      $("#exampleModalCenter").modal("show");
      sessionStorage.setItem("popOnce", "true");
    }
  }

  var modpop;

  function modalTimeSet() {
    modpop = setTimeout(function () {
      showModal();
    }, 50000);
  }

  modalTimeSet();

  function modalTimeKill() {
    clearTimeout(modpop);
    sessionStorage.setItem("popOnce", "true");
  }

  function modalKillTrigger() {
    $("#popupform :input, #headerform :input").focus(function () {
      modalTimeKill();
    });
  }
  modalKillTrigger();
}
/* end of modal killer*/

/* hide sticky buttons */
$("#formf1 :input").focus(function () {
  $("#stickymob").hide();
});

$("#formf1 :input").blur(function () {
  $("#stickymob").show();
});
/* end of hide sticky buttons */

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// $(document).ready(function () {
//   $(window).scroll(function () {
//     var scroll = $(window).scrollTop();
//     if (scroll > 20) {
//       $(".navbar").css("background", "#e5e5e5");
//       $(".logo-site").css("display", "block");
//     } else {
//       $(".navbar").css("background", "#33333300");
//       $(".logo-site").css("display", "none");
//     }
//   });
// });
