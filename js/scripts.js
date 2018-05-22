$(document).ready(function(){
  setTimeout(popup, 2000);
  function popup() {
    $("#logindiv").css("display", "block");
  }
  $("#login #cancel").click(function(){
    $(this).parent().parent().hide();
  });
});

$("#loginbtn").click(function(){
  var name = $("#name").val();
  var email = $("#email").vaal();
});
