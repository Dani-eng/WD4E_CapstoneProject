const ORIGINAL_TEXT =
  "Hover over or focus on an image below to display it here.";

function upDate(previewPic) {
  const display = document.getElementById("image");
  if (!display || !previewPic) return;

  display.style.backgroundImage = `url("${previewPic.src}")`;
  display.textContent = previewPic.alt;
}

function unDo() {
  const display = document.getElementById("image");
  if (!display) return;

  display.style.backgroundImage = "";
  display.textContent = ORIGINAL_TEXT;
}

document.addEventListener("DOMContentLoaded", () => {
  const lightboxElement = document.getElementById("lightbox");
  const triggers = Array.from(document.querySelectorAll(".lightbox-trigger"));

  // The Home page and Location 1 do not contain a lightbox.
  if (!lightboxElement || triggers.length === 0 || !window.bootstrap) return;

  const lightbox = new bootstrap.Modal(lightboxElement);
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxCaption = document.getElementById("lightbox-caption");
  let currentIndex = 0;

  function showImage(index) {
    currentIndex = (index + triggers.length) % triggers.length;

    const trigger = triggers[currentIndex];
    const thumbnail = trigger.querySelector("img");

    lightboxImage.src = thumbnail.src;
    lightboxImage.alt = thumbnail.alt;
    lightboxCaption.textContent = trigger.dataset.caption;
  }

  triggers.forEach((trigger, index) => {
    trigger.addEventListener("click", () => {
      showImage(index);
      lightbox.show();
    });
  });

  document.getElementById("previous-image").addEventListener("click", () => {
    showImage(currentIndex - 1);
  });

  document.getElementById("next-image").addEventListener("click", () => {
    showImage(currentIndex + 1);
  });

  lightboxElement.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") showImage(currentIndex - 1);
    if (event.key === "ArrowRight") showImage(currentIndex + 1);
  });
});
