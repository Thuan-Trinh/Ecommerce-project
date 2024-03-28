
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

