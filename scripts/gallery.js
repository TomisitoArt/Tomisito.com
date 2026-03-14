const thumbnails = document.querySelectorAll("#gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

thumbnails.forEach(img => {
  img.addEventListener("click", () => {

    let fullImage = img.src
      .replace("thumbnails", "full")
      .replace("_thumbnail", "");

    lightboxImg.src = fullImage;

    lightbox.style.display = "flex";
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
  lightboxImg.src = "";
});
