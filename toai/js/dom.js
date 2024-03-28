//File này xử dụng những gì đã build

document.addEventListener("DOMContentLoaded", function() {

    LocalStorageHandle();

    loadTableDesktop();
    
    loadTableMobile();
    
    checkPaymentMethod(); //kiểm tra xem cart summary đang chọn phương thức shipping nào
    
    checkCheckedRadioButton(); //kiểm tra và đổi màu UI nút bấm
    
    setEventQuantityButton(); //Đảm bảo nút cộng, trừ số lượng sản phẩm chạy được
    
    updateGreenCartItemNumber(); //Hiển thị số sản phẩm trong giỏ hàng
    
    updateDataShop();

    setEventShippingRadios();
    setEventRemoveButton();
    setEventCouponCode();
    setEventCheckoutBtn();
    
    loadTotal();
});

function LocalStorageHandle() {
    if (localStorage.getItem('Shop') == null) {
        localStorage.setItem('Shop', JSON.stringify(Shop));
    } else {
        Shop = JSON.parse(localStorage.getItem("Shop"));
    }
}