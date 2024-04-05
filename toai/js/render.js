//File JS này để vẽ UI

function loadTableDesktop() {
    const listRowCart = Shop.Array_CartItems.map((product) => {
        const { id, name, image, additional,  title, price, quantity } = product;
        
        if (id !== null)
        return `
            <tr class="${id}">
                <td class="productCol">
                    <div class="productFrame">
                        <img src="${image}" alt="product image">
                        <div class="productInfo">
                            <p class="id">${id}</p>
                            <p class="bolder">${name}</p>
                            <p>${additional}</p>
                            <div class="remove" id="remove-${id}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#52667A"/>
                                </svg>
                                <p>Remove</p>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="quantityButton">
                        <div class="quantityContents">
                            <svg class="quantityButton-minus" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M3.23047 8H12.5638" stroke="black" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p class="quantityData">${quantity}</p>
                            <svg class="quantityButton-plus" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.37549 3.33398C8.37549 3.12688 8.20759 2.95898 8.00049 2.95898C7.79338 2.95898 7.62549 3.12688 7.62549 3.33398V7.62549H3.33398C3.12688 7.62549 2.95898 7.79338 2.95898 8.00049C2.95898 8.20759 3.12688 8.37549 3.33398 8.37549H7.62549V12.6673C7.62549 12.8744 7.79338 13.0423 8.00049 13.0423C8.20759 13.0423 8.37549 12.8744 8.37549 12.6673V8.37549H12.6673C12.8744 8.37549 13.0423 8.20759 13.0423 8.00049C13.0423 7.79338 12.8744 7.62549 12.6673 7.62549H8.37549V3.33398Z" fill="black"/>
                            </svg>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="priceDisplay">
                        $${price}
                    </div>
                </td>
                <td>
                    <div class="subTotal">
                        $${(price*quantity).toFixed(2)}
                    </div>
                </td>
            </tr>
            `;
    });

    let table_desktop_body = document.querySelector('table.desktop-table tbody');
    table_desktop_body.innerHTML = listRowCart.join("");
}

function loadTableMobile() {
    const listRowCart = Shop.Array_CartItems.map((product) => {
        const { id, name, image, additional,  title, price, quantity } = product;
        
        if (id !== null)
        return `
        <tr class="${id}">
            <td>
                <div class="productFrame">
                    <img src="${image}" alt="${image}">
                        <div class="productInfo">
                            <p class="id">${id}</p>
                            <p class="bolder">${name}</p>
                            <p>${additional}</p>
                            <div class="quantityButton">
                                <div class="quantityContents">
                                    <svg class="quantityButton-minus" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M3.23047 8H12.5638" stroke="black" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p class="quantityData">${quantity}</p>
                                    <svg class="quantityButton-plus" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.37549 3.33398C8.37549 3.12688 8.20759 2.95898 8.00049 2.95898C7.79338 2.95898 7.62549 3.12688 7.62549 3.33398V7.62549H3.33398C3.12688 7.62549 2.95898 7.79338 2.95898 8.00049C2.95898 8.20759 3.12688 8.37549 3.33398 8.37549H7.62549V12.6673C7.62549 12.8744 7.79338 13.0423 8.00049 13.0423C8.20759 13.0423 8.37549 12.8744 8.37549 12.6673V8.37549H12.6673C12.8744 8.37549 13.0423 8.20759 13.0423 8.00049C13.0423 7.79338 12.8744 7.62549 12.6673 7.62549H8.37549V3.33398Z" fill="black"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                </div>
            </td>
            <td>
                <div class="mobile-table-price">
                    <div class="subTotal">
                        $${(price*quantity).toFixed(2)}
                    </div>
                    <div class="priceDisplay">
                        $${price}    
                    </div>
                    <div class="remove" id="remove-${id}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#52667A"/>
                        </svg>
                        <p>Remove</p>
                    </div>
                </div>
            </td>
        </tr>
            `;
    });

    let table_mobile_body = document.querySelector('table.mobile-table');
    table_mobile_body.innerHTML = listRowCart.join("");
}


function clearTable() {
    let tabledesktop = document.querySelector('table.desktop-table');
    tabledesktop.innerHTML = "";

    let tablemobile = document.querySelector('table.mobile-table');
    tablemobile.innerHTML = "";
}

function reloadRow(id) {
    const item = findObjectById(Shop.Array_CartItems, id);
    let all_p_id = document.querySelectorAll('p.id');

    for (let element of all_p_id) {
        if (element.textContent === id)
        {
            let currentRow = element.parentElement.parentElement.parentElement.parentElement;
            let quantityDisplay = currentRow.querySelector('p.quantityData');
            quantityDisplay.innerHTML = item.quantity;
            
            let subtotal = currentRow.querySelector('div.subTotal');
            subtotal.innerHTML = '$' + item.subtotal.toFixed(2); // toFixed(2) ensures two decimal places
        }
    }
}

function loadTotal() {
    let subTotal = document.querySelector('.subtotalDisplay :nth-child(2)');
    let Total = document.querySelector('.totalDisplay :nth-child(2)');

    subTotal.textContent ='$' + Shop.Float_SubTotal.toFixed(2);
    Total.textContent = '$' + Shop.Float_Total.toFixed(2);
}

function updateGreenCartItemNumber() {
    let cartDisplay = document.querySelector('div.cartItemsNumbers p');

    let quantityOfAllProducts = Shop.Array_CartItems.reduce((total, item) => total + item.quantity, 0);

    cartDisplay.textContent = quantityOfAllProducts;
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

function removeRowByID(id) {
    let rowList = document.querySelectorAll('.' + id);
    rowList.forEach(element => {
        element.remove();
    });
}