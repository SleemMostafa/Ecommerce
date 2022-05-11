

// //////////////////////////////////////////////////////////////////////////
document.querySelector("i").onclick = function () {

    this.classList.toggle("fa-spin");

    document.querySelector(".settingsBox").classList.toggle("open");

}

/////////////////////////////////////////////////////////////////////

document.querySelector("i").onclick = function () {


    this.classList.toggle("fa-spin");

    document.querySelector(".settingsBox").classList.toggle("open");

}

//********************* */



var price1 = 0;
var price2 = 0;
var price3 = 0;
var totalPrice = 0;
var totalTypes = 0;

var totalTypes1 = 0;
var totalTypes2 = 0;
var totalTypes3 = 0;




var priceDiv = document.getElementById("priceDiv");


var yourSelect = document.getElementById("selectID");


function addToCart() {


    var selectedValue = yourSelect.options[yourSelect.selectedIndex].value;




    var numberOfProducts = document.getElementById("numberOf").value;

    numberOfProducts = parseInt(numberOfProducts);
    if (selectedValue == 1500) {

        document.getElementById("priceHeader").innerHTML = "$30.00"
        price1 = (30 * numberOfProducts);

        totalPrice += price1;

        totalTypes1 += numberOfProducts;







    }

    else if (selectedValue == 2000) {

        price2 = (40 * numberOfProducts);

        totalPrice += price2;
        totalTypes2 += numberOfProducts;




    }
    else if (selectedValue == 2500) {

        price3 = (50 * numberOfProducts);

        totalPrice += price3;
        totalTypes3 += numberOfProducts;



    }

    totalTypes = totalTypes1 + totalTypes2 + totalTypes3;

    priceDiv.innerHTML = `total price = $ ${totalPrice} Number product = ${totalTypes}`;
}

function DiscardCart() {


    totalPrice = 0;

    priceDiv.innerHTML = "";

}

function BuyProduct() {

    if (totalPrice > 0) {
        totalPrice = 0;

        priceDiv.innerHTML = "";

        alert("Payment sucsseded")
    }

    else {
        alert("choose product first")
    }


}

function DisplayPrice() {

    var selectedNow = yourSelect.options[yourSelect.selectedIndex].value;


    if (selectedNow == 1500) {

        document.getElementById("priceHeader").innerHTML = "$30.00";

    }

    else if (selectedNow == 2000) {

        document.getElementById("priceHeader").innerHTML = "$40.00";

    }

    else if (selectedNow == 2500) {

        document.getElementById("priceHeader").innerHTML = "$50.00";

    }

}

//******************************************8 */

document.getElementById("productImg").src = localStorage.getItem("imgSrc");

document.getElementById("smallImg1").src = localStorage.getItem("imgSrc");
document.getElementById("smallImg2").src = localStorage.getItem("imgSrc");
document.getElementById("smallImg3").src = localStorage.getItem("imgSrc");
document.getElementById("smallImg4").src = localStorage.getItem("imgSrc");



//******************************************************* */




