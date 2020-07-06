import { cards } from "./cards";
import { paintCard } from "./field";

export default () => {
  // eslint-disable-next-line no-undef
  container.addEventListener("click", (event) => {
    if (event.target.alt === "Action (set A)") window.location.href = "actionA.html";
    if (event.target.alt === "Action (set B)") window.location.href = "actionB.html";
    if (event.target.alt === "Animal (set A)") window.location.href = "animalA.html";
    if (event.target.alt === "Animal (set B)") window.location.href = "animalB.html";
    if (event.target.alt === "Clothes") window.location.href = "clothes.html";
    if (event.target.alt === "Emotions") window.location.href = "emotions.html";
    if (event.target.alt === "Professions") window.location.href = "professions.html";
    if (event.target.alt === "Sport") window.location.href = "sport.html";
    if (event.target.alt === "Home") window.location.href = "home.html";
  });
  cards.forEach((item) => {
    const randomIndex = Math.floor(Math.random() * item.length);
    paintCard(item[randomIndex].image, item[randomIndex].category, false);
  });
};
