/* JMRX - JOSE MEJIA" */

// We select the id of the div where the results will be seen
let screen = document.getElementById("screen");

/* We convert the buttons into an array, taking the class of the buttons */
let buttons = Array.from(document.getElementsByClassName("button"));

/* we map the array data to add the click event,
with the switch we do the operations according to the case */
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        screen.innerText = "";
        break;
      case "←":
        if (screen.innerText) {
          screen.innerText = screen.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          screen.innerText = eval(screen.innerText);
        } catch (error) {
          console.error("Ha ocurrido un error:", error);
        }
        
        break;
      default:
        screen.innerText += e.target.innerText;
    }
  });
});
