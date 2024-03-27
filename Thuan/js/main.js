
// (function () {
//   // Tạo card từ thẻ có sẵn, với data thẻ lấy từ js khác đã đẩy lên local
//   const novelProducts = document.querySelector('.novelProducts');
//   const chairProducts = document.querySelector('.chairProducts');
// novelProducts.addEventListener('click', ()=>{
//   novelProducts.classList.add('side-bar-active');
// });
//   console.log(novelProducts, chairProducts);
//   // catalog page
//     //gọi card container
//     const gridCardsContainer = document.getElementById("grid-item-cards");
//     //gọi mảng từ local
//     const cataCards = JSON.parse(localStorage.getItem("cardsInfor"));
//     console.log(cataCards);

//     const cardTemplate = document.querySelector(".card");

//     if (cardTemplate) {
//       cataCards.forEach(function (cardInfor) {
//         let cardClone = cardTemplate.cloneNode(true);
//         cardClone.querySelector(".card-img").src = cardInfor.image;
//         cardClone.querySelector(".card-name").textContent = cardInfor.name;
//         cardClone.querySelector(".card-price").textContent = cardInfor.price;
//         // cardClone.style.display = "block";
//         const tags = cardClone.querySelector(".tags");
//         if (cardInfor.arrival === "New") {
//           tags.style.visibility = "visible";
//         } else {
//           tags.style.visibility = "hidden";
//         }
//         gridCardsContainer.appendChild(cardClone);
//       });
//       cardTemplate.style.display = "none";
//   }

// })();
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


//function toggle cho 2 btn trong phần subheader

(function () {
  const btnShipping = document.getElementById("btn-shipping");
  const btnTakeAway = document.getElementById("btn-take-away");
  console.log(btnShipping, btnTakeAway);

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

// function filter mobile
(function () {
  const filterBtn = document.querySelector(
    ".grid-content .arrange-btns .left-side-arrange .ic-filter"
  );
  const filterTabs = document.querySelector(
    ".grid-content .arrange-btns .left-side-arrange .filter-tabs"
  );

  console.log(filterBtn, filterTabs);

  if (filterBtn && filterTabs) {
    filterBtn.onclick = () => {
      if (
        filterTabs.style.display === "none" ||
        filterTabs.style.display === ""
      ) {
        filterTabs.style.display = "flex";
      } else {
        filterTabs.style.display = "none";
      }
    };
  }
})();

