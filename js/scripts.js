//business logic
function Log(first, last) {
  this.firstName = first;
  this.lastName = last;
}

$(document).ready(function(){
  setTimeout(popup, 100);
  function popup() {
  $("#logindiv").css("display", "block");
  }
  $("#login #cancel").click(function(){
  $(this).parent().parent().hide();
  });
  $("#login #loginbtn").click(function(){
  $(this).parent().parent().hide();
  });


$("#loginbtn").click(function(event){
  event.preventDefault();
  var inputtedName = $("input#name").val();
  var inputtedEmail = $("#email").val();
  var newLog = new Log(inputtedName, inputtedEmail);

  $("h4#log").append("<h4><span class='login'>" + newLog.firstName + "</span></h4>")

  $(".login").last().click(function(){
    $("#show-login").show();

    $(".last-name").text(newLog.lastName);
  });
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
});
});
