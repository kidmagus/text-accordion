//Call all the box--modifier
const boxes = document.querySelectorAll(".box");

//For every box .. do this
boxes.forEach((box) => {
  //call the class that has .box__info
  const boxInfo = box.querySelector(".box__info");
  const isSingleOpen = document.querySelectorAll(".single");

  if (boxInfo) {
    boxInfo.addEventListener("click", () => {
      box.classList.toggle("active");
    });
  }

  if (isSingleOpen) {
    isSingleOpen.forEach((single) => {
      single.addEventListener("click", () => {
        if (single.classList.contains("active")) {
          single.classList.remove("active");
        } else {
          document.querySelector(".single.active")?.classList.remove("active");
          single.classList.add("active");
        }
      });
    });
  }
});
