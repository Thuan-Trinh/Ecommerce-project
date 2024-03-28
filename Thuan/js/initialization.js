//thêm mảng product màn product
(function createProduct() {
  if (localStorage.getItem('chairCardsInfor') == null) {
    let chairCardsInfor = [
        {
          id: 'cata-chair-1',
          image: "./assets/images/item-img-1.png",
          name: "1.3 Chair",
          price: "$69.90",
          arrival: "New",

        },
        {
          id: 'cata-chair-2',

          image: "./assets/images/item-img-2.png",
          name: "Kuyu Desk",
          price: "$79.90",
        },
        {
          id: 'cata-chair-3',

          image: "./assets/images/item-img-3.png",
          name: "Neat Noon",
          price: "$89.90",
          arrival: "New",

        },
        {
          id: 'cata-chair-4',

          image: "./assets/images/item-img-4.png",
          name: "1.3 Chair",
          price: "$99.90",
          arrival: "New",
        },
        {
          id: 'cata-chair-5',

          image: "./assets/images/item-img-5.png",
          name: "Morph",
          price: "$109.90",
          

        },
        {
          id: 'cata-chair-6',

          image: "./assets/images/item-img-6.png",
          name: "1.3 Chair",
          price: "$119.90",
        },
        
        // Thêm các phần tử khác vào mảng tương tự như trên
      ];
    localStorage.setItem('chairCardsInfor', JSON.stringify(chairCardsInfor));
  };
  
})();
//mảng sản phẩm novelties
(function createProductNovel() {
  if (localStorage.getItem('novelCardInfor') == null) {
    let novelCardInfor = [
        {
          id: 'cata-novel-1',
          image: "./assets/images/novel-img-1.png",
          name: "Novelties 01",
          price: "$69.90",
          arrival: "New",

        },
        {
          id: 'cata-novel-2',

          image: "./assets/images/novel-img-2.png",
          name: "Novelties 02",
          price: "$79.90",
        },
        {
          id: 'cata-novel-3',

          image: "./assets/images/novel-img-3.png",
          name: "Novelties 03",
          price: "$89.90",
          arrival: "New",
        },
        {
          id: 'cata-novel-4',

          image: "./assets/images/novel-img-4.png",
          name: "Novelties 04",
          price: "$99.90",
          arrival: "New",
        },
        {
          id: 'cata-novel-5',

          image: "./assets/images/novel-img-5.jpg",
          name: "Novelties 05",
          price: "$109.90",

        },
        {
          id: 'cata-novel-6',

          image: "./assets/images/novel-img-6.png",
          name: "Novelties 06",
          price: "$119.90",
        },
        
        // Thêm các phần tử khác vào mảng tương tự như trên
      ];
    localStorage.setItem('novelCardInfor', JSON.stringify(novelCardInfor));
  };
  
})();

//mảng sản phẩm tables
(function createProductTables() {
  if (localStorage.getItem('tableCardInfor') == null) {
    let tableCardInfor = [
        {
          id: 'cata-table-1',
          image: "./assets/images/table-img-1.jpg",
          name: "Table 01",
          price: "$69.90",
          arrival: "New",

        },
        {
          id: 'cata-table-2',

          image: "./assets/images/table-img-2.jpg",
          name: "Table 02",
          price: "$79.90",
        },
        {
          id: 'cata-table-3',

          image: "./assets/images/table-img-3.jpg",
          name: "Table 03",
          price: "$89.90",
          arrival: "New",
        },
        {
          id: 'cata-table-4',

          image: "./assets/images/table-img-4.jpg",
          name: "Table 04",
          price: "$99.90",
          arrival: "New",
        },
        {
          id: 'cata-table-5',

          image: "./assets/images/table-img-5.jpg",
          name: "Table 05",
          price: "$109.90",

        },
        {
          id: 'cata-table-6',

          image: "./assets/images/table-img-6.jpg",
          name: "Table 06",
          price: "$119.90",
        },
        
        // Thêm các phần tử khác vào mảng tương tự như trên
      ];
    localStorage.setItem('tableCardInfor', JSON.stringify(tableCardInfor));
  };
  
})();

//mảng sản phẩm sofas
(function createProductTables() {
  if (localStorage.getItem('sofasCardInfor') == null) {
    let sofasCardInfor = [
        {
          id: 'cata-sofas-1',
          image: "./assets/images/sofa-img-1.jpg",
          name: "Sofas 01",
          price: "$69.90",
          arrival: "New",

        },
        {
          id: 'cata-sofas-2',

          image: "./assets/images/sofa-img-2.jpg",
          name: "Sofas 02",
          price: "$79.90",
        },
        {
          id: 'cata-sofas-3',

          image: "./assets/images/sofa-img-3.jpg",
          name: "Sofas 03",
          price: "$89.90",
          arrival: "New",
        },
        {
          id: 'cata-sofas-4',

          image: "./assets/images/sofa-img-4.jpg",
          name: "Sofas 04",
          price: "$99.90",
          arrival: "New",
        },
        {
          id: 'cata-sofas-5',

          image: "./assets/images/sofa-img-5.jpg",
          name: "Sofas 05",
          price: "$109.90",

        },
        {
          id: 'cata-sofas-6',

          image: "./assets/images/sofa-img-6.jpg",
          name: "Sofas 06",
          price: "$119.90",
        },
        {
          id: 'cata-sofas-7',

          image: "./assets/images/sofa-img-7.jpg",
          name: "Sofas 07",
          price: "$119.90",
        },
        {
          id: 'cata-sofas-8',

          image: "./assets/images/sofa-img-8.jpg",
          name: "Sofas 08",
          price: "$119.90",
        },
        {
          id: 'cata-sofas-9',

          image: "./assets/images/sofa-img-9.jpg",
          name: "Sofas 09",
          price: "$119.90",
        },
        
        
        // Thêm các phần tử khác vào mảng tương tự như trên
      ];
    localStorage.setItem('sofasCardInfor', JSON.stringify(sofasCardInfor));
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


