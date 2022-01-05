window.onload= function () {
    initShoppingList ();
};

function initShoppingList () {
    let form = document.getElementById("item-form");

    form.addEventListener("submit", (event) => {
        handleItemForm ();
    });
}

function handleItemForm (event, formRef) {
    if (event.preventDefault()) {
        event.preventDefault();
    }
    addItemToShoppingList();
    console.log("hello world")
    return false;
}














