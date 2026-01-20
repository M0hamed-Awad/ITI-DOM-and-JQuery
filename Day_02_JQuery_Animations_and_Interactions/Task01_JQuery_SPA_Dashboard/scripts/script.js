/**
 * make a single page website application that has a menu for the following items
 * “About”, “Gallery”, “Sevices”, and “Complain” each item targets a
 * Container that is only shown when the item is clicked
 * “service” shows a list menu..
 * “complain” section opens a complain form ,where send button shows a preview of user entered data.
 * The user can edit his data on click on edit button
 */

$(document).ready(function () {
  // About
  $("#aboutBtn").click(function () {
    $("#displayArea").remove();
    let mainBox = $("<div>").attr("id", "displayArea").addClass("storyBox");
    let title = $("<h2>").text("Story About snow man").addClass("storyTitle");

    mainBox.append(title);
    $("body").append(mainBox);
  });

  // Gallery
  let images = [
    "../images/1.jpg",
    "../images/2.jpg",
    "../images/3.jpg",
    "../images/4.jpg",
    "../images/5.jpg",
    "../images/6.jpg",
    "../images/7.jpg",
    "../images/8.jpg",
  ];
  let currentIndex = 0;

  $("#galleryBtn").click(function () {
    $("#displayArea").remove();
    let galleryBox = $("<div>")
      .attr("id", "displayArea")
      .addClass("galleryContainer");

    let prevBtn = $("<img>")
      .attr({ id: "prevBtn", src: "../images/left.png" })
      .addClass("navArrow");
    let galleryImg = $("<img>")
      .attr("src", images[currentIndex])
      .addClass("galleryImg");
    let nextBtn = $("<img>")
      .attr({ id: "nextBtn", src: "../images/right.png" })
      .addClass("navArrow");

    galleryBox.append(prevBtn, galleryImg, nextBtn);
    $("body").append(galleryBox);
  });

  $(document).on("click", "#nextBtn", function () {
    currentIndex = (currentIndex + 1) % images.length;
    $(".galleryImg").attr("src", images[currentIndex]);
  });

  $(document).on("click", "#prevBtn", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    $(".galleryImg").attr("src", images[currentIndex]);
  });

  // Services Dropdown
  let isMenuOpen = false;

  $("#servicesBtn").click(function () {
    if (isMenuOpen === false) {
      $("#servicesMenu").slideDown("slow");
      isMenuOpen = true;
    } else {
      $("#servicesMenu").slideUp("slow");
      isMenuOpen = false;
    }
  });

  // Complain
  function renderForm() {
    $("#displayArea").remove();
    let formBox = $("<div></div>")
      .attr("id", "displayArea")
      .addClass("storyBox");

    let name = $("<input>")
      .attr({ type: "text", id: "userName", placeholder: "Name" })
      .addClass("formInput");
    let email = $("<input>")
      .attr({ type: "email", id: "userEmail", placeholder: "Email" })
      .addClass("formInput");
    let phone = $("<input>")
      .attr({ type: "text", id: "userPhone", placeholder: "Phone" })
      .addClass("formInput");
    let msg = $("<textarea></textarea>")
      .attr({ id: "userMsg", placeholder: "Complain" })
      .addClass("formTextarea");
    let sendBtn = $("<button></button>")
      .text("send")
      .attr("id", "submitForm")
      .addClass("itemBtn");

    formBox.append(name, email, phone, msg, sendBtn);
    $("body").append(formBox);
  }

  $("#complainBtn").click(function () {
    renderForm();
  });

  $(document).on("click", "#submitForm", function () {
    let nameVal = $("#userName").val();
    let emailVal = $("#userEmail").val();
    let phoneVal = $("#userPhone").val();
    let msgVal = $("#userMsg").val();

    $("#displayArea")
      .empty()
      .append(
        '<div class="summaryContent">' +
          "<p>Your complain is: <strong>" +
          msgVal +
          "</strong></p>" +
          "<p>Your name is: <strong>" +
          nameVal +
          "</strong></p>" +
          "<p>Your email is: <strong>" +
          emailVal +
          "</strong></p>" +
          "<p>Your phone is: <strong>" +
          phoneVal +
          "</strong></p>" +
          '<button id="backToEdit" class="backBtn">Back to edit</button> ' +
          "</div>",
      );
  });

  $(document).on("click", "#backToEdit", function () {
    renderForm();
  });
});
