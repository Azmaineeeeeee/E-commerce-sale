let productCount = 0;
let sum = 0;


const cards = document.querySelectorAll('.card-item');

for (let card of cards) {
    card.addEventListener('click', function () {
        productCount++;
        const productText = card.querySelector('.product-text').textContent.trim();
        const titleContainer = document.getElementById('title-container');

        let productPrice = card.querySelector('.product-price').textContent.trim();

        titleContainer.append(`${productCount}. ${productText}  ${productPrice}`)
        titleContainer.appendChild(document.createElement('br'));
        

        const totalPriceContainer = document.getElementById('totalPrice');

        const productNumber = parseFloat(productPrice.slice(2));

        sum += productNumber;
        totalPriceContainer.innerText = sum.toFixed(2);

        if(sum>=200){
            const inputField = document.getElementById('input-field');
            document.getElementById('coupon-text').classList.remove('hidden')
            document.getElementById("apply-btn").removeAttribute("disabled");
            inputField.classList.add('bg-red-200')  
        }

        
        applyCode();
       

})
}

function removeList(){
    document.getElementById('discountPrice').innerHTML = " ";
     document.getElementById('total').innerHTML = " ";
     document.getElementById('title-container').innerHTML = ' ';
     document.getElementById('totalPrice').innerHTML = '';
     sum = 0;
     document.getElementById("apply-btn").disabled = true;
     productCount = 0;
}









