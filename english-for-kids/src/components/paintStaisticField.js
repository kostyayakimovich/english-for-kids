
import createItemsForFieldStatistic from "./createItemsForFieldStatistic";

export default () => {
  const container = document.getElementById("container");
  const containerFieldStatistic = document.createElement("div");
  containerFieldStatistic.setAttribute("id", "containerFieldStatistic");
  container.append(containerFieldStatistic);
  containerFieldStatistic.className = "containerFieldStatistic";
  const arrayAllCards = JSON.parse(localStorage.getItem("arrayAllCards"));


  if (arrayAllCards) {
    arrayAllCards.forEach((item) => {
      if (item.countClickCorrectPlay > 0 || item.countErrorsPlay > 0) {
        // eslint-disable-next-line no-param-reassign
        item.countPercentErrors = Math.round((item.countErrorsPlay * 100)
          / (item.countErrorsPlay + item.countClickCorrectPlay));
      }
      createItemsForFieldStatistic(item.category, item.word, item.translation,
        item.countClickTrain, item.countClickCorrectPlay,
        item.countErrorsPlay, item.countPercentErrors);
    });
  }
};
