
// Variables
const input = document.getElementById("input");
const img = document.getElementById("error");
const btn = document.getElementById("btn");
const invalid = document.getElementById("alert");
const border = document.getElementById("form");

// Disappeared error alerts by clicking input.
const again = () => {
    input.addEventListener('click', () => {
        img.style.display = "none";
        invalid.style.display = "none";
        border.style.border = "1px solid #c9c9c9";
    });
};

// Disappeared error alerts by enter input.
const hide = () => {
    input.addEventListener('input', () => {
        img.style.display = "none";
        invalid.style.display = "none";
        border.style.border = "1px solid #c9c9c9";
    });
};

// Validate input structure.
const validate = () => {
  let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.value.match(mailformat)) {
    return (true);
  } else {
    img.style.display = "block";
    invalid.textContent = "Please provide a valid email"
    invalid.style.display = "block";
    border.style.border = "1px solid hsl(0, 93%, 68%)";
    again();
  return false;
  }
}

// Validate if input is empty.
const empty = () => {
    if (input.value === "") {
        img.style.display = "block";
        invalid.textContent = "Empty"
        invalid.style.display = "block";
        again();
        hide();
        return (false);
    } else {
        validate();
        return(false);
    }
}

