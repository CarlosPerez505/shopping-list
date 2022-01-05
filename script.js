window.onload= function () {
    initShoppingList ();
};

function initShoppingList () {
    let form = document.getElementById("item-form");

    form.addEventListener("submit", (event) => {
        handleItemForm ( );
    });
}

function handleItemForm (event, formRef) {
    if (event.preventDefault) {
        event.preventDefault();
    }
    addItemToShoppingList();

    return false;
}

 function addItemToShoppingList () {
    let itemName = document.getElementById("item-name");
    let itemAmount = document.getElementById("item-amount")

    // creates list item html and appends to page
    let itemHtml = createItemListHtml(itemName.value, itemAmount);
     console.log("Item Html: ", itemHtml)
     let itemListRef = document.getElementById("shopping-list");
     itemListRef.insertAdjacentHTML("afterend", itemHtml)

}


function createItemListHtml (itemName, itemAmount) {
    return `<li>
                ${itemName} - ${itemAmount}
            </li>`;
}














