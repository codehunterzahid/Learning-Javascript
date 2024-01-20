/*
const URl = "https://catfact.ninja/fact";
const para = document.querySelector("#showData");
const btn = document.querySelector("#getapi");

const catFacts = async () =>{
    let response = await fetch (URl);
    console.log(response);
    let finalData = await response.json();
    para.innerText = finalData.fact;
};

btn.addEventListener("click",catFacts);
*/

// Point of Sale system

function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function myCart() {
    this.products = [];
  }
  
  myCart.prototype.addProduct = function(product) {
    this.products.push(product);
  };
  
  myCart.prototype.totalAmount = function() {
    return this.products.reduce((total, product) => {
      console.log(`${product.name}: ${product.price}`);
      return total + product.price;
    }, 0);
  };
  
  let product1 = new Product("Biryani Masala", 80);
  let product2 = new Product("Rice", 156);
  let product3 = new Product("Yogurt", 100);
  let product4 = new Product("Coke", 196);
  
  let cart = new myCart();
  
  cart.addProduct(product1);
  cart.addProduct(product2);
  cart.addProduct(product3);
  cart.addProduct(product4);
  
  let total = cart.totalAmount();
  console.log(`Total: ${total}`);  
  
