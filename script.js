
const numbers = [1, 2, 3, 4, 5];
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }

    const result = document.getElementById("output");
    result.innerHTML = `The sum of the array elements is ${sum}.`;