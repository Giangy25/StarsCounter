//struttura per il count
const resultTxt = document.createElement('div');
resultTxt.textContent = 0;
document.getElementById("Count").appendChild(resultTxt);
resultTxt.classList.add("resultTxt");
resultTxt.setAttribute("name", "result");

//creazione dei button
const buttonDec = document.createElement('button');
buttonDec.textContent = '-';
document.getElementById("buttonCnt").appendChild(buttonDec);
buttonDec.classList.add("button");

const buttonRes = document.createElement('button');
buttonRes.textContent = 'Reset';
document.getElementById("buttonCnt").appendChild(buttonRes);
buttonRes.classList.add("button");

const buttonInc = document.createElement('button');
buttonInc.textContent = '+';
document.getElementById("buttonCnt").appendChild(buttonInc);
buttonInc.classList.add("button");


//funzioni incremento, decremento e reset
let count = 0;

buttonInc.addEventListener("click", () => {
  count++;
  resultTxt.innerHTML = count;
});

buttonDec.addEventListener("click", () => {
  count--;
  resultTxt.innerHTML = count;
});

buttonRes.addEventListener("click", () => {
  count = 0;
  resultTxt.innerHTML = count;
})

