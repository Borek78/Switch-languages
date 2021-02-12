const switchLanguage = function () {
  //Tlacitka
  const czech = document.querySelector(".czech");
  const english = document.querySelector(".english");

  czech.addEventListener("click", function () {
    console.log(czech);
    english.classList.remove("active");
    czech.classList.remove("active");
    czech.classList.add("active");
  });

  english.addEventListener("click", function () {
    console.log(czech);
    czech.classList.remove("active");
    english.classList.remove("active");
    english.classList.add("active");
  });
};

switchLanguage();
