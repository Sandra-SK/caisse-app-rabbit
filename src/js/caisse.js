///// caisses





//définition et création des produits /////////////////////////////////////////
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price; 
    }
   
}
    
const list = [
    new Product("pizza", 2),
    new Product("sandwich", 3),
    new Product("quiche", 2),
    new Product("consigne", 1),
    new Product("soft", 1.50),
    new Product("crèpe", 1.50),
    new Product("consigne", -1),
];


//creation des bouttons //////////////////////////////////////
//boutons produits
function createButton(product) {
    const button = document.createElement("button");
    button.innerHTML = `${product.name} :<br><span>${product.price.toFixed(2)}€</span>`;
    button.addEventListener("click", () => {
        displayTotal(product.price);
    });
    return button;
}

const totalContainer = document.getElementById("totalContainer");
const container = document.createElement("div");
container.classList = "productButtons-container";

//bouton clear/reset
list.forEach(product => {
    const button = createButton(product);
    container.appendChild(button);
});

totalContainer.parentNode.insertBefore(container, totalContainer);


// fonction qui permet d'afficher le total du ticket au click du bouton correspondant
function displayTotal(price) {
    let currentTotal = parseFloat(document.getElementById("totalAmount").textContent);
    currentTotal += price;
    document.getElementById("totalAmount").textContent = currentTotal.toFixed(2) + "€";
}


// fonction pour clear le total au click du bouton correspondant
function clearTotal() {
    document.getElementById("totalAmount").textContent = "0.00€";
}
document.getElementById("clearTotal").addEventListener("click", () => {
    clearTotal();
})
