// (function () {
//     // catalog page
//     //gọi card container
//     const gridCardsContainer = document.getElementById("grid-item-cards");
//     //gọi mảng từ local
//     const cataCards = JSON.parse(localStorage.getItem("cardsInfor"));
//     console.log(cataCards);

//     const cardTemplate = document.querySelector(".card");

//     if (cardTemplate) {
//         cataCards.forEach(function (cardInfor) {
//             let cardClone = cardTemplate.cloneNode(true);
//             cardClone.querySelector(".card-img").src = cardInfor.image;
//             cardClone.querySelector(".card-name").textContent = cardInfor.name;
//             cardClone.querySelector(".card-price").textContent = cardInfor.price;
//             // cardClone.style.display = "block";
//             const tags = cardClone.querySelector(".tags");
//             if (cardInfor.arrival === "New") {
//                 tags.style.visibility = "visible";
//             } else {
//                 tags.style.visibility = "hidden";
//             }
//             gridCardsContainer.appendChild(cardClone);
//         });
//         cardTemplate.style.display = "none";
//     }

// })();


function displayProducts(productsInfor) { //function hiển thị sản phẩm
    // Tạo card từ thẻ có sẵn, với data thẻ lấy từ js khác đã đẩy lên local
    // catalog page
    //gọi card container
    const gridCardsContainer = document.getElementById("grid-item-cards");
    //gọi mảng từ local
    const cataCards = JSON.parse(localStorage.getItem(productsInfor));
    console.log(cataCards);

    const cardTemplate = document.querySelector(".card");

    if (cardTemplate) {
        // Clear the current products displayed in the grid
        gridCardsContainer.innerHTML = '';

        cataCards.forEach(function (cardInfor) {
            let cardClone = cardTemplate.cloneNode(true);
            cardClone.querySelector(".card-img").src = cardInfor.image;
            cardClone.querySelector(".card-name").textContent = cardInfor.name;
            cardClone.querySelector(".card-price").textContent = cardInfor.price;
            // cardClone.style.display = "block";
            const tags = cardClone.querySelector(".tags");
            if (cardInfor.arrival === "New") {
                tags.style.visibility = "visible";
            } else {
                tags.style.visibility = "hidden";
            }
            gridCardsContainer.appendChild(cardClone);
        });
        cardTemplate.style.display = "none";
    }
}
const productsInfoKeys = ["novelCardInfor", "chairCardsInfor", "tableCardInfor","sofasCardInfor", "bedCardInfor"];

const toggleElements = [
    document.querySelector('.novelProducts'),
    document.querySelector('.chairProducts'),
    document.querySelector('.tableProducts'),
    document.querySelector('.sofasProducts'),
    document.querySelector('.bedProducts'),
    document.querySelector('.shelvesProducts'),
    document.querySelector('.officeProducts'),
    document.querySelector('.lampProducts'),
];

// Thiết lập novelProducts có class side-bar-active ban đầu
toggleElements[0].classList.add('side-bar-active');

// Array of functions to handle click event for each toggle element
const clickHandlers = productsInfoKeys.map(key => {
    return function() { displayProducts(key); };
});

// Add click event listener to each toggle element
toggleElements.forEach((element, index) => {
    element.addEventListener('click', () => {
        // Remove side-bar-active class from all elements
        toggleElements.forEach(otherElement => {
            otherElement.classList.remove('side-bar-active');
        });

        // Add side-bar-active class to the clicked element
        element.classList.add('side-bar-active');

        // Call the corresponding displayProducts function
        clickHandlers[index]();
    });
});

// Call the function to display products for the initial category
clickHandlers[0]();