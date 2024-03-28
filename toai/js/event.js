//File này là những hàm liên quan đến công năng của element, có ảnh hưởng đến data (global_shop).

//LOAD QUANTITY BUTTON
function setEventQuantityButton() { //Nút tăng giảm số lượng trong row --> Tác động đến subtotal và cart summary
    let quantityPluses = document.getElementsByClassName('quantityButton-plus');
    for (let element of quantityPluses) {
        element.addEventListener('click', function() {
            let currentRow = element.parentElement.parentElement.parentElement.parentElement; 
            //Không truyền current row vào reloadRow vì reloadRow sẽ reload cả mobile lẫn desktop
            
            let ID = currentRow.querySelector('p.id').textContent;

            plusQuantity(ID);
            reloadRow(ID);
            loadTotal();
            updateGreenCartItemNumber();
        })
    }

    let quantityMinuses = document.getElementsByClassName('quantityButton-minus');
    for (let element of quantityMinuses) {
        element.addEventListener('click', function() {
            let currentRow = element.parentElement.parentElement.parentElement.parentElement;
            let ID = currentRow.querySelector('p.id').textContent;
            
            minusQuantity(ID);
            reloadRow(ID);
            loadTotal();
            updateGreenCartItemNumber();
        })
    }
}

function setEventShippingRadios() {
    let radioList = document.querySelectorAll('.shippingOptions .optionFrame input');
    for (let element of radioList) {
        element.addEventListener('change', function() {
            changeParentBackgroundColor(element);
            setShipping(element.id);
            loadTotal();
        })
    }
}

function setEventRemoveButton() {
    let removeButtonList = document.querySelectorAll('.remove');
    for (let element of removeButtonList) {
        element.addEventListener('click', function() {
            let removeID = element.id;
            let elementID = removeID.substring(removeID.indexOf('-') + 1);

            removeByID(elementID);
            removeRowByID(elementID);
            loadTotal();
            updateGreenCartItemNumber();
        })
    }
}

function setEventCouponCode() {
    let couponForm = document.getElementById('couponForm');
    couponForm.addEventListener('submit', function(event) {
        event.preventDefault();

        let couponInput = document.querySelector('input#coupon');
        console.log(couponInput.value);
    })
}

function setEventCheckoutBtn() {
    let checkoutBtn = document.getElementById('btn-checkout');
    checkoutBtn.addEventListener('click', function() {
        // Navigate to the next HTML page
        window.location.href = 'checkout.html'; // Replace 'next-page.html' with the URL of the next page
    });
}

//Minor
function checkCheckedRadioButton() {
    var shippingButtons = document.getElementsByName('shipping');
    var paymentButtons = document.getElementsByName('payment-method');

    for (let i = 0; i < shippingButtons.length; i++) {
        if (shippingButtons[i].checked) {
            console.log("Checked radio button: " + shippingButtons[i].id);
            setShipping(shippingButtons[i].id);
            changeParentBackgroundColor(shippingButtons[i]);
            loadTotal();
            break;
        }
    }

    for (let i = 0; i < paymentButtons.length; i++) {
        if (paymentButtons[i].checked) {
            console.log("Checked radio button: " + paymentButtons[i].id);
            // You can perform any action based on the checked radio button here
            // For example, change the background color of the parent container
            changeParentBackgroundColor(paymentButtons[i]);
            break;
        }
    }
}

function checkPaymentMethod() {
    var radioButtons = document.querySelectorAll('input[type="radio"][name="payment-method"]');
    radioButtons.forEach(function(radioButton) {
        toggleSVG(radioButton);
        changeParentBackgroundColor(radioButton);
    });
}

function toggleSVG(radioButton) {
    var svg = radioButton.nextElementSibling.nextElementSibling;
    if (radioButton.checked) {
        svg.style.display = "inline-block";
    } else {
        svg.style.display = "none";
    }
}

function paymentChecked(paymentRadio) {
    changeParentBackgroundColor(paymentRadio);
    checkPaymentMethod();
    toggleSVG(paymentRadio);
}