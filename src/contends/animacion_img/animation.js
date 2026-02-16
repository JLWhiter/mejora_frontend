document.addEventListener("DOMContentLoaded", () => {
  const handleClick = (e) => {
    const trigger = e.target.closest(".has-arrow");
    if (!trigger) return;

    e.preventDefault();

    const item = trigger.closest(".menu-item");

    const siblings = item.parentElement.querySelectorAll(".menu-item");
    siblings.forEach(el => {
      if (el !== item) el.classList.remove("open");
    });

    item.classList.toggle("open");
  };

  document.addEventListener("click", handleClick);
});
