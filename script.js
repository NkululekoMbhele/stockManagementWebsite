// ============== Variables =============

var Items1 = 0;
var Average1 = 0;



var Items2 = 0;
var Average2 = 0;


var Items3 = 0;
var Average3 = 0;




var product1Item = [];
var product1Price = [];

var product2Item = [];
var product2Price = [];

var product3Item = [];
var product3Price = [];

// product 1

var noItems1 = document.querySelector("#noItems1");
var average1 = document.querySelector("#average1");


// product 2


var noItems2 = document.querySelector("#noItems2");
var average2 = document.querySelector("#average2");



// product 3



var noItems3 = document.querySelector("#noItems3");
var average3 = document.querySelector("#average3");






// ********* Add Product **********

function addItems(form) {
  
    var option = form.products.value;
    var number = form.itemsCount.value;
    var price = form.itemsPrice.value;
      if (option === "1") {
        product1Item.push(number);
        product1Price.push(price);
        console.log("option 1");
    }
    else if (option === "2") {
        product2Item.push(number);
        product2Price.push(price);
        console.log("option 2");
    }
    else if (option === "3") {
        product3Item.push(number);
        product3Price.push(price);
        console.log("option 3");
    }
   
    Items1 = 0;
    for (let i = 0; i < product1Item.length; i++) {
        Items1 = parseInt(Items1) + parseInt(product1Item[i]);
        
    }
    Items2 = 0;
    for (let i = 0; i < product2Item.length; i++) {
        Items2 = parseInt(Items2) + parseInt(product2Item[i]);       
    }
    Items3 = 0;
    if (product3Item.length > 0) {
    for (let i = 0; i < product3Item.length; i++) {
        Items3 = parseInt(Items3) + parseInt(product3Item[i]);
        
        }
    }

// averages 

    Average1 = 0;
    if (product1Item.length > 0) {
    for (let i = 0; i < product1Item.length; i++) {
        Average1 = parseInt(Average1) + parseInt(product1Price[i]);       
    }
    Average1 = parseInt(Average1) / parseInt(product1Item.length);
    Average1 = Math.round(Average1);
}
    

    Average2 = 0;
    if (product2Item.length > 0) {
    for (let i = 0; i < product2Item.length; i++) {
        Average2 = parseInt(Average2) + parseInt(product2Price[i]);       
    }
    Average2 = parseInt(Average2) / parseInt(product2Item.length);
    Average2 = Math.round(Average2);
}


    Average3 = 0;
    if (product3Item.length > 0) {
        for (let i = 0; i < product3Item.length; i++) {
        Average3 = parseInt(Average3) + parseInt(product3Price[i]);       
    }
    Average3 = parseInt(Average3) / parseInt(product3Item.length);
    Average3 = Math.round(Average3);

    }
    

// Output To The DOM

noItems1.innerHTML = Items1;
average1.innerHTML = Average1;

noItems2.innerHTML = Items2;
average2.innerHTML = Average2;


noItems3.innerHTML = Items3;
average3.innerHTML = Average3;

    form.reset();


}




// ********* Remove Product **********

var usedEmail = [];
function removeItems(form) {
    
    var option = form.products.value;
    var email = form.email.value;
    var number = form.itemsCount.value;

    var pushEmail = true;
    for (let i =0; i<usedEmail.length; i++) {
        if (email === usedEmail[i]) {
            alert("Email Already Used To Remove Stock");
            pushEmail = false;
            break;
        }
    }
    if (pushEmail) {

        usedEmail.push(email);
    }

    if (option === "1") {
        Items1 = Items1 - parseInt(number);
        
    }
    else if (option === "2") {
        Items2 = Items2 - parseInt(number);
       
    }
    else if (option === "3") {
        Items3 = Items3 - parseInt(number);
       
    }

    noItems1.innerHTML = Items1;
    average1.innerHTML = Average1;

    noItems2.innerHTML = Items2;
    average2.innerHTML = Average2;


    noItems3.innerHTML = Items3;
    average3.innerHTML = Average3;
   

    form.reset();

}



