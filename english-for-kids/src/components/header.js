import {
  burger, action1, action2, animals1, animals2, emotions, clothes, professions, games, home
} from "../assets/img";
import { cards } from "./cards";

export default () => {
  const body = document.getElementsByTagName("body");
  const wrap = document.createElement("div");
  wrap.className = "wrap";
  const header = document.createElement("header");
  body[0].append(wrap);
  wrap.append(header);
  header.className = "header";
  header.setAttribute("id", "header");
  const returnHomeIcon = document.createElement("div");
  returnHomeIcon.className = "returnHomeIcon";
  const homeIconImg = document.createElement("img");
  homeIconImg.className = "homeIconImg";
  homeIconImg.setAttribute("alt", "Home");
  homeIconImg.src = home;
  const textHomeIcon = document.createElement("h1");
  textHomeIcon.className = "textHomeIcon";
  textHomeIcon.textContent = "Home";
  returnHomeIcon.append(homeIconImg);
  returnHomeIcon.append(textHomeIcon);
  header.append(returnHomeIcon);
  returnHomeIcon.addEventListener("click", ({ target }) => {
    if (target.alt === "Home" || target.textContent === "Home") window.location.href = "home.html";
  });
  const onoffSwitch = document.createElement("div");
  onoffSwitch.className = "onoffswitch";
  onoffSwitch.setAttribute("id", "onoffSwitch");
  const onoffswitchCheckbox = document.createElement("input");
  onoffswitchCheckbox.className = "onoffswitch-checkbox";
  onoffswitchCheckbox.setAttribute("type", "checkbox");
  onoffswitchCheckbox.setAttribute("id", "myonoffswitch");
  onoffswitchCheckbox.setAttribute("checked", "");
  onoffSwitch.append(onoffswitchCheckbox);
  const onoffSwitchLabel = document.createElement("label");
  onoffSwitchLabel.className = "onoffswitch-label";
  onoffSwitchLabel.setAttribute("for", "myonoffswitch");
  const onoffSwitchInner = document.createElement("span");
  onoffSwitchInner.className = "onoffswitch-inner";
  const onoffSwitchSwitch = document.createElement("span");
  onoffSwitchSwitch.className = "onoffswitch-switch";
  onoffSwitchLabel.append(onoffSwitchInner);
  onoffSwitchLabel.append(onoffSwitchSwitch);
  onoffSwitch.append(onoffSwitchLabel);
  header.append(onoffSwitch);
};
export const sideMenu = () => {
  const massiveLinksMenu = [];
  cards.forEach((item) => {
    massiveLinksMenu.push(item[0].category);
  });
  massiveLinksMenu.push("Statistic");
  const leftMenu = document.createElement("div");
  leftMenu.className = "left_menu";
  leftMenu.setAttribute("id", "leftMenu");
  const body = document.getElementsByTagName("body");
  body[0].append(leftMenu);
  const burgerIcon = document.createElement("div");
  burgerIcon.className = "burger";
  const imgBurger = new Image();
  imgBurger.className = "imgBurger";
  imgBurger.src = burger;
  burgerIcon.append(imgBurger);
  body[0].append(burgerIcon);
  const navLeftMenu = document.createElement("nav");
  navLeftMenu.className = "navLeftMenu";
  navLeftMenu.setAttribute("id", "massiveLinksMenu");
  leftMenu.append(navLeftMenu);
  const navigation = document.createElement("ul");
  navigation.className = "navigation";
  navigation.setAttribute("id", "navigation");
  navLeftMenu.append(navigation);
  massiveLinksMenu.forEach((item) => {
    const linkMenu = document.createElement("li");
    linkMenu.className = "linkMenu";
    navigation.append(linkMenu);
    const imgLink = new Image();
    const textLinkMenu = document.createElement("a");
    imgLink.className = "img_link";
    if (item === "Action (set A)") {
      imgLink.src = action1;
      textLinkMenu.setAttribute("href", "actionA.html");
    }
    if (item === "Action (set B)") {
      imgLink.src = action2;
      textLinkMenu.setAttribute("href", "actionB.html");
    }
    if (item === "Animal (set A)") {
      imgLink.src = animals1;
      textLinkMenu.setAttribute("href", "animalA.html");
    }
    if (item === "Animal (set B)") {
      imgLink.src = animals2;
      textLinkMenu.setAttribute("href", "animalB.html");
    }
    if (item === "Clothes") {
      imgLink.src = clothes;
      textLinkMenu.setAttribute("href", "clothes.html");
    }
    if (item === "Emotions") {
      imgLink.src = emotions;
      textLinkMenu.setAttribute("href", "emotions.html");
    }
    if (item === "Professions") {
      imgLink.src = professions;
      textLinkMenu.setAttribute("href", "professions.html");
    }
    if (item === "Sport") {
      imgLink.src = games;
      textLinkMenu.setAttribute("href", "sport.html");
    }
    if (item === "Statistic") {
      textLinkMenu.setAttribute("href", "statistic.html");
    }
    linkMenu.append(imgLink);
    textLinkMenu.className = "textLinkMenu";
    textLinkMenu.textContent = `${item}`;
    linkMenu.append(textLinkMenu);
  });
  const onoffSwitch = document.getElementById("onoffSwitch");
  let countBurger = 90;
  imgBurger.addEventListener("click", ({ target }) => {
    const goal = target;
    goal.style.transform = `rotate(${countBurger}deg)`;
    if (countBurger > 180) (countBurger = 0);
    else (countBurger += 90);
    if (countBurger === 0 || countBurger === 180) {
      onoffSwitch.style.display = "none";
      leftMenu.style.transition = "transform 1s linear 0s, left 0.5s linear 0s";
      leftMenu.style.left = "0";
      burgerIcon.style.position = "fixed";
    } else {
      leftMenu.style.left = "-275px";
      onoffSwitch.style.display = "block";
      burgerIcon.style.position = "absolute";
    }
  });
  const header = document.getElementById("header");
  header.addEventListener("click", () => {
    if (onoffSwitch.style.display === "none") {
      imgBurger.click();
    }
  });
  const container = document.getElementById("container");
  container.addEventListener("click", () => {
    if (onoffSwitch.style.display === "none") {
      imgBurger.click();
    }
  });
  navigation.addEventListener("click", () => {
    if (onoffSwitch.style.display === "none") {
      imgBurger.click();
    }
  });
};
export const headerCheckbox = () => {
  const switchCheckbox = document.getElementById("myonoffswitch");
  const body = document.getElementsByTagName("body");
  const cardCollection = document.getElementsByClassName("card");

  switchCheckbox.addEventListener("change", () => {
    if (!switchCheckbox.checked) {
      body[0].style.boxShadow = "0 0 4em 4em  rgb(252, 248, 215) inset";
      for (let i = 0; i < cardCollection.length; i += 1) {
        cardCollection[i].classList.add("activeCard");
      }
    } else {
      body[0].style.boxShadow = "0 0 4em 4em  rgb(242, 250, 242) inset";
      for (let i = 0; i < cardCollection.length; i += 1) {
        cardCollection[i].classList.remove("activeCard");
      }
    }
  });
};
