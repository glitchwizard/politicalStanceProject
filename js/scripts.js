$(document).ready(function(event) {
  $("#form-group form").submit(function(event) {
    var guncontrolInput = $("input:radio[name=guncontrol]:checked").val();
    var abortionInput = $("input:radio[name=experience]:checked").val();
    var immigrationInput = parseInt($("#immigration").val());

    $("span#abortion").text(abortionInput);

    event.preventDefault();
  });
});
