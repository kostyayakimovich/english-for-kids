import createItemsForStatistic from "./createItemsForHeaderStatistic";

export default () => {
  const container = document.getElementById("container");
  const containerHeaderStatistic = document.createElement("div");
  containerHeaderStatistic.className = "containerHeaderStatistic";
  container.append(containerHeaderStatistic);
  const headerStatistic = document.createElement("ul");
  const arrayAllCards = JSON.parse(localStorage.getItem("arrayAllCards"));
  headerStatistic.className = "headerStatistic";
  containerHeaderStatistic.append(headerStatistic);
  headerStatistic.setAttribute("id", "headerStatistic");
  const arrayItemsForWords = [
    {
      li: "category word",
      p: "textCategoryWord"
    },
    {
      li: "word",
      p: "textWord"
    },
    {
      li: "translate word",
      p: "textTranslateWord"
    },
    {
      li: "click train",
      p: "textClickTrain"
    },
    {
      li: "correct play",
      p: "textClickCorrectPlay"
    },
    {
      li: "errors play",
      p: "textErrorsPlay"
    },
    {
      li: "percent errors",
      p: "textPercentErrors"
    }
  ];
  arrayItemsForWords.forEach((item) => {
    createItemsForStatistic(headerStatistic, item.li, item.p);
  });

  headerStatistic.addEventListener("click", (event) => {
    if (event.target.value === "categorywordfirstOptions") {
      arrayAllCards.sort((a, b) => (a.category > b.category ? -1 : 1));
    }
    if (event.target.value === "categorywordsecondOptions") {
      arrayAllCards.sort((a, b) => (a.category > b.category ? 1 : -1));
    }
    if (event.target.value === "wordfirstOptions") {
      arrayAllCards.sort((a, b) => (a.word > b.word ? -1 : 1));
    }
    if (event.target.value === "wordsecondOptions") {
      arrayAllCards.sort((a, b) => (a.word > b.word ? 1 : -1));
    }
    if (event.target.value === "translatewordfirstOptions") {
      arrayAllCards.sort((a, b) => (a.translation > b.translation ? -1 : 1));
    }
    if (event.target.value === "translatewordsecondOptions") {
      arrayAllCards.sort((a, b) => (a.translation > b.translation ? 1 : -1));
    }
    if (event.target.value === "clicktrainfirstOptions") {
      arrayAllCards.sort((a, b) => (a.countClickTrain > b.countClickTrain ? -1 : 1));
    }
    if (event.target.value === "clicktrainsecondOptions") {
      arrayAllCards.sort((a, b) => (a.countClickTrain > b.countClickTrain ? 1 : -1));
    }
    if (event.target.value === "correctplayfirstOptions") {
      arrayAllCards.sort((a, b) => (a.countClickCorrectPlay > b.countClickCorrectPlay ? -1 : 1));
    }
    if (event.target.value === "correctplaysecondOptions") {
      arrayAllCards.sort((a, b) => (a.countClickCorrectPlay > b.countClickCorrectPlay ? 1 : -1));
    }
    if (event.target.value === "errorsplayfirstOptions") {
      arrayAllCards.sort((a, b) => (a.countErrorsPlay > b.countErrorsPlay ? -1 : 1));
    }
    if (event.target.value === "errorsplaysecondOptions") {
      arrayAllCards.sort((a, b) => (a.countErrorsPlay > b.countErrorsPlay ? 1 : -1));
    }
    if (event.target.value === "percenterrorsfirstOptions") {
      arrayAllCards.sort((a, b) => (a.countPercentErrors > b.countPercentErrors ? -1 : 1));
    }
    if (event.target.value === "percenterrorssecondOptions") {
      arrayAllCards.sort((a, b) => (a.countPercentErrors > b.countPercentErrors ? 1 : -1));
    }
    localStorage.setItem("arrayAllCards", JSON.stringify(arrayAllCards));
    window.location.href = "./statistic.html";
  });
};
