console.log("works!");


const COST_PER_KM = 0.21;



let input


var element = document.getElementById("calcola");

element.addEventListener("click",

    function() {

        distance = document.getElementById("distance").value
        console.log(distance);

        discount = document.getElementById("discount").value
        console.log(discount);

        let billPrice = (distance * COST_PER_KM);

        let discountPrice = parseFloat(billPrice - (billPrice * discount)).toFixed(2);

        console.log(billPrice + " €");
        
        console.log(discount);
        console.log(discountPrice + " €");

        document.getElementById("bill_price").innerHTML = (discountPrice);
       

    }

)




