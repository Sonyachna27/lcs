document.addEventListener("DOMContentLoaded", () =>{
	toggleMenu();
	openTabs();
});
const toggleMenu = () =>{
	const htmlElement = document.querySelector("html");
	const burgerMenu = document.querySelector(".burger");
  const navLinks = document.querySelectorAll("nav a");
  burgerMenu.addEventListener("click", () =>
    htmlElement.classList.toggle("open")
  );

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      htmlElement.classList.remove("open");
    });
  });
}

const accordionFunction = () => {
  const accordionItems = document.querySelectorAll(".accord-item");
  
  accordionItems.forEach((item) => {
    item.addEventListener("click", function () {
        item.classList.toggle("active");
    });
  });
};

const openTabs = () => {
  const tabGroups = document.querySelectorAll(".target__wrap"); 

  tabGroups.forEach((group) => {
    const tabsLinks = group.querySelectorAll(".target__list-item");
    const allContentBlocks = group.querySelectorAll(".target__content");
    let frontBlockId = tabsLinks[0].dataset.name; 

    function addTabsActive() {
      tabsLinks.forEach((button, index) => {
        button.addEventListener("click", () => {
          tabsLinks.forEach((otherButton) => {
            otherButton.classList.remove("active");
          });
          button.classList.add("active");
          showContent(button.dataset.name, index);
        });
      });
    }

    function updateActiveTab(index) {
      tabsLinks.forEach((button, i) => {
        if (i === index) {
          button.classList.add("active");
        } else {
          button.classList.remove("active");
        }
      });
    }

    function changeSlide(blockId) {
      allContentBlocks.forEach((block) => {
        if (block.getAttribute("id") === blockId) {
          block.style.display = "flex";
          block.style.opacity = 1;
        } else {
          block.style.opacity = 0;
          block.style.display = "none";
        }
      });
      frontBlockId = blockId;
    }

    function showContent(itemName, index) {
      changeSlide(itemName);
      updateActiveTab(index);
    }

    addTabsActive();
    showContent(frontBlockId, 0); 
  });
};