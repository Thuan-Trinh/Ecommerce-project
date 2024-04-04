const bindQuantityEvents = (productCard) => {
  const decreaseButton = productCard.querySelector(".add-to-cart .count .sub");
  const increaseButton = productCard.querySelector(".add-to-cart .count .plus");
  const quantityInput = productCard.querySelector(".add-to-cart .count .item-count");

  const productId = quantityInput.getAttribute("data-id");

  decreaseButton.onclick = () => decreasingNumber(productId);
  increaseButton.onclick = () => increasingNumber(productId);
};

const displayProducts = (productsInfo) => {
  const gridCardsContainer = document.getElementById("grid-item-cards");

  // Error handling: Check if container and product information are available
  if (!gridCardsContainer) {
    console.error("Grid cards container not found.");
    return;
  }

  let cataCards;
  try {
    cataCards = JSON.parse(localStorage.getItem(productsInfo));
  } catch (error) {
    console.error("Error parsing product information from local storage:", error);
    return;
  }

  if (!cataCards || !Array.isArray(cataCards)) {
    console.error("Invalid or missing product information in local storage.");
    return;
  }

  const cardTemplate = document.querySelector(".card");

  if (!cardTemplate) {
    console.error("Card template not found.");
    return;
  }

  gridCardsContainer.innerHTML = "";

  cataCards.forEach(({ id, image, name, price, arrival }) => {
    const cardClone = cardTemplate.cloneNode(true);
    cardClone.querySelector(".card-img").src = image;
    cardClone.querySelector(".card-name").textContent = name;
    cardClone.querySelector(".card-price").textContent = price;
    cardClone.querySelector(".tags").style.visibility = arrival === "New" ? "visible" : "hidden";

    // Change the ID attribute of the card for each product
    cardClone.setAttribute("data-id", id);
    cardClone.querySelector(".add-to-cart .count .item-count").setAttribute("data-id", id);

    // Retrieve and update quantity from localStorage
    const storedQuantity = getLocalStorageQuantity(id);
    if (storedQuantity !== null) {
      cardClone.querySelector(".add-to-cart .count .item-count").value = storedQuantity;
    }

    gridCardsContainer.appendChild(cardClone);
    bindQuantityEvents(cardClone);
  });

  cardTemplate.style.display = "none";
  console.log(cardTemplate) // Hide the original card template
};

const increasingNumber = (productId) => {
  const quantity = document.querySelector(`.add-to-cart .count .item-count[data-id="${productId}"]`);

  if (!quantity) {
    console.error("Không tìm thấy phần tử input số lượng.");
    return;
  }

  const currentQuantity = +quantity.value; // Chuyển đổi sang số
  const maxQuantity = +quantity.max;

  if (isNaN(currentQuantity) || isNaN(maxQuantity)) {
    console.error("Giá trị số lượng hoặc giá trị số lượng tối đa không hợp lệ.");
    return;
  }

  if (currentQuantity < maxQuantity) {
    quantity.value = currentQuantity + 1;
    updateLocalStorageQuantity(productId, quantity.value);
  } else {
    quantity.value = maxQuantity;
  }
};

const decreasingNumber = (productId) => {
  const quantity = document.querySelector(`.add-to-cart .count .item-count[data-id="${productId}"]`);

  if (!quantity) {
    console.error("Không tìm thấy phần tử input số lượng.");
    return;
  }

  const currentQuantity = +quantity.value; // Chuyển đổi sang số
  const minQuantity = +quantity.min;

  if (isNaN(currentQuantity) || isNaN(minQuantity)) {
    console.error("Giá trị số lượng hoặc giá trị số lượng tối thiểu không hợp lệ.");
    return;
  }

  if (currentQuantity > minQuantity) {
    quantity.value = currentQuantity - 1;
    updateLocalStorageQuantity(productId, quantity.value);
  } else {
    quantity.value = minQuantity;
  }
};

const updateLocalStorageQuantity = (productId, newQuantity) => {
  if (isNaN(newQuantity)) {
    console.error("Giá trị số lượng không hợp lệ.");
    return;
  }

  localStorage.setItem(`quantity_${productId}`, newQuantity);
};

const getLocalStorageQuantity = (productId) => {
  const storedQuantity = localStorage.getItem(`quantity_${productId}`);
  return storedQuantity !== null ? +storedQuantity : null;
};


//Khai báo mảng các card thông tin
const productsInfoKeys = [
  "novelCardInfor",
  "chairCardsInfor",
  "tableCardInfor",
  "sofasCardInfor",
  "bedCardInfor",
  "shelvesCardInfor",
  "officeCardInfor",
  "lampCardInfor",
];

//DOM các phần tử
const toggleElements = productsInfoKeys.map((key) =>
  document.querySelector(`.body-content .${key.split("Card")[0]}Products`)
);
const clickHandlers = productsInfoKeys.map((key) => () => displayProducts(key));
console.log(toggleElements);
//Duyệt mảng các phần tử
toggleElements[0].classList.add("side-bar-active");
toggleElements.forEach((element, index) => {
  element.addEventListener("click", () => {
    toggleElements.forEach((otherElement) =>
      otherElement.classList.remove("side-bar-active")
    );
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

// function filter mobile thay đổi sản phẩm

document.addEventListener("DOMContentLoaded", () => {
  const filterBtn = document.querySelector(
    ".grid-content .arrange-btns .left-side-arrange .ic-filter"
  );
  const filterTabs = document.querySelector(
    ".grid-content .arrange-btns .left-side-arrange .filter-tabs"
  );
  const productsCardInforKeys = [
    "novelCardInfor",
    "chairCardsInfor",
    "tableCardInfor",
    "sofasCardInfor",
    "bedCardInfor",
    "shelvesCardInfor",
    "officeCardInfor",
    "lampCardInfor",
  ];
  const filterTabsMobile = productsCardInforKeys.map((key) =>
    filterTabs.querySelector(`.${key.split("Card")[0]}Products`)
  );
  console.log(filterTabsMobile);
  const clickTabs = productsCardInforKeys.map(
    (key) => () => displayProducts(key)
  );

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
      filterTabsMobile.forEach((otherElement) =>
        otherElement.classList.remove("side-bar-active")
      );
      element.classList.add("side-bar-active");
      filterTabs.style.display = "none";
      clickTabs[index]();
    });
  });
  clickTabs[0]();
});

//check có thông tin log in hay không để hiện hình ảnh user
{
  const usersData = JSON.parse(localStorage.getItem("usersData"));
  console.log(usersData);

  if (usersData) {
    const personalPage = document.querySelector(".icons a");
    const iconPersonal = document.querySelector(".ic-personal");
    console.log(iconPersonal);
    console.log(personalPage);
    iconPersonal.src = "./assets/images/ic-user.png";
    personalPage.href = "#";
  }
}
//mobile button sign up
{
  const mobileSignUpBtn = document.querySelector("#side-menu button");
  console.log(mobileSignUpBtn);
  if (mobileSignUpBtn) {
    mobileSignUpBtn.onclick = () => {
      window.location.href = "../Tuan/login.html";
    };
  }
}



