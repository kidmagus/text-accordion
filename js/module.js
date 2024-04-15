
//Call all the accordion--modifier
const accordions = document.querySelectorAll(".accordion");

//For every accordion .. do this
accordions.forEach((accordion) => {
  //under accordion , call the class that has .box 
  const boxes= accordion.querySelectorAll('.box');
  const isSingleOpen = document.querySelectorAll('.single')

    if (boxes){
      boxes.forEach((box) => {
        box.addEventListener("click", () => {
          box.classList.toggle('active');

        });
      });
    } 


    if (isSingleOpen) {
      isSingleOpen.forEach((single) => {
        single.addEventListener("click", () => {
        
          if (single.classList.contains('active')){
              single.classList.remove('active');
          } else {
            document.querySelector(".single.active")?.classList.remove("active");
            single.classList.add("active");
          }
       
         
        })
      })
    }
  });


