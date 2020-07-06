/* eslint-disable no-param-reassign */
import { cards } from "./cards";
import {
  successA, errorA, correctA, failureA
} from "../assets/audio";
import {
  star, fail, success, failure
} from "../assets/img";
import redirect from "./redirect";

export default (category) => {
  let arrayAllCards = cards.flat();
  if (localStorage.getItem("arrayAllCards") === null) {
    arrayAllCards.forEach((item) => {
      item.countClickTrain = 0;
      item.countClickCorrectPlay = 0;
      item.countErrorsPlay = 0;
      item.countPercentErrors = 0;
    });
  } else if (localStorage.getItem("arrayAllCards") !== null) {
    arrayAllCards = JSON.parse(localStorage.getItem("arrayAllCards"));
  }
  const arraySearchCategory = arrayAllCards.filter((item) => (item.category === category));
  const header = document.getElementById("header");
  const switchCheckbox = document.getElementById("myonoffswitch");
  const cardCollection = document.getElementsByClassName("card");
  const container = document.getElementById("container");
  const body = document.getElementsByTagName("body");
  const startGame = document.createElement("div");
  const textLinkMenu = document.getElementsByClassName("textLinkMenu");
  startGame.className = "startGame";
  startGame.setAttribute("id", "startGame");
  const buttonStartGame = document.createElement("button");
  buttonStartGame.className = "buttonStartGame";
  buttonStartGame.setAttribute("id", "buttonStartGame");
  buttonStartGame.textContent = "start game";
  const score = document.createElement("div");
  score.className = "score";
  score.setAttribute("id", "score");
  const textScore = document.createElement("p");
  textScore.className = "textScore";
  textScore.setAttribute("id", "textScore");
  const starArea = document.createElement("div");
  starArea.className = "starArea";
  starArea.setAttribute("id", "starArea");
  score.append(textScore);
  header.after(startGame);
  startGame.append(buttonStartGame);
  startGame.append(score);
  startGame.append(starArea);
  switchCheckbox.addEventListener("change", () => {
    if (!switchCheckbox.checked) {
      startGame.style.display = "flex";
      body[0].style.boxShadow = "0 0 4em 4em  rgb(252, 248, 215) inset";
      for (let i = 0; i < cardCollection.length; i += 1) {
        const item = cardCollection[i];
        item.classList.add("activeCard");
        item.lastChild.style.display = "none";
        item.firstChild.nextSibling.style.display = "none";
      }
    } else {
      startGame.style.display = "none";
      body[0].style.boxShadow = "0 0 4em 4em  rgb(242, 250, 242) inset";
      for (let i = 0; i < cardCollection.length; i += 1) {
        const item = cardCollection[i];
        item.classList.remove("activeCard");
        item.lastChild.style.display = "block";
        item.firstChild.nextSibling.style.display = "block";
      }
    }
  });
  function getRandom(max) {
    const data = [];
    return function randomNumber() {
      const number = Math.floor(Math.random() * Math.floor(max));
      if (data.length >= max) {
        return;
      }
      if (data.includes(number)) {
        // eslint-disable-next-line consistent-return
        return randomNumber();
      }
      data.push(number);
      // eslint-disable-next-line consistent-return
      return number;
    };
  }
  const boxRandom = [];
  function buildAudio(value) {
    const getRandomNumber = getRandom(arraySearchCategory.length);
    for (let i = 0; i < value; i += 1) {
      const result = getRandomNumber();
      boxRandom.push(result);
    }
    return boxRandom;
  }
  buildAudio(arraySearchCategory.length);
  buttonStartGame.addEventListener("click", () => {
    buttonStartGame.textContent = "Repeat";
    buttonStartGame.style.background = "linear-gradient(rgb(240, 225, 96), rgb(243, 223, 48)) rgb(245, 221, 4)";
    let audio = new Audio(arraySearchCategory[boxRandom[boxRandom.length - 1]].audioSrc);
    audio.play();
    const audioError = new Audio(errorA);
    let countAreasymbols;
    container.addEventListener("click", (event) => {
      if (event.target.alt === arraySearchCategory[boxRandom[boxRandom.length - 1]].word) {
        boxRandom.pop();
        const audioCorrect = new Audio(correctA);
        audioCorrect.play();
        event.target.classList.add("correct");
        switchCheckbox.addEventListener("change", () => {
          if (switchCheckbox.checked) {
            for (let i = 0; i < textLinkMenu.length; i += 1) {
              if (textLinkMenu[i].textContent === category) {
                window.location.href = textLinkMenu[i].href;
              }
            }
          }
        });
        event.target.parentNode.style.cursor = "none";
        event.target.parentNode.value = "win";
        event.target.value = "win";
        const starImg = document.createElement("img");
        starImg.className = "symbolStarArea";
        starImg.setAttribute("alt", "star");
        arrayAllCards.forEach((item) => {
          if (item.word === event.target.alt) {
            item.countClickCorrectPlay += 1;
          }
        });

        starImg.src = star;
        starArea.prepend(starImg);
        countAreasymbols = document.getElementsByClassName("symbolStarArea");
        if (boxRandom.length === 0 && countAreasymbols.length === 8) {
          const audioSuccess = new Audio(successA);
          audioSuccess.play();
          container.innerHTML = "";
          const successImg = document.createElement("img");
          successImg.className = "gameOver";
          successImg.src = success;
          container.append(successImg);
          textScore.textContent = "0 ошибок";
          setTimeout(redirect, 6000);
        } else if (boxRandom.length === 0 && countAreasymbols.length > 8) {
          const errorSmile = countAreasymbols.length - 8;
          textScore.textContent = `ошибки: ${errorSmile}`;
          const audioFailure = new Audio(failureA);
          audioFailure.play();
          container.innerHTML = "";
          const failureImg = document.createElement("img");
          failureImg.className = "gameOver";
          failureImg.src = failure;
          container.append(failureImg);
          setTimeout(redirect, 6000);
        } else {
          audio = new Audio(arraySearchCategory[boxRandom[boxRandom.length - 1]].audioSrc);
          setTimeout(audio.play(), 4000);
        }
      } else if (event.target.value === "win") {
        audioError.pause();
      } else if (event.target.classList.value === "img_card") {
        const failImg = document.createElement("img");
        failImg.className = "symbolStarArea";
        failImg.setAttribute("alt", "fail");
        failImg.src = fail;
        starArea.prepend(failImg);
        audioError.play();
        arrayAllCards.forEach((item) => {
          if (item.word === event.target.alt) {
            item.countErrorsPlay += 1;
          }
        });
      }

      localStorage.setItem("arrayAllCards", JSON.stringify(arrayAllCards));
    });
  });

  container.addEventListener("click", (event) => {
    if (switchCheckbox.checked) {
      arrayAllCards.forEach((item) => {
        if (item.word === event.target.alt) {
          item.countClickTrain += 1;
        }
      });
      localStorage.setItem("arrayAllCards", JSON.stringify(arrayAllCards));
    }
  });
};
