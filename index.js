let number = document.getElementById('number').value;
const button = document.getElementById('go');
let result = document.querySelector('.result');

let array = []

for (i = 0; i < number.length; i++) {
    array[i] = number[i];
}

function letsGo() {

    let showNumber = document.createElement('p');
    showNumber.innerHTML = "Цифры числа: " + array;
    result.appendChild(showNumber);

    let count = document.createElement('p');
    count.innerHTML = "Длина числа: " + number.length;
    result.appendChild(count);

    let sumDiv = document.createElement('p');
    let sumNumber = array.reduce(function (sum, elem) {
        return Number(sum) + Number(elem);
    }, 0);
    sumDiv.innerHTML = "Сумма всех цифр: " + sumNumber;
    result.appendChild(sumDiv);


    let reverse = document.createElement('p');
    reverse.innerHTML = "Число наоборот: " + array.reverse();
    result.appendChild(reverse);

}
button.addEventListener('click', letsGo);