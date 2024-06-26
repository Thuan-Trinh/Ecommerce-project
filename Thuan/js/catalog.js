const bindQuantityEvents = (productCard) => {
  const decreaseButton = productCard.querySelector(".add-to-cart .count .sub");
  const increaseButton = productCard.querySelector(".add-to-cart .count .plus");
  const quantityInput = productCard.querySelector(
    ".add-to-cart .count .item-count"
  );

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
    console.error(
      "Error parsing product information from local storage:",
      error
    );
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
    cardClone.querySelector(".tags").style.visibility =
      arrival === "New" ? "visible" : "hidden";

    // Change the ID attribute of the card for each product
    const cardCloneAddCartContainer = cardClone.querySelector(".add-to-cart");
    cardCloneAddCartContainer.setAttribute("data-id", id);
    const cardCloneCount = cardClone.querySelector(".add-to-cart .count");
    cardCloneCount.setAttribute("data-id", id);
    cardClone.setAttribute("data-id", id);
    const quantityInput = cardClone.querySelector(
      ".add-to-cart .count .item-count"
    );
    quantityInput.setAttribute("data-id", id);
    const buttonDataId = cardClone.querySelector(".add-to-cart .add-item");
    buttonDataId.setAttribute("data-id", id);

    // Retrieve and update quantity from localStorage
    const storedQuantity = getLocalStorageQuantity(id);
    if (storedQuantity !== null) {
      quantityInput.value = storedQuantity;
    } else {
      // Nếu không có số lượng được lưu trữ trong local storage, lưu số lượng ban đầu
      const initialQuantity = 0; // Số lượng ban đầu có thể được thiết lập là bất kỳ giá trị nào bạn muốn
      quantityInput.value = initialQuantity;
      updateLocalStorageQuantity(id, initialQuantity);
    }

    gridCardsContainer.appendChild(cardClone);
    bindQuantityEvents(cardClone);
  });

  cardTemplate.style.display = "none";
};

const increasingNumber = (productId) => {
  const quantity = document.querySelector(
    `.add-to-cart .count .item-count[data-id="${productId}"]`
  );

  if (!quantity) {
    console.error("Không tìm thấy phần tử input số lượng.");
    return;
  }

  const currentQuantity = +quantity.value; // Chuyển đổi sang số
  const maxQuantity = +quantity.max;

  if (isNaN(currentQuantity) || isNaN(maxQuantity)) {
    console.error(
      "Giá trị số lượng hoặc giá trị số lượng tối đa không hợp lệ."
    );
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
  const quantity = document.querySelector(
    `.add-to-cart .count .item-count[data-id="${productId}"]`
  );

  if (!quantity) {
    console.error("Không tìm thấy phần tử input số lượng.");
    return;
  }

  const currentQuantity = +quantity.value; // Chuyển đổi sang số
  const minQuantity = +quantity.min;

  if (isNaN(currentQuantity) || isNaN(minQuantity)) {
    console.error(
      "Giá trị số lượng hoặc giá trị số lượng tối thiểu không hợp lệ."
    );
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

//funtion add to cart
/*
function buttonAddItemEvent() {
  buttonAddItemList = document.querySelectorAll('.add-item');

  for (let element of buttonAddItemList) { //Check mỗi button add-item có trên page

    element.addEventListener('click', function () {
      //Đoạn code này trả về data-id ứng với button đó
      let addToCartFrame = this.parentElement;
      let countFrame = addToCartFrame.querySelector('.count');
      let inputCount = countFrame.querySelector('.item-count');

      let dataID = inputCount.getAttribute('data-id');
      let quantityToAdd = parseInt(inputCount.value);
      console.log(dataID + ' ' + quantityToAdd);

      // Kiểm tra nếu lượng thêm vào là lớn hơn 0
      if (quantityToAdd > 0) {
        console.log(dataID + ' ' + quantityToAdd);

        // Tìm kiếm đối tượng trong local storage dựa trên data-id
        let objectToBeAdded = transformObject(findObjectInLocalStorageByID(dataID), quantityToAdd);
        if (objectToBeAdded !== null) {
          console.log(objectToBeAdded);

          // Nối đối tượng này với local storage
          AppendObjectToShopInLocalStorage(objectToBeAdded);
        };
      } else {
        // Hiển thị cảnh báo nếu lượng thêm vào là không hợp lệ (bằng 0)
        alert("Số lượng thêm vào không hợp lệ!");
      };
    })
    updateGreenCartItemNumber();
  }
}
*/
//event delegation:
document.addEventListener("click", (event) => {
  const addButton = event.target.closest(".add-item");
  if (!addButton) return;

  const inputCount = addButton.parentElement.querySelector(".item-count");
  const dataID = inputCount.getAttribute("data-id");
  const quantityToAdd = parseInt(inputCount.value);

  if (quantityToAdd > 0) {
    let objectToBeAdded = transformObject(
      findObjectInLocalStorageByID(dataID),
      quantityToAdd
    );
    if (objectToBeAdded) {
      AppendObjectToShopInLocalStorage(objectToBeAdded);
    }
  } else {
    alert("Số lượng thêm vào không hợp lệ!");
  }
});
//update số lượng sản phẩm trong giỏ hàng
document.addEventListener("DOMContentLoaded", updateGreenCartItemNumber);

////Những dòng code để tinh gọn:
function findObjectInLocalStorageByID(id) {
  //Trả về object từ localstorage

  let objectToBeReturned;

  for (let element of productsInfoKeys) {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem(element));
    objectToBeReturned = dataFromLocalStorage.find((obj) => obj.id === id);

    if (objectToBeReturned) {
      return objectToBeReturned;
    }
  }
  return null;
}

function transformObject(obj, InPutQuantity) {
  //Biến đổi object để add vào Shop.Array_InCart()
  // {
  //       id: null,
  //       name:"",
  //       image:"",
  //       additional:"",
  //       title: "",
  //       price: 0,
  //       quantity: 0,
  //       subtotal: 0,
  //   }, //id: null, đây là object mẫu, ko dc render ra

  let id = obj.id;
  let name = obj.name;
  let image = obj.image;
  let price = parseFloat(obj.price.replace("$", ""));
  let quantity = InPutQuantity;
  let title = "";
  let additional = "";
  let subtotal = price * InPutQuantity;

  let objToBeReturned = {
    id,
    name,
    image,
    additional,
    title,
    price,
    quantity,
    subtotal,
  };

  return objToBeReturned;
}

function AppendObjectToShopInLocalStorage(object) {
  Shop = JSON.parse(localStorage.getItem("Shop"));

  const existingItem = Shop.Array_CartItems.find(
    (item) => item.id === object.id
  );
  console.log(existingItem);
  if (existingItem) {
    existingItem.quantity += object.quantity; // Increment quantity if item exists
    console.log(existingItem.subtotal);
    alert(`Đã thêm ${object.quantity} mặt hàng ${object.name} thành công!`);
  } else {
    Shop.Array_CartItems.push(object); // Add new item if it doesn't exist
    alert(
      `${object.quantity} mặt hàng ${object.name} đã được thêm vào giỏ hàng thành công!`
    );
  }

  updateDataShop();
  updateGreenCartItemNumber();
  updateLocalStorageQuantity();
  localStorage.setItem("Shop", JSON.stringify(Shop));
}
