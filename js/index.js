let btn = document.querySelectorAll('.btn-contanir .btn');
let numberPeople = document.querySelector('.people');
let numberBill = document.querySelector('.num-bill');
let numAmount = document.querySelector('.numAmount');
let numTotle = document.querySelector('.numTotle');
let reast = document.querySelector('.reast');



    btn.forEach(ele => {

        ele.addEventListener('click', (e) => {
        
    
        let dataNum = ele.dataset.num;
        let numTip = dataNum * numberBill.value;
    
    
        numAmount.innerHTML = `$${Number.parseFloat(numTip / numberPeople.value).toFixed(2) }`;
        numTotle.innerHTML = `$${Number.parseFloat((+numberBill.value + +numTip) / numberPeople.value).toFixed(2)  }`;
        e.preventDefault();
    
    })
    })


reast.addEventListener('click' ,  () => {
    numAmount.innerHTML = `$0.00`;
    numTotle.innerHTML = `$0.00`;
    numberPeople.value = '';
    numberBill.value = '';
})


