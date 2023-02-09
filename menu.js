const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item")).forEach(
  (item, index) => {
    item.mouseover = () => {
      menu.dataset.activeIndex = index;
    };
  }
);
