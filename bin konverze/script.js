function binaryToDecimal(binaryNumber) {
    let decimalNumber = 0;
    let power = 0;

    while (binaryNumber !== 0) {
        const lastDigit = binaryNumber % 10;
        decimalNumber += lastDigit * Math.pow(2, power);
        binaryNumber = Math.floor(binaryNumber / 10);
        power++;
    }

    return decimalNumber;
}

function decimalToBinary(decimalNumber) {
    let binaryNumber = "";

    while (decimalNumber > 0) {
        const remainder = decimalNumber % 2;
        binaryNumber = remainder + binaryNumber;
        decimalNumber = Math.floor(decimalNumber / 2);
    }

    return binaryNumber;
}

function convertBinaryToDecimal() {
    const binaryInput = document.getElementById("binaryInput").value;
    const decimalOutput = document.getElementById("decimalOutput");

    const decimalNumber = binaryToDecimal(parseInt(binaryInput));
    decimalOutput.textContent = decimalNumber;
}

function convertDecimalToBinary() {
    const decimalInput = document.getElementById("decimalInput").value;
    const binaryOutput = document.getElementById("binaryOutput");

    const binaryNumber = decimalToBinary(parseInt(decimalInput));
    binaryOutput.textContent = binaryNumber;
}