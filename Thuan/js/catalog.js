
  const displayProducts = (productsInfor) => {
  const gridCardsContainer = document.getElementById("grid-item-cards");
  const cataCards = JSON.parse(localStorage.getItem(productsInfor));

  if (gridCardsContainer && cataCards) {
    const cardTemplate = document.querySelector(".card");
    if (cardTemplate) {
      gridCardsContainer.innerHTML = "";

      cataCards.forEach(({ image, name, price, arrival }) => {
        const cardClone = cardTemplate.cloneNode(true);
        cardClone.querySelector(".card-img").src = image;
        cardClone.querySelector(".card-name").textContent = name;
        cardClone.querySelector(".card-price").textContent = price;
        cardClone.querySelector(".tags").style.visibility = arrival === "New" ? "visible" : "hidden";
        gridCardsContainer.appendChild(cardClone);
      });

      cardTemplate.style.display = "none";
    }
  }
};

//Khai báo mảng các card thông tin
const productsInfoKeys = [
  "novelCardInfor", "chairCardsInfor", "tableCardInfor", "sofasCardInfor",
  "bedCardInfor", "shelvesCardInfor", "officeCardInfor", "lampCardInfor"
];

//DOM các phần tử 
const toggleElements = productsInfoKeys.map((key) => document.querySelector(`.body-content .${key.split('Card')[0]}Products`));
const clickHandlers = productsInfoKeys.map((key) => () => displayProducts(key));
console.log(toggleElements);
//Duyệt mảng các phần tử
toggleElements[0].classList.add("side-bar-active");
toggleElements.forEach((element, index) => {
  element.addEventListener("click", () => {
    toggleElements.forEach((otherElement) => otherElement.classList.remove("side-bar-active"));
    element.classList.add("side-bar-active");
    clickHandlers[index]();
    localStorage.setItem("selectedElementIndex", index);
  });
});

// Khi trang được tải lại, kiểm tra xem có chỉ mục được lưu không
document.addEventListener("DOMContentLoaded", () => {
  const selectedElementIndex = localStorage.getItem("selectedElementIndex");
  if (selectedElementIndex !== null) {
    const selectedElement = toggleElements[selectedElementIndex];
    if (selectedElement) {
      selectedElement.focus(); // Tập trung vào phần tử đã chọn
    }
  }
});

clickHandlers[0]();



// function filter mobile


  document.addEventListener("DOMContentLoaded", () => {
    const filterBtn = document.querySelector(
      ".grid-content .arrange-btns .left-side-arrange .ic-filter"
    );
    const filterTabs = document.querySelector(
      ".grid-content .arrange-btns .left-side-arrange .filter-tabs"
    );
    const productsCardInforKeys = [
      "novelCardInfor", "chairCardsInfor", "tableCardInfor", "sofasCardInfor",
      "bedCardInfor", "shelvesCardInfor", "officeCardInfor", "lampCardInfor"
    ];
    const filterTabsMobile = productsCardInforKeys.map((key) => filterTabs.querySelector(`.${key.split('Card')[0]}Products`));
    console.log(filterTabsMobile);
    const clickTabs = productsCardInforKeys.map((key) => () => displayProducts(key));

    filterTabsMobile[0].classList.add("side-bar-active");

    console.log(filterBtn, filterTabs);
  
    if (filterBtn && filterTabs) {
      filterBtn.onclick = (event) => {
        event.stopPropagation(); // Ngăn chặn sự kiện click từ việc lan truyền lên các phần tử cha
        if (
          filterTabs.style.display === "none" ||
          filterTabs.style.display === ""
        ) {
          filterTabs.style.display = "flex";
        } else {
          filterTabs.style.display = "none";
        }
      };
  
      document.addEventListener("click", (event) => {
        // Kiểm tra xem phần tử được click có phải là filterTabs hay không
        const isClickedInsideFilterTabs = filterTabs.contains(event.target);
  
        if (!isClickedInsideFilterTabs) {
          filterTabs.style.display = "none";
        }
      });
    }
    filterTabsMobile.forEach((element, index) => {
      element.addEventListener("click", () => {
        filterTabsMobile.forEach((otherElement) => otherElement.classList.remove("side-bar-active"));
        element.classList.add("side-bar-active");
        filterTabs.style.display = "none";
        clickTabs[index]();
      });
    });
    clickTabs[0]();
  });






