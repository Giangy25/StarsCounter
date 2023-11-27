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


//stella 1
let starsImg = new Image();
starsImg.src = "asset/img/falling-stars1.png";
document.getElementById("attaccaStella").appendChild(starsImg);
starsImg.classList.add("stella");

//funzione per far muovere la stella 1
buttonInc.onclick = function () {
  starsImg.style.visibility = "visible";
  starsImg.style.transform = "rotate(260deg)";

  //serve per sistemare il layout mobile
  const mediaQuery = window.matchMedia('(max-width: 767px)')
  if (mediaQuery.matches) {

    //animazione per mobile
    starsImg.style.transform = "rotate(270deg)";
    var animation = anime.timeline({
      autoplay: true,
    });

    animation
      .add({
        targets: '.stella ',
        translateX: -370,
        translateY: 260,
        duration: 280,
        easing: 'easeInOutSine'
      })
    buttonInc.onclick = animation.play;
  } else {

    //animazione base
    var animation = anime.timeline({
      autoplay: true,
    });

    animation
      .add({
        targets: '.stella ',
        translateX: -650,
        translateY: 600,
        duration: 380,
        easing: 'easeInOutSine'
      })
    buttonInc.onclick = animation.play;
  }
}

//stella 2
let starsImg2 = new Image();
starsImg2.src = "asset/img/falling-stars2.png";
document.getElementById("attaccaStella").appendChild(starsImg2);
starsImg2.classList.add("stella2");


//funzione per muovere la stella al contrario
buttonDec.onclick = function () {
  starsImg2.style.visibility = "visible";
  starsImg2.style.transform = "rotate(80deg)";

  const mediaQuery = window.matchMedia('(max-width: 767px)');
  if (mediaQuery.matches) {
    
    //animazione per mobile inversa
    starsImg2.style.transform = "rotate(85deg)";
    var animation = anime.timeline({
      autoplay: true,
    })

    animation
      .add({
        targets: '.stella2',
        opacity: 2,
        translateX: -1700,
        translateY: 900,
        duration: 450,
        easing: 'easeInOutSine'
      })
    buttonDec.onclick = animation.play;
  } else {

    //animazione stella inversa
    var animation = anime.timeline({
      autoplay: true,
    })

    animation
      .add({
        targets: '.stella2',
        opacity: 2,
        translateX: -650,
        translateY: 600,
        duration: 380,
        easing: 'easeInOutSine'
      })
    buttonDec.onclick = animation.play;

  }
}