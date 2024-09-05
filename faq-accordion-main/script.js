let boXes = document.querySelectorAll(".boxes");
boXes.forEach((e) => {
  let quesTion = e.querySelector(".question-box");

  quesTion.addEventListener("click", () => {
    console.log("done");
    for (let i = 0; boXes.length > i; i++) {
      if (boXes[i] != e) {
        boXes[i].classList.remove("active");
      } else {
        e.classList.toggle("active");
      }
    }
  });
});

