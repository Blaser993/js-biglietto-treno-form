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


        let billPrice = parseFloat((distance * COST_PER_KM) * discount ).toFixed(2);
        console.log(billPrice + " €");
        document.getElementById("bill_price").innerHTML = (billPrice)


    }

)




