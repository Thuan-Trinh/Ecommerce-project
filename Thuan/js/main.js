(function () {
  // Tạo card từ thẻ có sẵn, với data thẻ lấy từ js khác đã đẩy lên local
  // catalog page
  {
    let cataCards = JSON.parse(localStorage.getItem("cardsInfor"));
    console.log(cataCards);

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

    // Ẩn hiện tags sản phẩm
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

{
  const homeCardNovelContainer = document.querySelector(
    ".novelties-section .novel-container"
  );

  const homeCardList = JSON.parse(localStorage.getItem("homeCard"));
  console.log(homeCardList);

  if (homeCardList) {
    const listCardNovel = homeCardList.map((product) => {
      const { id, image, name, title } = product;

      return `
    <div class="novel-items">
                      <div class="img-card">
                          <img src="${image}" alt="${image}" class="novel-card-img">
                      </div>
                      <div class="novel-title">
                          <h6 class="novel-name">${name}</h6>
                          <p class="novel-title">${title}</p>
                      </div>
                  </div>
    `;
    });
    homeCardNovelContainer.innerHTML = listCardNovel.join("");
  }
}
