document.addEventListener("DOMContentLoaded", function() {
    checkPaymentMethod();
    checkCheckedRadioButton();
});

function checkCheckedRadioButton() {
    var radioButtons = document.getElementsByName('shipping');
    var paymentButtons = document.getElementsByName('payment-method');

    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            console.log("Checked radio button: " + radioButtons[i].id);
            // You can perform any action based on the checked radio button here
            // For example, change the background color of the parent container
            changeParentBackgroundColor(radioButtons[i]);
            break;
        }
    }

    for (let i = 0; i < radioButtons.length; i++) {
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

function changeParentBackgroundColor(radioButton) {
    let optionFrames = document.getElementsByClassName("optionFrame");
    for (let frame of optionFrames) {
        frame.style.backgroundColor = "#fff"
    }
    
    let parentElement = radioButton.parentElement;
    if (radioButton.checked) {
        parentElement.style.backgroundColor = "#F3F5F7";
    }
}

function paymentChecked(paymentRadio) {
    changeParentBackgroundColor(paymentRadio);
    checkPaymentMethod();
    toggleSVG(paymentRadio);
}