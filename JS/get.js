let bars = document.querySelector(".bars");
let links = document.querySelector(".links");
let allLinks = document.querySelectorAll(".link");

bars.onclick = function () {
  bars.children[0].classList.toggle("f1");
  bars.children[1].classList.toggle("s2");
  bars.children[2].classList.toggle("th3");
  links.classList.toggle("open");
};

allLinks.forEach((ele) => {
  ele.onclick = () => {
  ele.parentElement.classList.remove("open")
  bars.children[0].classList.remove("f1");
  bars.children[1].classList.remove("s2");
  bars.children[2].classList.remove("th3");
  }
});

// link.onclick = () => {
//     links.classList.remove("open");
// };
