window.onload = function() {
    initShoppingList ();
};

function initShoppingList (){
    let form= document.getElementById("item-form")
    console.log('test')
    form.addEventListener("submit", (event) => {
        handleItemForm(event, form);
    })
}



