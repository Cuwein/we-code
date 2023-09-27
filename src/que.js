document.querySelector(".btn").addEventListener("click", function () {
  let name = prompt("What is your name?");
  if (name.length) {
    alert("Thanks, " + name + " , we will be in touch.");
  } else {
    alert("No name, no order placed for you!");
  }
});
