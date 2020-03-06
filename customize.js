//creating pillow object
class Pillow {
    constructor(style, color, filling, quantity, pricepc, pricetl) {
        this._style = 'round';
        this._color = color;
        this._filling = filling;
        this._quantity = quantity;
        this._pricepc = pricepc;
        this._pricetl = this._quantity * this._pricepc;
    }

    get style() {
        return this._style;
    }

    get color() {
        return this._color;
    }

    get filling() {
        return this._filling;
    }

    get quantity() {
        return this._quantity;
    }

    get pricepc() {
        return this._pricepc;
    }

    get pricetl() {
        return this._pricetl;
    }

    change_color(intended_color) {
        this._color = intended_color;
    }

    change_filling(intended_filling) {
        this._filling = intended_filling;
    }

    change_quantity(intended_quantity) {
        this._quantity = intended_quantity;
    }

    change_pricepc(inteded_pricepc) {
        this._pricepc = inteded_pricepc;
    }

    change_pricetl() {
        this._pricetl = this._quantity * this._pricepc;
    }
}

//gloabal object to keep track of
const rpillow = new Pillow('round','orange','level1', 1, 60, 60);
let totalItem = 0;

//changing view
function changeView(intendedView) {
    const previewElementMain = document.getElementsByClassName('current-view')[0];
    const previewElementSmall = document.getElementById(intendedView);
    const orgPathMain = previewElementMain.src;
    const orgPathSmall = previewElementSmall.src;
    previewElementMain.src = orgPathSmall;
    previewElementSmall.src = orgPathMain;
}

//color change
function changeColor(intendedColor) {
    rpillow.change_color(intendedColor);
    const colorElements = document.getElementsByClassName('color');
    for (let i = 0; i < colorElements.length; i++) {
        colorElements[i].style.borderWidth = '0.75px';
        colorElements[i].style.borderColor = 'rgb(180,180,180)';
        colorElements[i].style.backgroundColor = 'white';
    }
    if (intendedColor === 'oran') {
        colorElements[0].style.borderWidth = '1px';
        colorElements[0].style.borderColor = 'black';
        colorElements[0].style.backgroundColor = 'rgb(245, 245, 245)';
    }
    else if (intendedColor === 'grey') {
        colorElements[1].style.borderWidth = '1px';
        colorElements[1].style.borderColor = 'black';
        colorElements[1].style.backgroundColor = 'rgb(245, 245, 245)';
    }
    else if (intendedColor === 'deni') {
        colorElements[2].style.borderWidth = '1px';
        colorElements[2].style.borderColor = 'black';
        colorElements[2].style.backgroundColor = 'rgb(245, 245, 245)';
    }
    else if (intendedColor === 'blue') {
        colorElements[3].style.borderWidth = '1px';
        colorElements[3].style.borderColor = 'black';
        colorElements[3].style.backgroundColor = 'rgb(245, 245, 245)';
    }
    const previewElementMain = document.getElementsByClassName('current-view')[0];
    const previewElementSide1 = document.getElementById('s1');
    const previewElementSide2 = document.getElementById('s2');
    const previewElementSide3 = document.getElementById('s3');
    const orgPathMain = previewElementMain.src;
    const orgPathSide1 = previewElementSide1.src;
    const orgPathSide2 = previewElementSide2.src;
    const orgPathSide3 = previewElementSide3.src;
    previewElementMain.src = orgPathMain.substring(0, orgPathMain.length - 8) + intendedColor + ".png";
    previewElementSide1.src = orgPathSide1.substring(0, orgPathSide1.length - 8) + intendedColor + ".png";
    previewElementSide2.src = orgPathSide2.substring(0, orgPathSide2.length - 8) + intendedColor + ".png";
    previewElementSide3.src = orgPathSide3.substring(0, orgPathSide3.length - 8) + intendedColor + ".png";
}

//change filling
function changeFilling(intendedFilling) {
    rpillow.change_filling(intendedFilling);
    const fillingElements = document.getElementsByClassName('filling-name');
    for (let i = 0; i < fillingElements.length; i++) {
        fillingElements[i].style.borderWidth = '0.75px';
        fillingElements[i].style.borderColor = 'rgb(180,180,180)';
        fillingElements[i].style.backgroundColor = 'white';
    }
    if (intendedFilling === 'f1') {
        fillingElements[0].style.borderWidth = '1px';
        fillingElements[0].style.borderColor = 'black';
        fillingElements[0].style.backgroundColor = 'rgb(245, 245, 245)';
        extPriceOrg = document.getElementById('e1');
        extPrice1 = document.getElementById('e2');
        extPrice2 = document.getElementById('e3');
        extPriceOrg.style.display = 'none';
        extPrice1.style.display = 'inline';
        extPrice2.style.display = 'inline';
        extPrice1.innerHTML = "+ $30.00";
        extPrice2.innerHTML = "+ $60.00";
        rpillow.change_pricepc(60);
    }
    else if (intendedFilling === 'f2') {
        fillingElements[1].style.borderWidth = '1px';
        fillingElements[1].style.borderColor = 'black';
        fillingElements[1].style.backgroundColor = 'rgb(245, 245, 245)';
        extPriceOrg = document.getElementById('e2');
        extPrice1 = document.getElementById('e1');
        extPrice2 = document.getElementById('e3');
        extPriceOrg.style.display = 'none';
        extPrice1.style.display = 'inline';
        extPrice2.style.display = 'inline';
        extPrice1.innerHTML = "- $30.00";
        extPrice2.innerHTML = "+ $30.00";
        rpillow.change_pricepc(90);
    }
    else if (intendedFilling === 'f3') {
        fillingElements[2].style.borderWidth = '1px';
        fillingElements[2].style.borderColor = 'black';
        fillingElements[2].style.backgroundColor = 'rgb(245, 245, 245)';
        extPriceOrg = document.getElementById('e3');
        extPrice1 = document.getElementById('e1');
        extPrice2 = document.getElementById('e2');
        extPriceOrg.style.display = 'none';
        extPrice1.style.display = 'inline';
        extPrice2.style.display = 'inline';
        extPrice1.innerHTML = "- $60.00";
        extPrice2.innerHTML = "- $30.00";
        rpillow.change_pricepc(120);
    }
    rpillow.change_pricetl();
    document.getElementsByClassName('price')[0].innerHTML = '$'+rpillow.pricetl+'.00';
}

//open/close the cart
function toggleCart() {
    const bag = document.getElementById('shopping-bag');
    if (window.getComputedStyle(bag).visibility === 'hidden') { 
        bag.style.visibility = 'visible';
    } 
    else if (window.getComputedStyle(bag).visibility === 'visible') {
        bag.style.visibility = 'hidden';
    }
}

//change quantity
function toggleQt() {
    const drop = document.getElementById('dropdown-content');
    drop.style.visibility = 'visible';
}

function selectQt(qt) {
    const drop = document.getElementById('dropdown-content');
    const qtText = document.getElementsByClassName('quantity-name')[0];
    drop.style.visibility = 'hidden';
    qtText.innerHTML = qt;
    rpillow.change_quantity(qt);
    rpillow.change_pricetl();
    document.getElementsByClassName('price')[0].innerHTML = '$'+rpillow.pricetl+'.00';
}

//add to cart
function addToCart() {
    const itemNumber = document.getElementById('item-numbers');
    itemNumber.style.visibility = 'visible';
    const itemNumberText = document.getElementById('item-number-text');
    totalItem += rpillow.quantity;
    itemNumberText.innerHTML = totalItem;
}