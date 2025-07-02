let images = document.querySelectorAll(".carousel img");
let index = 0;

function showImage(i) {
  images.forEach((img) => img.classList.remove("active"));
  images[i].classList.add("active");
}

showImage(index);

document.querySelector(".btn-next").onclick = () => {
  index = (index + 1) % images.length;
  showImage(index);
};

document.querySelector(".btn-prev").onclick = () => {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
};
