(function createProduct() {
  if (localStorage.getItem('cardsInfor') == null) {
    let cardsInfor = [
        {
          id: 'chair-1',
          image: "./assets/images/item-img-1.png",
          name: "1.3 Chair",
          price: "$69.90",
        },
        {
          id: 'chair-2',

          image: "./assets/images/item-img-2.png",
          name: "Kuyu Desk",
          price: "$79.90",
        },
        {
          id: 'chair-3',

          image: "./assets/images/item-img-3.png",
          name: "Neat Noon",
          price: "$89.90",
        },
        {
          id: 'chair-4',

          image: "./assets/images/item-img-4.png",
          name: "1.3 Chair",
          price: "$99.90",
        },
        {
          id: 'chair-5',

          image: "./assets/images/item-img-5.png",
          name: "Morph",
          price: "$109.90",
        },
        {
          id: 'chair-6',

          image: "./assets/images/item-img-6.png",
          name: "1.3 Chair",
          price: "$119.90",
        },
        // Thêm các phần tử khác vào mảng tương tự như trên
      ];
    localStorage.setItem('cardsInfor', JSON.stringify(cardsInfor));
  };
  
})();



// thêm mảng product home
(function createHomeCard() {
  if (localStorage.getItem('homeCard') == null) {
    let homeCard = [
        {
          id: "novel-1",
          image: "./Thuan/assets/images/novel-img-1.png",
          name: "BONDT – round",
          title: "Design by Merit Frank, Nana Gröner, 2010",
        },
        {
          id: "novel-2",
          image: "./Thuan/assets/images/novel-img-2.png",
          name: "1.3 Chair",
          title: "Design by Kihyun Kim, 2012",
        },
        {
          id: "novel-3",

          image: "./Thuan/assets/images/novel-img-3.png",
          name: "Kuyu Desk",
          title: "Design by Formstelle, 2023",
        },
        {
          id: "novel-4",

          image: "./Thuan/assets/images/novel-img-4.png",
          name: "Neat Noon",
          title: "Design by EL Schmid, 2006 | 2018",
        },
        {
          id: "novel-5",

          image: "./Thuan/assets/images/novel-img-5.jpg",
          name: "Denis Mahn",
          title: "Designer",
        },
        
        // Thêm các phần tử khác vào mảng tương tự như trên
      ];
    localStorage.setItem('homeCard', JSON.stringify(homeCard));
  }
})();


