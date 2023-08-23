const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats en boutique et en ligne",
  },
  {
    image: "slide2.jpg",
    tagLine: "Tirages haute définition grand format pour vos bureaux et events",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs de CMJN aux pantones",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants avec découpe laser sur mesure",
  },
];

let dot_slider = document.getElementsByClassName("dot_slider");
let suivant = document.querySelector(".suivant");
let precedent = document.querySelector(".precedent");
let numero = 0;
let nombreImages = slides.length;
let nombreDots = dot_slider.length;
function enleverActiveImages() {
  for (let i = 0; i < nombreDots; i++) {
    dot_slider[i].classList.remove("dot_selected");
  }
}
const bannerPara = document.getElementById("texte");

console.log(slides[numero]["image"]);
function ChangeSlides(sens) {
  numero = numero + sens;
  enleverActiveImages();
  if (numero >= nombreImages) {
    numero = 0;
  } else if (numero < 0) {
    numero = nombreImages - 1;
  }
  document.getElementById("slide").src =
    "./assets/images/slideshow/" + slides[numero]["image"];
  // console.log(numero);
  const bannerPara = document.getElementById("texte");
  bannerPara.innerText = slides[numero]["tagLine"];
  console.log(slides[numero]["image"]);
}
let dot_active = document.getElementsByClassName("dot");
function ChangeDots(sens) {
  dot_active[numero].classList.add("dot_selected");
}

suivant.addEventListener("click", plus);
function plus() {
  ChangeSlides(+1);
  ChangeDots(+1);
}
precedent.addEventListener("click", moins);
function moins() {
  ChangeSlides(-1);
  ChangeDots(-1);
}
setInterval("ChangeSlides(1)", 3000);
setInterval("ChangeDots(1)", 3000);
// suivant.addEventListener("click", function () {
//   numero = numero + sens;
//   if (numero >= nombreImages) {
//     numero = 0;
//   } else if (numero < 0) {
//     numero = nombreImages - 1;
//   }
//   dot_active[numero].classList.add("dot_selected");
// });// let imgSlider = document.getElementsByClassName("imgSlider");
// console.log(imgSlider);
// console.log(nombreImages);
// // let precedent = document.querySelector(".precedent");

// suivant.addEventListener("click", function () {
//   numero++;
//   if (numero >= nombreImages) {
//     numero = 0;
//   }
//   enleverActiveImages();
//   imgSlider[numero].classList.add("active");
//   console.log(slides[numero]["image"]);
// });
// precedent.addEventListener("click", function () {
//   numero--;
//   if (numero < 0) {
//     numero = nombreImages - 1;
//   }
//   enleverActiveImages();
//   imgSlider[numero].classList.add("active");
//   console.log(slides[numero]["image"]);
// });
// const flecheGauche = document.querySelector(".arrow_left");
// console.log(flecheGauche);
// flecheGauche.addEventListener("click", () =>
//   console.log("Click sur la flèche de gauche !")
// );

// const flecheDroite = document.querySelector(".arrow_right");
// console.log(flecheDroite);
// flecheDroite.addEventListener("click", () =>
//   console.log("Click sur la flèche de droite !")
// );
