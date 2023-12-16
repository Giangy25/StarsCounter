const starsBox = document.querySelector ("#attaccaStella");

//funzione per creare le stelle
function createStella (tagName, imgSrc, className) {
  const starsImg = document.createElement(tagName);
  starsImg.src = imgSrc;
  starsImg.classList.add(className);
  return starsImg;
}

//stella 1
const starsImg = createStella ("img", "assets/img/falling-stars1.png" ,"stella")

//stella 2
const starsImg2 = createStella ("img", "assets/img/falling-stars2.png", "stella2");

//appendi le stelle
starsBox.appendChild(starsImg);
starsBox.appendChild(starsImg2)


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
        translateX: -470,
        translateY: 260,
        duration: 480,
        easing: 'linear'
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
        translateX: -560,
        translateY: 600,
        duration: 600, 
        loop: 3,
        easing: 'linear'
      })
    buttonInc.onclick = animation.play;
  }
}


//funzione per muovere la stella al contrario
buttonDec.onclick = function () {
  starsImg2.style.visibility = "visible";
  starsImg2.style.transform = "rotate(80deg)";

  const mediaQuery = window.matchMedia('(max-width: 767px)');
  if (mediaQuery.matches) {
    
    //animazione per mobile inversa
    starsImg2.style.transform = "rotate(95deg)";
    var animation = anime.timeline({
      autoplay: true,
    })

    animation
      .add({
        targets: '.stella2',
        opacity: 2,
        translateX: -1200,
        translateY: 900,
        duration: 580,
        loop: 3,
        easing: 'linear'
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
        duration: 580,
        easing: 'linear'
      })
    buttonDec.onclick = animation.play;

  }
}