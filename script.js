window.onload= function () {
    initShoppingList ();
};

function initShoppingList () {
    let form = document.getElementById("item-form");
    form.addEventListener("submit", (event) => {
        handleItemForm (event, form );
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
    let id = getRandomInt(0, 10000000);


    // creates list item html and appends to page
    let itemHtml = createItemListHtml(itemName.value, itemAmount.value, id);
     console.log("Item Html: ", itemHtml)
     let itemListRef = document.getElementById("shopping-list");
     itemListRef.insertAdjacentHTML("afterend", itemHtml)

     setDeleteButtonEvent(id)

}


function setDeleteButtonEvent(id) {
    let deleteButton = document.getElementById("button"+id);
    deleteButton.addEventListener("click", ()=> {
        console.log("Delete Button Works");
    })

}



function createItemListHtml (itemName, itemAmount) {
    return `<li>
                ${itemName} - ${itemAmount}
                <button type="button"> Delete Item </button>
            </li>`;
}














