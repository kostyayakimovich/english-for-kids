export default (wordElement, nameLiElement, namePElement) => {
  const nameLi = document.createElement("li");
  const nameLiElementWithoutSpaces = nameLiElement.split(" ").join("");
  nameLi.className = "itemStatisticHeader";
  const nameP = document.createElement("p");
  nameP.className = "textItemStatistic";
  nameLi.append(nameP);
  wordElement.append(nameLi);
  nameLi.setAttribute("id", nameLiElementWithoutSpaces);
  nameP.setAttribute("id", namePElement);
  nameP.textContent = nameLiElement;
  nameP.classList.add("headerP");
  const selectCategory = document.createElement("select");
  nameLi.append(selectCategory);
  selectCategory.setAttribute("size", "2");
  selectCategory.className = "selectCategory";
  const firstOption = document.createElement("option");
  firstOption.className = "option";
  firstOption.setAttribute("value", `${nameLiElementWithoutSpaces}firstOptions`);
  firstOption.textContent = "high to low";
  selectCategory.append(firstOption);
  const secondOption = document.createElement("option");
  secondOption.className = "option";
  secondOption.setAttribute("value", `${nameLiElementWithoutSpaces}secondOptions`);
  secondOption.textContent = "low to high";
  selectCategory.append(secondOption);
};
