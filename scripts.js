$(document).ready(function () {
  $("#image1").click(function () {
    $(".p1").toggle();
  });
  $(".image2").click(function () {
    $(".para1").toggle();
  });
  $(".image3").click(function () {
    $(".para3").toggle();
  });
  $('.image').hover(function () {
    $(this).animate({ opacity: '0.3' });
  },
    function () {
      $(this).animate({ opacity: '0.3' });
    });
});

$(document).ready(function () {
  $("#submit").submit(function (event) {
    var show1 = $("input:first").val();
    var show2 = $("input#email").val();
    if (show1 && show2 != '') {
      alert("Thank you " + show1 + " your message is well received !");
    } else {
      alert('Invalid input');
    }
    event.preventDefault();
  })
});


