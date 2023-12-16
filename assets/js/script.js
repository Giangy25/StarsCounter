//struttura per il count
const countBox = document.querySelector("#count");
const btnBox = document.querySelector("#btnBox");

//creazione dei button
function create (tagName, className, innerHTML) {
  const element = document.createElement(tagName);
  element.classList.add(className);
  element.innerHTML = innerHTML;
  return element;
}

//creato per testo
const resultTxt = create ("div", "resultTxt", "0");

//creato bottoni
const buttonDec = create("button", "button", "-");
const buttonRes = create ("button", "buttonR", "Reset");
const buttonInc = create ("button", "button", "+");

//appendi i button
countBox.append(resultTxt);
btnBox.append(buttonDec, buttonRes, buttonInc);

//funzioni incremento, decremento e reset
let countTxt = 0;

btnBox.addEventListener("click", buttonclick);

function buttonclick(event){
  const target = event.target;

  if(target.classList.contains("button")) {
    if(target.innerHTML === "+"){
      countTxt++; //incremento
    } else if(target.innerHTML === "-"){
      if(countTxt <= 0){
        countTxt--; //decremento
      }
    }
    resultTxt.innerHTML = countTxt;
  } else if (target.classList.contains("buttonR")) {
    countTxt = 0; //reset
    resultTxt.innerHTML = countTxt;
  }
}

