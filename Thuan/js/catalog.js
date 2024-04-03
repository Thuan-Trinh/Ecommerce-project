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
        cardClone.querySelector(".tags").style.visibility =
          arrival === "New" ? "visible" : "hidden";
        gridCardsContainer.appendChild(cardClone);
      });

      cardTemplate.style.display = "none";
    }
  }
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

//function thêm số đếm khi ấn button cộng trừ sản phẩm
document.addEventListener("DOMContentLoaded", () => {
  const addToCartBtns = document.querySelectorAll(".add-item");
  const subBtns = document.querySelectorAll(".sub");
  const plusBtns = document.querySelectorAll(".plus");
  const itemCounts = document.querySelectorAll(".item-count");
  const cartCount = document.querySelector(".cartItemsNumbers");

  let totalQuantity = 0;

  const updateTotalQuantity = () => {
    let sum = 0;
    itemCounts.forEach((itemCount) => {
      sum += parseInt(itemCount.textContent);
    });
    totalQuantity = sum;
    cartCount.textContent = totalQuantity;
  };

  addToCartBtns.forEach((addToCartBtn, index) => {
    let quantity = 0;

    const updateQuantityDisplay = () => {
      itemCounts[index].textContent = quantity;
      updateTotalQuantity();
    };

    plusBtns[index].addEventListener("click", () => {
      quantity++;
      subBtns[index].style.backgroundColor = "var(--color-secondary)";
      subBtns[index].style.color = "var(--neutral-01)";
      updateQuantityDisplay();
    });

    subBtns[index].addEventListener("click", () => {
      if (quantity > 0) {
        quantity--;
        updateQuantityDisplay();
        if (quantity === 0) {
          subBtns[index].style.color = "var(--color-primary)";
          subBtns[index].style.backgroundColor = "var(--neutral-03)";
        }
      }
    });

    addToCartBtn.addEventListener("click", () => {
      if (quantity === 0) {
        alert("Chưa có sản phẩm nào trong giỏ hàng!");
      } else {
        alert(`Added ${quantity} items to cart successfully!`);
      }
    });

    updateQuantityDisplay();
  });
});


{
//check có thông tin log in hay không để hiện hình ảnh user
  const usersData = JSON.parse(localStorage.getItem('usersData'));
  console.log(usersData);
  
  if (usersData) {
    const personalPage = document.querySelector('.icons a');
    const iconPersonal = document.querySelector('.ic-personal');
    console.log(iconPersonal);
    console.log(personalPage);
    iconPersonal.src = "./assets/images/ic-user.png";
    personalPage.href = '#';
  }
}
//mobile button sign up
const mobileSignUpBtn = document.querySelector('#side-menu button');
console.log(mobileSignUpBtn);
if(mobileSignUpBtn){
  mobileSignUpBtn.onclick = () => {
    window.location.href = '../Tuan/login.html';
  }
}