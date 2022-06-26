function party() {
  let email = prompt("What is your email?");
  let month = prompt("What month is your event on?");
  if (month === "December") {
    alert("Oh! Sorry, we are close that month");
  } else {
    alert("Thank you! We will contact you soon.");
  }
}
let contactButton = document.querySelector("button");

contactButton.addEventListener("click", party);
