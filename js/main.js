const toggle = document.querySelector(".header__toggle");
const nav = document.querySelector(".header__nav--left");
const form = document.querySelector(".newsletter__form");
const note = document.querySelector(".newsletter__note");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll(".header__link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (form && note) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    note.hidden = false;
  });
}
