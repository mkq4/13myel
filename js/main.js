const initCarousel = (carousel) => {
  const track = carousel.querySelector(".carousel__track");
  const items = track.children;
  const buttons = carousel.querySelectorAll(".carousel__button");
  const dotsContainer = carousel.querySelector(".carousel__dots");
  let dots = [];

  const getStep = () => items[1].offsetLeft - items[0].offsetLeft;

  const renderDots = () => {
    const visible = Math.round(track.clientWidth / getStep());
    const count = Math.max(items.length - visible + 1, 1);

    dotsContainer.replaceChildren();
    dots = Array.from({ length: count }, () => {
      const dot = document.createElement("span");
      dot.className = "carousel__dot";
      dotsContainer.append(dot);
      return dot;
    });
  };

  const update = () => {
    const index = Math.round(track.scrollLeft / getStep());
    const maxScroll = track.scrollWidth - track.clientWidth;

    dots.forEach((dot, i) => dot.classList.toggle("carousel__dot--active", i === index));
    buttons[0].disabled = track.scrollLeft <= 0;
    buttons[1].disabled = track.scrollLeft >= maxScroll - 1;
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      track.scrollBy({ left: getStep() * Number(button.dataset.direction) });
    });
  });

  track.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", () => {
    renderDots();
    update();
  });

  renderDots();
  update();
};

document.querySelectorAll(".carousel").forEach(initCarousel);

const form = document.querySelector(".newsletter__form");
const note = document.querySelector(".newsletter__note");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.reset();
  note.hidden = false;
});
