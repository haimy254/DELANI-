$(document).ready(function () {
  $(".itemss").click(function () {
    $(".itemss").hide();
    $(".item-text2").show();
  });
  $(".item-text2").click(function () {
    $(".item-text2").toggle();
    $(".itemss").toggle();
  });
});

// $(document).ready(function () {
//   $("button").click(function () {
//     $("#item-text2").toggle();
//   });
// });

// $(document).ready(function () {
//   $("button").click(function () {
//     $("p.item-text3").toggle();
//   });
// });
