document.addEventListener("DOMContentLoaded", function () {
  var soundButton = document.getElementById("only-button1");
  var clickSound = document.getElementById("clickSound");

  soundButton.addEventListener("click", function () {
    clickSound.play();
    alert("Hello, World!");
  });
});
