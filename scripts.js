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
