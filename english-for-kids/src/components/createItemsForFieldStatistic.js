export default (category, wordNative, wordTranslation,
  clickTrain, correctPlay, errorsPlay, percentErrors) => {
  const containerFieldStatistic = document.getElementById("containerFieldStatistic");
  const elementParentWord = document.createElement("ul");
  elementParentWord.className = "fieldStatistic";
  const arrayTextForP = [category, wordNative, wordTranslation, clickTrain,
    correctPlay, errorsPlay, percentErrors];
  arrayTextForP.forEach((item) => {
    const nameLi = document.createElement("li");
    nameLi.className = "itemStatistic";
    const nameP = document.createElement("p");
    nameP.textContent = item;
    nameP.className = "textItemStatistic";
    nameLi.append(nameP);
    elementParentWord.append(nameLi);
  });
  containerFieldStatistic.append(elementParentWord);
};
