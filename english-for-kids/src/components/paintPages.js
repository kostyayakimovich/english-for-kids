/* eslint-disable no-loop-func */
/* eslint-disable no-use-before-define */
/* eslint-disable consistent-return */
import { cards } from "./cards";
import { paintCard } from "./field";

export default (categoryCards) => {
  let isFlip = true;
  let hasSound = true;
  const container = document.getElementById("container");
  const switchCheckbox = document.getElementById("myonoffswitch");
  container.innerHTML = "";
  const arrayAllCards = cards.flat();
  const arraySearchCategory = arrayAllCards.filter((item) => (item.category === categoryCards));
  arraySearchCategory.forEach(({ image, word }) => {
    paintCard(image, word, true);
  });
  function getRandom(max) {
    const data = [];
    return function randomNumber() {
      const number = Math.floor(Math.random() * Math.floor(max));
      if (data.length >= max) {
        return;
      }
      if (data.includes(number)) {
        return randomNumber();
      }
      data.push(number);
      return number;
    };
  }
  function buildCardsOrder(value) {
    const getRandomNumber = getRandom(arraySearchCategory.length);
    for (let i = 0; i < value; i += 1) {
      const result = getRandomNumber();
      boxRandom.push(result);
    }
    return boxRandom;
  }
  let boxRandom = [];
  switchCheckbox.addEventListener("change", () => {
    const collectionCards = document.getElementsByClassName("card");
    if (!switchCheckbox.checked) {
      boxRandom = [];
      buildCardsOrder(arraySearchCategory.length);
      for (let i = 0; i < collectionCards.length; i += 1) {
        collectionCards[i].setAttribute("style", `order: ${boxRandom[boxRandom.length - 1]}`);
        boxRandom.pop();
      }
      hasSound = false;
    } else {
      hasSound = true;
      for (let i = 0; i < collectionCards.length; i += 1) {
        collectionCards[i].setAttribute("style", `order: ${[i]}`);
      }
    }
  });
  container.addEventListener("click", ({ target }) => {
    arraySearchCategory.forEach((item) => {
      if (target.alt === item.word && hasSound) {
        const audio = new Audio(item.audioSrc);
        audio.play();
      }
    });
  });
  const flipButton = document.getElementsByClassName("flipButton");
  for (let i = 0; i < flipButton.length; i += 1) {
    flipButton[i].addEventListener("click", (event) => {
      arraySearchCategory.forEach((item) => {
        if (event.target.value === item.word) {
          const imgButton = flipButton[i].parentNode.firstChild;
          const descriptionButton = flipButton[i].parentNode.lastChild;
          if (isFlip) {
            isFlip = false;
            imgButton.classList.remove("flipStart");
            imgButton.classList.add("flip");
            flipButton[i].parentNode.setAttribute("id", "flip");
            descriptionButton.classList.add("translateText");
            descriptionButton.firstChild.textContent = item.translation;
            descriptionButton.firstChild.classList.add("translateWord");
          } else {
            isFlip = true;
            imgButton.classList.remove("flip");
            imgButton.classList.add("flipStart");
            descriptionButton.classList.remove("translateText");
            descriptionButton.firstChild.textContent = item.word;
            descriptionButton.firstChild.classList.remove("translateWord");
            flipButton[i].parentNode.removeAttribute("id", "flip");
          }
          const cardFlip = document.getElementById("flip");
          // eslint-disable-next-line no-shadow
          cardFlip.addEventListener("mouseout", ({ relatedTarget }) => {
            if (relatedTarget.id === "flip") {
              flipButton[i].parentNode.removeAttribute("id", "flip");
              isFlip = true;
              imgButton.classList.remove("flip");
              imgButton.classList.add("flipStart");
              descriptionButton.classList.remove("translateText");
              descriptionButton.firstChild.textContent = item.word;
              descriptionButton.firstChild.classList.remove("translateWord");
            }
          });
        }
      });
    });
  }
};
