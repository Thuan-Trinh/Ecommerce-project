function createProduct() {
  if (localStorage.getItem('cardsInfor') == null) {
    let cardsInfor = [
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
    localStorage.setItem('cardsInfor', JSON.stringify(cardsInfor));
  }
}

window.onload = createProduct();