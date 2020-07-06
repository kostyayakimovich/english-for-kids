export default (category) => {
  const textLinkMenu = document.getElementsByClassName("textLinkMenu");
  for (let i = 0; i < textLinkMenu.length; i += 1) {
    if (textLinkMenu[i].textContent === category) {
      textLinkMenu[i].style.color = "#ffffff";
    }
  }
};
