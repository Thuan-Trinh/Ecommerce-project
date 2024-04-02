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
          <a href="./Thuan/catalog.html">
             <img src="${image}" alt="${image}" class="novel-card-img">
          </a>
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
const usersData = JSON.parse(localStorage.getItem('usersData'));
console.log(usersData);

if (usersData) {
  const personalPage = document.querySelector('.header-nav .icons a');
  const iconPersonal = document.querySelector('.header-nav .icons .ic-personal');
  console.log(iconPersonal);
  console.log(personalPage);
  iconPersonal.src = "./Thuan/assets/images/ic-user.png";
  personalPage.href = '#';
}
