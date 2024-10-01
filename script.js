function appendToResult(value) {
    const resultField = document.getElementById('result');
    resultField.value += value;
}

function clearResult() {
    const resultField = document.getElementById('result');
    resultField.value = '';
}

function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value);
    } catch {
        resultField.value = 'Error';
    }
}

function calculateSquareRoot() {
    const resultField = document.getElementById('result');
    try {
        const result = Math.sqrt(eval(resultField.value));
        resultField.value = result;
    } catch {
        resultField.value = 'Error';
    }
}
