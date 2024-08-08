const accordeons = document.querySelectorAll(".faq__accordeon");

accordeons.forEach((accordeon) => {
  const accordeonToggler = accordeon.querySelector(".faq__accordeon-toggler");
  accordeonToggler.addEventListener("click", () => {
    closeAccordeons(accordeon);
    accordeon.classList.toggle("active");
    const panel = accordeon.querySelector(".faq__accordeon-panel");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 240 + "px";
    }
  });
});

function closeAccordeons(targetAccordeon) {
  const accordeons = document.querySelectorAll(".faq__accordeon");
  accordeons.forEach((accordeon) => {
    if (accordeon !== targetAccordeon) {
      const panel = accordeon.querySelector(".faq__accordeon-panel");
      accordeon.classList.remove("active");
      panel.style.maxHeight = null;
    }
  });
}