$(document).ready(function () {
  $(".itemss").click(function () {
    $(".itemss").hide();
    $(".item-text2").show();
  });
  $(".item-text2").click(function () {
    $(".item-text2").toggle();
    $(".itemss").toggle();
  });

  $(".itemss1").click(function () {
    $(".itemss1").hide();
    $(".item-text1").show();
  });
  $(".item-text1").click(function () {
    $(".item-text1").toggle();
    $(".itemss1").toggle();
  });

  $(".itemss2").click(function () {
    $(".itemss2").hide();
    $(".item-text3").show();
  });
  $(".item-text3").click(function () {
    $(".item-text3").toggle();
    $(".itemss2").toggle();
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
