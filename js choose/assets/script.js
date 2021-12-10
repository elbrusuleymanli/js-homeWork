let content = document.querySelectorAll(".tab-table");
let tab = document.querySelector(".tab");
let info = document.querySelector(".info");
for (let i = 0; i < content.length; i++) {
  content[i].addEventListener("click", function () {
 
    if (tab !== null) {
      tab.style.backgroundColor = "#21c0c0";
      tab.style.opacity = "1";

      tab.classList.add("active");
      info.classList.add("d-block");
    } else {
      tab.classList.remove("active");
      info.classList.add("d-none");
    }
  });
}
