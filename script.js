console.log("works!");


const COST_PER_KM = 0.21;


var element = document.getElementById("calcola");

element.addEventListener("click",

    function() {

        distance = document.getElementById("distance").value

        discount = document.getElementById("discount").value

        let billPrice = (distance * COST_PER_KM);
        let discountPrice = parseFloat(billPrice - (billPrice * discount)).toFixed(2);

        document.getElementById("bill_price").innerHTML = (discountPrice + " €");

    }

)




