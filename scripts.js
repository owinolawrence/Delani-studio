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
  $(".image").hover(function() {
    $("delani1").fadeTo("fast " ,0.6);
});
$(".image").hover(function() {
  $("delani2").fadeTo("fast" ,0.6);
});
$(".image").hover(function() {
  $("delani3").fadeTo("fast" ,0.6);
});
$(".image").hover(function() {
  $("delani4").fadeTo("fast" ,0.6);
});
$(".image").hover(function() {
  $("delani5").fadeTo("fast" ,0.6);
});
$(".image").hover(function() {
  $("delani6").fadeTo("fast" ,0.6);
});
$(".image").hover(function() {
  $("delani7").fadeTo("fast" ,0.6);
});
$(".image").hover(function() {
  $("delani8").fadeTo("fast" ,0.6);
});
});

$(document).ready(function (event) {

  $(".submit").click(function (event) {
    {
      alert("We have received your Message");
    } {
      alert("Thank you for reaching us");
    }
  });
 });

 function input() {
  var name =document.getElementById("name").value;

    var email =document.getElementById("email").value;
  
      var comment=document.getElementById("comment").value;
      if (document.getElementById("name").checked) {
        var name = "Name";
    }
    if (document.getElementById("email").checked) {
      var email = "Email";
    
    }
     if(document.getElementById(comment).checked) {
      var comment = "Comment";
    }
    if (name === name && email === email && comment === comment ) {
        alert("We have received your Message");
        alert("Thank you for reaching us");
    }
    else if  (name != name && email != email && comment != comment ){
        alert("invalid data");
    }

    }