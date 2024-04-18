function binaryAddition(bin1, bin2) {
    let carry = 0;
    let result = "";

    let num1 = bin1.split("").map(Number);
    let num2 = bin2.split("").map(Number);

    while (num1.length < num2.length) {
        num1.unshift(0);
    }
    while (num2.length < num1.length) {
        num2.unshift(0);
    }

    for (let i = num1.length - 1; i >= 0; i--) {
        let sum = num1[i] + num2[i] + carry;
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }

    if (carry) {
        result = carry + result;
    }

    return result;
}

let binary1 = "1010";
let binary2 = "1101";
let sum = binaryAddition(binary1, binary2);
console.log(sum);

function calculateSum() {
    let binary1 = document.getElementById("binary1").value;
    let binary2 = document.getElementById("binary2").value;
    let sum = binaryAddition(binary1, binary2);
    document.getElementById("sum").value = sum;
}