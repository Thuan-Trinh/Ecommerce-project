//File này là xương sống của cả page Shop

var Shop = {
    Array_CartItems: [
        {
            id: null,
            name: "",
            image: "",
            additional: "",
            title: "",
            price: 0,
            quantity: 0,
            subtotal: 0,
        }, //id: null, đây là object mẫu, ko dc render ra
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
        return subtotal + element.price * element.quantity;
    }, 0)
    Shop.Float_Total = Shop.Float_SubTotal + Shop.Float_Shipping;

    localStorage.removeItem('Shop')
    localStorage.setItem('Shop', JSON.stringify(Shop));
}

const findObjectById = function (array, id) {
    return array.find(item => item.id === id);
};

function adjustItemQuantityByID(id, newQuantity) {
    const item = findObjectById(Shop.Array_CartItems, id);

    newQuantity = item.quantity;
    item.subtotal = item.price * newQuantity;

    updateDataShop();
}

function minusQuantity(id) {
    const item = findObjectById(Shop.Array_CartItems, id);

    if (item.quantity >= 2)
        item.quantity -= 1;
    item.subtotal = item.price * item.quantity;

    if (item.quantity <= 1)
        alert('Số lượng vật phẩm ít nhất phải bằng 1!');

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
