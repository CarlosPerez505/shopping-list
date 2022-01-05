window.onload= function () {
    initShoppingList ();
};

function initShoppingList () {
    let form = document.getElementById("item-form")

    from.addEventListener("submit", (event) => {
        handleItemForm(event, from);
    })
}

function handleItemForm(event, formRef) {
    if(event.preventDefault()) {
        event.preventDefault();
    }
    console.log("Event: ", event);

    return false;
}














