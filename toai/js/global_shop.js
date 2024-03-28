//File này là xương sống của cả page Shop

var Shop = {
    Array_CartItems: [
        {
            id: null,
            name:"",
            image:"",
            additional:"",
            title: "",
            price: 0,
            quantity: 0,
            subtotal: 0,
        }, //id: null, đây là object mẫu, ko dc render ra

        {
            id:"PRD-1",
            name:"1.3 Chair",
            image:"./images/products/Image Placeholder.png",
            additional:"Color: Brown",
            title: "Design by 1AiDo, VN, 2010",
            price: 20,
            quantity: 1,
            subtotal: 20,
        },
        {
            id:"PRD-2",
            name:"1.3 Chair",
            image:"./images/products/Image Placeholder(1).png",
            additional:"Color: Brown",
            title: "Design by 1NgNaoDo, TheGioi, 2010",
            price: 19,
            quantity: 1,
            subtotal: 19,
        },
        {
            id:"PRD-3",
            name:"1.3 Chair",
            image:"./images/products/Image Placeholder(2).png",
            additional:"Color: Brown",
            title: "Design by Merit Frank, München Deutschland, 2010",
            price: 30,
            quantity: 1,
            subtotal: 30,
        }
    ],
    Float_InCart: 0.0,
    Float_SubTotal: 0.0,
    Float_Shipping: 0.0,
    Float_Total: 0.0,
}

var Shipping = {
    "freeShipping": 0,
    "expressShipping": 20,
    "pickup": 30
}

var couponCODES = {
    "GIAMGIA10": 0.1,
    "NHOMUAUNGHO5": 0.05,
    "GIAMGIA20": 0.2,
    "GIAMGIA30": 0.3
}

function updateDataShop() {
    Shop.Float_InCart = Shop.Array_CartItems.length;
    Shop.Float_SubTotal = Shop.Array_CartItems.reduce((subtotal, element) => {
        return subtotal + element.price*element.quantity;
    }, 0)
    Shop.Float_Total = Shop.Float_SubTotal + Shop.Float_Shipping;
}

const findObjectById = function(array, id) {
    return array.find(item => item.id === id);
};

function adjustItemQuantityByID(id, newQuantity) {
    const item = findObjectById(Shop.Array_CartItems, id);

    item.quantity = newQuantity;
    item.subtotal = item.price * item.quantity;

    updateDataShop();
}

function minusQuantity(id) {
    const item = findObjectById(Shop.Array_CartItems, id);

    if (item.quantity >= 2)
        item.quantity -= 1;

    item.subtotal = item.price * item.quantity;

    updateDataShop();
}

function plusQuantity(id) {
    const item = findObjectById(Shop.Array_CartItems, id);

    item.quantity += 1;

    item.subtotal = item.price * item.quantity;

    updateDataShop();
}

function setShipping(shippingID) {
    Shop.Float_Shipping = Shipping[shippingID];
    Shop.Float_Total = Shop.Float_SubTotal + Shop.Float_Shipping;
}

function removeByID(id) {
    console.log(id);

    const indexToRemove = Shop.Array_CartItems.findIndex(item => item.id === id);
    // Check if the item with the specified ID exists
    if (indexToRemove !== -1) {
        // Remove the item from the array
        Shop.Array_CartItems.splice(indexToRemove, 1);
    }

    updateDataShop();
}