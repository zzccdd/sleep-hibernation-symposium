const filterButtons = document.querySelectorAll(".filter-button");
const speakerCards = document.querySelectorAll(".speaker-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));

    speakerCards.forEach((card) => {
      const topics = card.dataset.topic.split(" ");
      card.classList.toggle("is-hidden", filter !== "all" && !topics.includes(filter));
    });
  });
});
