let open = document.getElementById("menu");
let fixed = document.getElementById("fixed");
let close = document.getElementById("close");

open.onclick = () => {
  fixed.classList.add("active");
};

close.onclick = () => {
  fixed.classList.remove("active");
};
