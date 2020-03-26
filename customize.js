//creating pillow object
class Pillow {
    constructor(style, color, filling, quantity, pricepc, pricetl) {
        this._style = style;
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
if (localStorage.getItem("itemList") === null) {
    let itemList = [];
    localStorage.setItem("itemList", JSON.stringify(itemList));
}
const rpillow = new Pillow('Round','oran','Duck Down', 1, 60, 60);
if (localStorage.getItem("totalItem") === null) {
    let totalItem = 0;
    localStorage.setItem("totalItem", JSON.stringify(totalItem));
}
let presentedNum = 0;

function displayOption() {
    let totalItem = JSON.parse(localStorage.getItem("totalItem"));
    const itemNumber = document.getElementById('item-numbers');
    const itemNumberText = document.getElementById('item-number-text');
    if (totalItem === 0) {
        itemNumber.style.visibility = 'hidden';
    } else {
        itemNumberText.innerHTML = totalItem;
        itemNumber.style.visibility = 'visible';
    }
}

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
    const fillingElements = document.getElementsByClassName('filling-name');
    for (let i = 0; i < fillingElements.length; i++) {
        fillingElements[i].style.borderWidth = '0.75px';
        fillingElements[i].style.borderColor = 'rgb(180,180,180)';
        fillingElements[i].style.backgroundColor = 'white';
    }
    if (intendedFilling === 'f1') {
        rpillow.change_filling('Duck Down');
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
        rpillow.change_filling('Hypoallergenic Poly-blend');
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
        rpillow.change_filling('Memory Foam');
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
    let items = JSON.parse(localStorage.getItem("itemList"));
    let subtotalSmall = document.getElementById('subtotal');
    let checkOutButton = document.getElementById('select-button-check-out');
    if (window.getComputedStyle(bag).visibility === 'hidden') { 
        bag.style.visibility = 'visible';
        if (items.length === 0) {
            if (document.getElementById('nothingInBag') === null) {
                nothingBag = document.createElement("p");
                nothingBag.appendChild(document.createTextNode("Nothing in your bag."));
                nothingBag.setAttribute("id", "nothingInBag");
                bag.appendChild(nothingBag);
                nothingBag.style.fontFamily = 'Roboto';
                nothingBag.style.fontSize = '25px';
                nothingBag.style.fontWeight = '300';
                nothingBag.style.marginBottom = '325px';
                nothingBag.style.transform = 'scale(1.1, 1)';
                nothingBag.style.color = 'rgb(180,180,180)';
            }
            bag.style.height = '150px';
        } else if (items.length > 0) {
            if (document.getElementById('nothingInBag') !== null) {
                let toBeRemoved = document.getElementById('nothingInBag');
                toBeRemoved.parentNode.removeChild(toBeRemoved);
            }
            let totalAmount = 0;
            let windowHeight = 220 + 110 * items.length;
            bag.style.height = windowHeight + "px";
            bag.style.gridTemplateRows= 110 * items.length + "px 120px 70px";
            let itemDetails = document.getElementById('items-purchased');
            itemHeightInd = '110px ';
            itemDetails.style.gridTemplateRows = itemHeightInd.repeat(items.length).trim();
            subtotalSmall.style.visibility = 'visible';
            checkOutButton.style.visibility = 'visible';
            for (let i = 0; i < presentedNum; i++) {
                let inspectItem = document.getElementById('item' + (i+1));
                inspectItem.style.visibility = 'visible';
            }
            for (let i = presentedNum; i < items.length; i++) {
                if (i > 0) {
                    prevNode = document.getElementById('item' + i);
                    newNode = prevNode.cloneNode(true);
                    newNode.setAttribute("id",("item"+(i+1)));
                    itemDetails.appendChild(newNode);
                }
                let inspectItem = document.getElementById('item' + (i+1));
                inspectItem.style.visibility = 'visible';
                inspectItem.childNodes[1].setAttribute("src", "Photos/RoundPillowMains-" + items[i]._color + ".png");
                inspectItem.childNodes[3].childNodes[1].innerHTML = items[i]._style + " Pillow";
                if (items[i]._color === 'oran') {
                    inspectItem.childNodes[3].childNodes[3].innerHTML = 'After School Special<br />' + items[i]._filling;
                } else if (items[i]._color === 'grey') {
                    inspectItem.childNodes[3].childNodes[3].innerHTML = 'Morning Haze<br />' + items[i]._filling;
                } else if (items[i]._color === 'deni') {
                    inspectItem.childNodes[3].childNodes[3].innerHTML = 'Cozy Denim<br />' + items[i]._filling;
                } else if (items[i]._color === 'blue') {
                    inspectItem.childNodes[3].childNodes[3].innerHTML = 'Rainy Day<br />' + items[i]._filling;
                }
                presentedNum++;
            }
            for (let i = 0; i < presentedNum; i++) {
                let inspectItem = document.getElementById('item'+ (i+1));
                totalAmount += items[i]._pricetl;
                inspectItem.childNodes[3].childNodes[5].innerHTML = "$"+items[i]._pricepc+".00";
                inspectItem.childNodes[5].setAttribute('onclick', 'deleteItem('+(i+1)+')');
                inspectItem.childNodes[7].childNodes[1].innerHTML = items[i]._quantity;
                inspectItem.style.borderBottomWidth = '';
                inspectItem.style.borderBottomColor = '';
                inspectItem.style.borderBottomStyle = '';
            }
            let lastItem = document.getElementById('item'+presentedNum);
            lastItem.style.borderBottomWidth = '0.75px';
            lastItem.style.borderBottomColor = 'rgb(180,180,180)';
            lastItem.style.borderBottomStyle = 'solid';
            let subtotalAmountText = document.getElementById('subtotal-small');
            let taxAmountText = document.getElementById('tax-small');
            let totalText = document.getElementById('total-small');
            subtotalAmountText.innerHTML = '$'+totalAmount+'.00';
            taxAmountText.innerHTML = '$'+parseFloat(totalAmount*0.07).toFixed(2);
            totalText.innerHTML = '$'+parseFloat(totalAmount*1.07).toFixed(2);
        }
    }
    else if (window.getComputedStyle(bag).visibility === 'visible') {
        bag.style.visibility = 'hidden';
        subtotalSmall.style.visibility = 'hidden';
        checkOutButton.style.visibility = 'hidden';
        for (let i = 1; i < items.length + 1; i++) {
            let checkID = 'item' + i;
            document.getElementById(checkID).style.visibility = 'hidden';
        }
    }
}

function closeCart() {
    const bag = document.getElementById('shopping-bag');
    let items = JSON.parse(localStorage.getItem("itemList"));
    let subtotalSmall = document.getElementById('subtotal');
    let checkOutButton = document.getElementById('select-button-check-out')
    bag.style.visibility = 'hidden';
    subtotalSmall.style.visibility = 'hidden';
    checkOutButton.style.visibility = 'hidden';
    for (let i = 1; i < items.length + 1; i++) {
        let checkID = 'item' + i;
        document.getElementById(checkID).style.visibility = 'hidden';
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
    let contained = false;
    let totalItem = JSON.parse(localStorage.getItem("totalItem")); 
    const itemNumber = document.getElementById('item-numbers');
    itemNumber.style.visibility = 'visible';
    const itemNumberText = document.getElementById('item-number-text');
    totalItem += rpillow.quantity;
    localStorage.setItem("totalItem", JSON.stringify(totalItem));
    itemNumberText.innerHTML = totalItem;
    let items = JSON.parse(localStorage.getItem("itemList"));
    for (let i = 0; i < items.length; i++) {
        let cur = items[i];
        if ((cur._style === rpillow._style) && (cur._color === rpillow._color) && (cur._filling === rpillow._filling)) {
            cur._quantity = cur._quantity + rpillow.quantity;
            cur._pricetl = cur._quantity * cur._pricepc;
            contained = true;
            break;
        }
    }
    if (!contained) {
        items.push(rpillow);
    }
    localStorage.setItem("itemList", JSON.stringify(items));
}

function deleteItem(itemNum) {
    const itemNumber = document.getElementById('item-numbers');
    const itemNumberText = document.getElementById('item-number-text');
    let itemDetails = document.getElementById('items-purchased');
    const bag = document.getElementById('shopping-bag');
    let items = JSON.parse(localStorage.getItem("itemList"));
    let numRemoved = items[itemNum-1]._quantity;
    presentedNum--;
    items.splice(itemNum - 1, 1);
    if (presentedNum > 0) {
        let toBeRemoved = document.getElementById('item'+itemNum);
        toBeRemoved.parentNode.removeChild(toBeRemoved);
        itemHeightInd = '110px ';
        itemDetails.style.gridTemplateRows = itemHeightInd.repeat(presentedNum).trim();
        let windowHeight = 220 + 110 * presentedNum;
        bag.style.height = windowHeight + "px";
        bag.style.gridTemplateRows= 110 * presentedNum + "px 120px 70px";
        for (let i = itemNum; i < presentedNum + 1; i++) {
            let inspectItem = document.getElementById('item' + (i+1));
            inspectItem.setAttribute("id", 'item'+i);
            inspectItem.childNodes[5].setAttribute('onclick', 'deleteItem('+i+')');
        }
        let totalAmount = 0;
        for (let i = 0; i < presentedNum; i++) {
            let inspectItem = document.getElementById('item' + (i+1));
            totalAmount += items[i]._pricetl;
            inspectItem.style.borderBottomWidth = '';
            inspectItem.style.borderBottomColor = '';
            inspectItem.style.borderBottomStyle = '';
        }
        let lastItem = document.getElementById('item' + presentedNum);
        lastItem.style.borderBottomWidth = '0.75px';
        lastItem.style.borderBottomColor = 'rgb(180,180,180)';
        lastItem.style.borderBottomStyle = 'solid';
        let subtotalAmountText = document.getElementById('subtotal-small');
        let taxAmountText = document.getElementById('tax-small');
        let totalText = document.getElementById('total-small');
        subtotalAmountText.innerHTML = '$'+totalAmount+'.00';
        taxAmountText.innerHTML = '$'+parseFloat(totalAmount*0.07).toFixed(2);
        totalText.innerHTML = '$'+parseFloat(totalAmount*1.07).toFixed(2);
    } else {
        let subtotalSmall = document.getElementById('subtotal');
        let checkOutButton = document.getElementById('select-button-check-out');
        subtotalSmall.style.visibility = 'hidden';
        checkOutButton.style.visibility = 'hidden';
        itemDetails.style.visibility = 'hidden';
        itemNumber.style.visibility = 'hidden';
        bag.style.height = '150px';
        if (document.getElementById('nothingInBag') === null) {
            nothingBag = document.createElement("p");
            nothingBag.appendChild(document.createTextNode("Nothing in your bag."));
            nothingBag.setAttribute("id", "nothingInBag");
            bag.appendChild(nothingBag);
            nothingBag.style.fontFamily = 'Roboto';
            nothingBag.style.fontSize = '25px';
            nothingBag.style.fontWeight = '300';
            nothingBag.style.marginBottom = '325px';
            nothingBag.style.transform = 'scale(1.1, 1)';
            nothingBag.style.color = 'rgb(180,180,180)';
        }
    }
    let totalItem = JSON.parse(localStorage.getItem("totalItem"));
    totalItem-=numRemoved;
    itemNumberText.innerHTML = totalItem;
    localStorage.setItem("totalItem", JSON.stringify(totalItem));
    localStorage.setItem("itemList", JSON.stringify(items));
}