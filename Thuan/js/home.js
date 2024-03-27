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