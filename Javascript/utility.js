function applyCode(){
    const inputField = document.getElementById('input-field');
    const inputValue = inputField.value;

   const inputText = inputValue.split(' ').join("").toUpperCase();

    if(inputText === 'SELL200' && sum >=200){
        document.getElementById('discountPrice').innerText = Math.round(sum * (20/100));
        document.getElementById('total').innerText = Math.ceil((sum - sum * (20/100)));
        inputField.value = '';
    }
    else{
    
        document.getElementById('total').innerText = sum; 
    }

   if(sum>=200 && inputText !== 'SELL200' && inputText !== '' ){
    alert('Please insert a valid coupon');
    inputField.value = '';
    
   }

}






