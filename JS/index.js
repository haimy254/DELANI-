$(document).ready(function () {
  $("#my-form").submit(function (event) {
    event.preventDefault();

    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("#message").val();

    sendEmail(name, email, message);

    $(".message").addClass("show");
    alert("message submitted");

    // function sendEmail(name, email, message) {
    //   email.send({
    //     Host: "smt.gmail.com",
    //     Username: "haimanaare@gmail.com",
    //     Password: "0124578",
    //     To: "",
    //   });
    // }
  });
});
