// Start Image Toggle Plus Or Minus
document.addEventListener("DOMContentLoaded", () => {
  const toggleImage = document.querySelectorAll(".toggle-img"),
    container = document.querySelector(".container");

  toggleImage.forEach((item) => {
    item.addEventListener("click", () => {
      const attributeSrc = item.getAttribute("src"),
        plusAttribute = "./assets/images/icon-plus.svg",
        minusAttribute = "./assets/images/icon-minus.svg",
        textToggle = item.parentElement.nextElementSibling;
      if (attributeSrc === plusAttribute) {
        item.setAttribute("src", minusAttribute);
        textToggle.style.display = "block";
        if (window.matchMedia("(max-width:767px").matches) {
          container.style.height = "31rem";
        } else {
          container.style.height = "30rem";
        }
      } else {
        item.setAttribute("src", plusAttribute);
        textToggle.style.display = "none";
        if (window.matchMedia("(max-width:767px").matches) {
          container.style.height = "25rem";
        } else {
          container.style.height = "25rem";
        }
      }
    });
  });
});
