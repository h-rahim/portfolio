document.querySelectorAll("details").forEach((detail) => {
  const content = Array.from(detail.children).filter(el => el.tagName !== "SUMMARY");

  detail.addEventListener("toggle", () => {
    content.forEach(el => {
      if (detail.open) {
        el.classList.add("fade-in");
      } else {
        el.classList.remove("fade-in");
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox-overlay');
  const lightboxImage = lightbox.querySelector('img');

  document.querySelectorAll('.thumbnail-gallery img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt;
      lightbox.style.display = 'flex';
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden'; // prevent scrolling
      lightbox.focus();
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.src = '';
    lightboxImage.alt = '';
    document.body.style.overflow = '';
  });
});
