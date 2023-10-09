// Objective 1: Calculator with Promises
document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;

    calculator(num1, num2, operation)
        .then(result => {
            document.getElementById('calculatorResult').innerText = `Result: ${result}`;
        })
        .catch(error => {
            document.getElementById('calculatorResult').innerText = `Error: ${error}`;
        });
});

function calculator(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        if (operation === '+') {
            resolve(num1 + num2);
        } else if (operation === '-') {
            resolve(num1 - num2);
        } else if (operation === '*') {
            resolve(num1 * num2);
        } else if (operation === '/') {
            if (num2 !== 0) {
                resolve(num1 / num2);
            } else {
                reject("Error: Division by zero");
            }
        } else {
            reject("Error: Invalid operation");
        }
    });
}

// Objective 2: Custom Iterator for Squares
document.getElementById('squaresForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numbers = document.getElementById('numbers').value.split(',').map(Number);

    const squareList = document.getElementById('squareList');
    squareList.innerHTML = '';

    for (const num of numbers) {
        const listItem = document.createElement('li');
        listItem.innerText = `Square of ${num}: ${num ** 2}`;
        squareList.appendChild(listItem);
    }
});

// Objective 3: Generate Prime Numbers with Generator Function
document.getElementById('primesForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const limit = parseInt(document.getElementById('limit').value);

    const primeList = document.getElementById('primeList');
    primeList.innerHTML = '';

    const primeGenerator = generatePrimes(limit);
    for (const prime of primeGenerator) {
        const listItem = document.createElement('li');
        listItem.innerText = prime;
        primeList.appendChild(listItem);
    }
});

function* generatePrimes(limit) {
    let num = 2;
    while (num <= limit) {
        if (isPrime(num)) {
            yield num;
        }
        num++;
    }
}

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num !== 1;
}
