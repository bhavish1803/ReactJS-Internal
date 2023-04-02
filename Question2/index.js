function findSquareRoot(number) {
    if (isNaN(number) || typeof number === "string") {
        return "Invalid input. Please enter a valid number.";
    }

    if (number < 0) {
        return "Negative numbers are not allowed.";
    }

    const result = Math.sqrt(number);

    return result;
}

console.log(findSquareRoot(16));
console.log(findSquareRoot("hello"));
console.log(findSquareRoot(-9));
