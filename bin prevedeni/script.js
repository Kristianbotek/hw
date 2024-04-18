const numbers = [9, 5, 15, 22, 36, 48, 96];

numbers.forEach(number => {
    const binary = number.toString(2);
    console.log(`${number} v binárním systému je ${binary}`);
});