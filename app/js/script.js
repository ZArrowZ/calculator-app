const darkTheme = document.getElementById("dark");
const lightTheme = document.getElementById("light");
const violetTheme = document.getElementById("violet");
const toggleButton = document.querySelector(".toggle__button");
const body = document.body;
const buttons = document.querySelectorAll("button");
const toggle = document.querySelector(".toggle__background");
const diffButtons = document.querySelectorAll(".diff-color");
const displayScreen = document.querySelector(".display");
const equalButton = document.querySelector(".equals");
const buttonsContainer = document.querySelector(".grid__container");
let darkMode = localStorage.getItem("darkMode");
let lightMode = localStorage.getItem("lightMode");
let violetMode = localStorage.getItem("violetMode");

function enableDarkMode() {
  localStorage.setItem("darkMode", "enabled");
}
function disableDarkMode() {
  localStorage.setItem("darkMode", null);
}
function enableLightMode() {
  localStorage.setItem("lightMode", "enabled");
}
function disableLightMode() {
  localStorage.setItem("lightMode", null);
}
function enableVioletMode() {
  localStorage.setItem("violetMode", "enabled");
}
function disableVioletMode() {
  localStorage.setItem("violetMode", null);
}
// get the prefer theme for the user
const userPrefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
const userPrefersLight =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: light)").matches;

// put the default theme
if (userPrefersDark) {
  darkTheme.checked = true;
}
if (userPrefersLight) {
  lightTheme.checked = true;
  toggleButton.style.right = "28px";
}

if (darkMode === "enabled") {
  addDarkTheme();
} else if (lightMode === "enabled") {
  addLightTheme();
} else if (violetMode === "enabled") {
  addVioletTheme();
}

// function to add the dark theme
function addDarkTheme() {
  toggleButton.style.right = "50px";
  // add light classes to change the colors
  body.classList.add("dark");
  toggle.classList.add("dark__toggle__background");
  toggleButton.classList.add("dark__toggle__button");
  buttons.forEach((button) => {
    button.classList.add("dark__button");
  });
  diffButtons.forEach((diffButton) => {
    diffButton.classList.add("dark__diff");
  });
  equalButton.classList.add("dark__equal");
  displayScreen.classList.add("dark__display");
  buttonsContainer.classList.add("dark__grid__container");

  // remove all light theme classes
  removeLightTheme();
  // remove all violet theme classes
  removeVioletTheme();
}
// function we call it to remove dark theme
function removeDarkTheme() {
  body.classList.remove("dark");
  toggle.classList.remove("dark__toggle__background");
  toggleButton.classList.remove("dark__toggle__button");
  buttons.forEach((button) => {
    button.classList.remove("dark__button");
  });
  diffButtons.forEach((diffButton) => {
    diffButton.classList.remove("dark__diff");
  });
  equalButton.classList.remove("dark__equal");
  displayScreen.classList.remove("dark__display");
  buttonsContainer.classList.remove("dark__grid__container");
}

// function to add the violet theme
function addVioletTheme() {
  toggleButton.style.right = "5px";
  // add violet classes to change the colors
  body.classList.add("violet");
  toggle.classList.add("violet__toggle__background");
  toggleButton.classList.add("violet__toggle__button");
  buttons.forEach((button) => {
    button.classList.add("violet__button");
  });
  diffButtons.forEach((diffButton) => {
    diffButton.classList.add("violet__diff");
  });
  equalButton.classList.add("violet__equal");
  displayScreen.classList.add("violet__display");
  buttonsContainer.classList.add("violet__grid__container");

  // remove all light theme classes
  removeLightTheme();

  // remove all dark theme classes
  removeDarkTheme();
}

// function we call it to remove violet theme
function removeVioletTheme() {
  body.classList.remove("violet");
  toggle.classList.remove("violet__toggle__background");
  toggleButton.classList.remove("violet__toggle__button");
  buttons.forEach((button) => {
    button.classList.remove("violet__button");
  });
  diffButtons.forEach((diffButton) => {
    diffButton.classList.remove("violet__diff");
  });
  equalButton.classList.remove("violet__equal");
  displayScreen.classList.remove("violet__display");
  buttonsContainer.classList.remove("violet__grid__container");
}

// function to add the light theme
function addLightTheme() {
  toggleButton.style.right = "28px";
  // add light classes to change the colors
  body.classList.add("light");
  toggle.classList.add("light__toggle__background");
  toggleButton.classList.add("light__toggle__button");
  buttons.forEach((button) => {
    button.classList.add("light__button");
  });
  diffButtons.forEach((diffButton) => {
    diffButton.classList.add("light__diff");
  });
  equalButton.classList.add("light__equal");
  displayScreen.classList.add("light__display");
  buttonsContainer.classList.add("light__grid__container");

  // remove all violet theme classes
  removeVioletTheme();
  // remove all dark theme classes
  removeDarkTheme();
}

// function we call it to remove light theme
function removeLightTheme() {
  body.classList.remove("light");
  toggle.classList.remove("light__toggle__background");
  toggleButton.classList.remove("light__toggle__button");
  buttons.forEach((button) => {
    button.classList.remove("light__button");
  });
  diffButtons.forEach((diffButton) => {
    diffButton.classList.remove("light__diff");
  });
  equalButton.classList.remove("light__equal");
  displayScreen.classList.remove("light__display");
  buttonsContainer.classList.remove("light__grid__container");
}

// dark theme
darkTheme.addEventListener("click", () => {
  // save in local storage
  darkMode = localStorage.getItem("darkMode");
  lightMode = localStorage.getItem("lightMode");
  violetMode = localStorage.getItem("violetMode");

  enableDarkMode();
  disableLightMode();
  disableVioletMode();
  // call the function to add the dark theme
  addDarkTheme();
});

// light theme
lightTheme.addEventListener("click", () => {
  // save in local storage
  darkMode = localStorage.getItem("darkMode");
  lightMode = localStorage.getItem("lightMode");
  violetMode = localStorage.getItem("violetMode");
  enableLightMode();
  disableDarkMode();
  disableVioletMode();
  // call the function to add light theme
  addLightTheme();
});

// violet theme
violetTheme.addEventListener("click", () => {
  // save in local storage
  darkMode = localStorage.getItem("darkMode");
  lightMode = localStorage.getItem("lightMode");
  violetMode = localStorage.getItem("violetMode");
  enableVioletMode();
  disableDarkMode();
  disableLightMode();
  // call the function to add violet theme
  addVioletTheme();
});

// ------------------------------------------------------------------ Add functionally to the calculator ------------------------------------------------------------------ \\

const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");
const deleteButton = document.querySelector(".delete");
const clearButton = document.querySelector(".clear");

// function to but comma after three digits
function addCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// clear all result from display screen
clearButton.addEventListener("click", () => {
  displayScreen.textContent = "";
});

// numbers buttons
numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.textContent;

    if (
      (displayScreen.textContent.slice(-1) === "." && value === ".") ||
      (displayScreen.textContent.slice(0) === "0" && value === "0")
    )
      return;

    // if the first number = . add 0 before it
    if (
      (displayScreen.textContent === "" && value === ".") ||
      (displayScreen.textContent.slice(-2, -1) === "-" && value === ".") ||
      (displayScreen.textContent.slice(-2, -1) === "+" && value === ".") ||
      (displayScreen.textContent.slice(-2, -1) === "/" && value === ".") ||
      (displayScreen.textContent.slice(-2, -1) === "x" && value === ".")
    ) {
      displayScreen.textContent += 0;
    }

    // if the first number equal 0 replace it with next number
    if (displayScreen.textContent.slice(0) === "0" && value != ".") {
      displayScreen.textContent = "";
    }

    // if display screen contain error massage or Infinity message delete it
    if (
      displayScreen.textContent.includes("Error!") ||
      displayScreen.textContent.includes("Infinity")
    ) {
      displayScreen.textContent = "";
    }
    displayScreen.textContent += value;
  });
});

// operation buttons
operationButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.textContent;

    if (
      displayScreen.textContent.slice(-2, -1) === "-" ||
      displayScreen.textContent.slice(-2, -1) === "+" ||
      displayScreen.textContent.slice(-2, -1) === "/" ||
      displayScreen.textContent.slice(-2, -1) === "x"
    ) {
      let newContent = displayScreen.textContent.slice(0, -3);
      displayScreen.textContent = newContent;
    }

    // no operation in the beginning
    if (displayScreen.textContent.length === 0) return;

    // if there's previous operation
    if (
      displayScreen.textContent.includes("-") ||
      displayScreen.textContent.includes("+") ||
      displayScreen.textContent.includes("/") ||
      displayScreen.textContent.includes("x")
    ) {
      const converted = displayScreen.textContent.replaceAll("x", "*");
      const replaceComma = converted.replaceAll(",", "");
      const result = eval(replaceComma);
      displayScreen.textContent = "";
      const convertToEnNum = addCommas(result);
      displayScreen.textContent += convertToEnNum;
    }

    // if display contain error or Infinity delete it
    if (
      displayScreen.textContent.includes("Infinity") ||
      displayScreen.textContent.includes("Error!")
    ) {
      displayScreen.textContent = "";
      return;
    }
    displayScreen.textContent += " " + value + " ";
  });
});

// delete last number
deleteButton.addEventListener("click", () => {
  let newContent = displayScreen.textContent.slice(0, -1);
  displayScreen.textContent = newContent;

  if (displayScreen.textContent.slice(-1) === ",") {
    let newContent = displayScreen.textContent.slice(0, -1);
    displayScreen.textContent = newContent;
  }
  if (displayScreen.textContent.slice(-2, -1) === " ") {
    let newContent = displayScreen.textContent.slice(0, -2);
    displayScreen.textContent = newContent;
  }
  if (
    displayScreen.textContent.includes("Error") ||
    displayScreen.textContent.includes("Infinit")
  ) {
    displayScreen.textContent = "";
  }
});

// equal button
equalButton.addEventListener("click", () => {
  // display error to the user if the input is wrong
  if (
    displayScreen.textContent.slice(-2, -1) === "-" ||
    displayScreen.textContent.slice(-2, -1) === "+" ||
    displayScreen.textContent.slice(-2, -1) === "/" ||
    displayScreen.textContent.slice(-2, -1) === "x"
  ) {
    displayScreen.textContent = "Error!";
  }
  // convert x to *
  const converted = displayScreen.textContent.replaceAll("x", "*");
  const replaceComma = converted.replaceAll(",", "");
  const result = eval(replaceComma);
  const convertToEnNum = addCommas(result);
  displayScreen.textContent = convertToEnNum;
});

// make the keyboard keys work to do calc functionality
document.addEventListener("keydown", (e) => {
  if (e.key === "7") {
    numberButtons[0].click();
  } else if (e.key === "8") {
    numberButtons[1].click();
  } else if (e.key === "9") {
    numberButtons[2].click();
  } else if (e.key === "4") {
    numberButtons[3].click();
  } else if (e.key === "5") {
    numberButtons[4].click();
  } else if (e.key === "6") {
    numberButtons[5].click();
  } else if (e.key === "1") {
    numberButtons[6].click();
  } else if (e.key === "2") {
    numberButtons[7].click();
  } else if (e.key === "3") {
    numberButtons[8].click();
  } else if (e.key === ".") {
    numberButtons[9].click();
  } else if (e.key === "0") {
    numberButtons[10].click();
  } else if (e.key === "Backspace") {
    deleteButton.click();
  } else if (e.key === "Delete") {
    clearButton.click();
  } else if (e.key === "=") {
    equalButton.click();
  } else if (e.key === "+" && displayScreen.textContent != "") {
    operationButtons[0].click();
  } else if (e.key === "-" && displayScreen.textContent != "") {
    operationButtons[1].click();
  } else if (e.key === "/" && displayScreen.textContent != "") {
    operationButtons[2].click();
  } else if (e.key === "*" && displayScreen.textContent != "") {
    operationButtons[3].click();
  }
});
