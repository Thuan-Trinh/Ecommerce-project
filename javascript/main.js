(function () {
  {
    //    Thêm card sản phẩm trong catalogpage
    // img catalog array
  /*  const cataCards = [
      {
        image: "./assets/images/item-img-1.png",
        name: "1.3 Chair",
        price: "$69.90",
      },
      {
        image: "./assets/images/item-img-2.png",
        name: "Kuyu Desk",
        price: "$79.90",
      },
      {
        image: "./assets/images/item-img-3.png",
        name: "Neat Noon",
        price: "$89.90",
      },
      {
        image: "./assets/images/item-img-4.png",
        name: "1.3 Chair",
        price: "$99.90",
      },
      {
        image: "./assets/images/item-img-5.png",
        name: "Morph",
        price: "$109.90",
      },
      {
        image: "./assets/images/item-img-6.png",
        name: "1.3 Chair",
        price: "$119.90",
      },
      // Thêm các phần tử khác vào mảng tương tự như trên
    ];

    const gridCardsContainer = document.getElementById("grid-item-cards");
    const cardTemplate = document.querySelector(".card");

    if (cardTemplate) {
      cardTemplate.style.display = "none";
      cataCards.forEach(function (cardInfor) {
        let cardClone = cardTemplate.cloneNode(true);
        cardClone.querySelector(".card-img").src = cardInfor.image;
        cardClone.querySelector(".card-name").textContent = cardInfor.name;
        cardClone.querySelector(".card-price").textContent = cardInfor.price;
        cardClone.style.display = "block";
        gridCardsContainer.appendChild(cardClone);
      });
    }
*/
// Lấy mảng từ local storage
const storedCataCards = localStorage.getItem('cataCards');

// Chuyển đổi chuỗi JSON thành mảng JavaScript
const cataCards = JSON.parse(storedCataCards);

// Lấy phần tử HTML có id là "grid-item-cards" để chèn các thẻ sản phẩm vào
const gridCardsContainer = document.getElementById("grid-item-cards");

// Lấy mẫu thẻ sản phẩm
const cardTemplate = document.querySelector(".card");

// Kiểm tra xem mẫu thẻ đã tồn tại chưa
if (cardTemplate) {
    cardTemplate.style.display = "none"; // Ẩn mẫu thẻ

    // Duyệt qua mỗi phần tử trong mảng cataCards và tạo các thẻ sản phẩm tương ứng
    cataCards.forEach(function (cardInfo) {
        // Sao chép mẫu thẻ
        let cardClone = cardTemplate.cloneNode(true);

        // Cập nhật thông tin cho thẻ sản phẩm sao chép
        cardClone.querySelector(".card-img").src = cardInfo.image;
        cardClone.querySelector(".card-name").textContent = cardInfo.name;
        cardClone.querySelector(".card-price").textContent = cardInfo.price;

        // Hiển thị thẻ sản phẩm sao chép
        cardClone.style.display = "block";

        // Chèn thẻ sản phẩm vào container
        gridCardsContainer.appendChild(cardClone);
    });
}

    const tags = document.querySelectorAll(".tags");
    function hideTags(n) {
      if (n > 0 && n <= tags.length) {
        let targetTag = tags[n];
        if (targetTag.style.display === "none") {
          targetTag.style.display = "block";
        } else {
          targetTag.style.display = "none";
        }
      } else {
        console.log("Không tìm thấy phần tử thứ " + n);
      }
    }

    console.log(hideTags(2));
    console.log(hideTags(5));
    console.log(hideTags(6));
    console.log(hideTags(8));
    console.log(hideTags(7));
  }
  {
    // Ẩn hiển side menu

    const sideMenu = document.getElementById("side-menu");
    const showSideMenu = document.getElementById("toggle-menu");
    const hideSideMenu = document.getElementById("close-menu");
    const overlay = document.getElementById("overlay");

    if (showSideMenu && hideSideMenu && sideMenu && overlay) {
      showSideMenu.onclick = () => {
        sideMenu.classList.toggle("show-side-menu");
        overlay.style.display = "block";
      };

      hideSideMenu.onclick = () => {
        sideMenu.classList.remove("show-side-menu");
        overlay.style.display = "none";
      };
    }
  }
})();

//function toggle cho 2 btn trong phần subheader

(function () {
  const btnShipping = document.getElementById("btn-shipping");
  const btnTakeAway = document.getElementById("btn-take-away");
  console.log(btnShipping, btnTakeAway)

  if (btnShipping && btnTakeAway) {
    btnShipping.onclick = () => {
      if (
        !btnShipping.classList.contains("btn-active") &&
        btnTakeAway.classList.contains("btn-active")
      )
        btnTakeAway.classList.remove("btn-active");
      btnShipping.classList.add("btn-active");
    };
    btnTakeAway.onclick = () => {
      if (
        btnShipping.classList.contains("btn-active") &&
        !btnTakeAway.classList.contains("btn-active")
      )
        btnShipping.classList.remove("btn-active");
      btnTakeAway.classList.add("btn-active");
    };
  }
})();
