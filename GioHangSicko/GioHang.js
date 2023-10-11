let amountElement = document.getElementById('amount');
let amount = amountElement.value;
console.log(amount);

let render = (amount) => {
    amountElement.value = amount
}
let handlePlus = () => {
    amount++
    render(amount);
}
let handleMinus = () => {
    amount--
    render(amount);
}
amountElement.addEventListener('input', () => {
    amount = amountElement.value;
    amount = parseInt(amount);
    amount = (isNaN(amount) || amount == 0) ? 1 : amount;
    render(amount);
    console.log(amount);
});

