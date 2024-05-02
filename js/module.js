// //Call all the box--modifier
// const boxes = document.querySelectorAll(".box");

// //For every box .. do this
// boxes.forEach((box) => {
//   //call the class that has .box__info
//   const boxInfo = box.querySelector(".box__info");
//   const isSingleOpen = document.querySelectorAll(".single");

//   if (boxInfo) {
//     boxInfo.addEventListener("click", () => {
//       box.classList.toggle("active");
//     });
//   }

//   if (isSingleOpen) {
//     isSingleOpen.forEach((single) => {
//       single.addEventListener("click", () => {
//         if (single.classList.contains("active")) {
//           single.classList.remove("active");
//         } else {
//           document.querySelector(".single.active")?.classList.remove("active");
//           single.classList.add("active");
//         }
//       });
//     });
//   }
// });

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  const boxes = accordion.querySelectorAll(".box");
  const singleOpen = accordion.classList.contains("accordion--single");

  boxes.forEach((box) => {
    const boxInfo = box.querySelector(".box__info");
    if (singleOpen) {
      boxInfo.addEventListener("click", () => {
        if (box.classList.contains("active")) {
          box.classList.remove("active");
        } else {
          accordion.querySelector(".box.active")?.classList.remove("active");
          box.classList.add("active");
        }
      });
    } else {
      boxInfo.addEventListener("click", () => {
        box.classList.toggle("active");
      });
    }
  });
});
