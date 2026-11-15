let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;

    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;

}

let Grocerie1;
let Grocerie2;
let Grocerie3;

function calculateGrocerie() {
    Grocerie1 = parseFloat(document.getElementById('Grocerie1').value);
    Grocerie2 = parseFloat(document.getElementById('Grocerie2').value);
    Grocerie3 = parseFloat(document.getElementById('Grocerie3').value);

    let Groceries = Grocerie1 + Grocerie2 + Grocerie3;

    document.getElementById('resultGrocerie').innerText = `The total groceries is: ${Groceries}`;

}