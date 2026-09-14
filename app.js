const filterButtons = document.querySelectorAll(".filter-button");
const timelineItems = document.querySelectorAll(".timeline-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.toggle("active", item === button));

    timelineItems.forEach((item) => {
      if (selected === "all" || item.dataset.category.split(" ").includes(selected)) {
        item.style.display = "grid";
        item.animate(
          [
            { opacity: 0.2, transform: "translateY(8px)" },
            { opacity: 1, transform: "translateY(0)" }
          ],
          { duration: 280, easing: "ease-out" }
        );
      } else {
        item.style.display = "none";
      }
    });
  });
});

const header = document.querySelector(".hero");
window.addEventListener("mousemove", (event) => {
  if (!header) return;
  const x = (event.clientX / window.innerWidth - 0.5) * 12;
  const y = (event.clientY / window.innerHeight - 0.5) * -12;
  header.style.background = `radial-gradient(circle at ${50 + x}% ${30 + y}%, rgba(207,120,90,0.045), transparent 23%)`;
});
