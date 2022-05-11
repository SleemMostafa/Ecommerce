document.querySelector("i").onclick = function () {
    this.classList.toggle("fa-spin");
    document.querySelector(".settingsBox").classList.toggle("open");
}
const nameUs = document.getElementById("userNameReg");
var passwordUs = document.getElementById("passReg");
var passCon = document.getElementById("passConfirm");
const formm = document.getElementById("formm");
formm.addEventListener("submit", (e) => {
    let flag1 = 0;
    let flag2 = 0;
    if (passCon.value != passwordUs.value) {
        document.getElementById("errorPassConfirm").innerHTML = "password not matching ";
        e.preventDefault();
    }


    if (nameUs.value === '' || nameUs.value == null) {
        flag1 = 1;
    }

    if (passwordUs.value.length < 6) {

        flag2 = 2;
    }

    if (flag1 > 0 || flag2 > 0) {
        if (flag1 == 1) {
            document.getElementById("errorName").innerHTML = "Name is required";
            e.preventDefault();

        }

        if (flag1 == 0) {
            document.getElementById("errorName").innerHTML = "";

        }

        if (flag2 == 2) {

            document.getElementById("errorPass").innerHTML = "password must be more than SiX Number";
            e.preventDefault();

        }

        if (flag2 == 0) {
            document.getElementById("errorSpan").innerHTML = "";
        }
        // if (passwordUs.value == passConfirm.value) {
        //     document.getElementById("errorPassConfirm").innerHTML = "";
        // }
    }
})
//End Register
// login start
function checkFun() {
    var check = document.getElementById("checkBox").checked;

    if (check) {
        localStorage.setItem("userN", document.getElementById("userName").value);
        localStorage.setItem("passW", document.getElementById("pass").value);

    }
    else {

        localStorage.removeItem("userN");
        localStorage.removeItem("passW");

    }
}
document.getElementById("userName").value = localStorage.getItem("userN");
document.getElementById("pass").value = localStorage.getItem("passW");
// login end






function goToCart(e) {

    localStorage.setItem("imgSrc", e.src);


    window.open("../html/showProduct.html");


}


function goToCartElec(e) {

    localStorage.setItem("imgSrc", e.src);


    window.open("../html/showProductElectric.html");


}

function goToCartCell(e) {

    localStorage.setItem("imgSrc", e.src);


    window.open("../html/showProductCell.html");


}


