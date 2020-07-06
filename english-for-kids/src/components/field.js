export const paintField = () => {
  const body = document.getElementsByTagName("body");
  const wrap = document.createElement("div");
  wrap.className = "wrap";
  const container = document.createElement("main");
  body[0].append(wrap);
  wrap.append(container);
  container.className = "container";
  container.setAttribute("id", "container");
};
export const paintCard = (img, description, paintButton) => {
  const card = document.createElement("div");
  card.className = "card";
  const container = document.getElementById("container");
  container.append(card);
  const imgCard = new Image();
  imgCard.className = "img_card";
  imgCard.src = img;
  imgCard.setAttribute("alt", description);
  card.append(imgCard);
  const descriptionCard = document.createElement("div");
  descriptionCard.className = "descriptionCard";
  const textCard = document.createElement("p");
  textCard.className = "textCard";
  textCard.innerText = description;
  descriptionCard.append(textCard);
  if (paintButton) {
    const flipButton = document.createElement("button");
    flipButton.className = "flipButton";
    flipButton.textContent = "flip";
    flipButton.setAttribute("value", `${description}`);
    card.append(flipButton);
  }
  card.append(descriptionCard);
};
