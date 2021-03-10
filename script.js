
// Variables
let email = document.getElementById("i-email");
let img = document.getElementById("error");
let btn = document.getElementById("btn");
let invalid = document.getElementById("alert");
let input = document.getElementById("form");

// Disappeared error alerts by clicking input.
let again = () => {
    email.addEventListener('click', () => {
        img.style.display = "none";
        invalid.style.display = "none";
        input.style.border = "1px solid #c9c9c9";
    });
};

// Validate email structure.
let validate = () => {
  let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value.match(mailformat)) {
    return (true);
  } else {
    img.style.display = "block";
    invalid.textContent = "Please provide a valid email"
    invalid.style.display = "block";
    input.style.border = "1px solid hsl(0, 93%, 68%)";
    again();
  return false;
  }
}

// Validate if input is empty.
let empty = () => {
    if (email.value === "") {
        img.style.display = "block";
        invalid.textContent = "Empty"
        invalid.style.display = "block";
        again();
        return (false);
    } else {
        validate();
        return(false);
    }
}

