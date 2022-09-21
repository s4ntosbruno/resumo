// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();

//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });

function openMenu() {
  const nav = document.getElementById("nav");
  nav.className = nav.className === "closed" ? "open" : "closed";
}

const keys = {
  pt: {
    nav: {
      about: "sobre",
      xp: "experiencias",
    },
    about: "Desenvolvedor Full Stack",
  },
  en: {
    nav: {
      about: "about",
      xp: "experiences",
    },
    about: "Full Stack Developer",
  },
};

// const languages = ["en", "pt"];
// let currentLanguage = languages[0];

function translate(language) {
  document.getElementById("about").innerHTML = keys[language].nav.about;
}

window.onload = onInit();

function onInit() {
  translate("en");
}
