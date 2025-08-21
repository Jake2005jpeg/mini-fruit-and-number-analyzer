function analyze() {
  const username = document.getElementById("username").value.trim();
  const userNumber = parseFloat(document.getElementById("userNumber").value);
  const sentence = document.getElementById("sentence").value.trim();
  const fruits = [
    document.getElementById("fruit1").value.trim(),
    document.getElementById("fruit2").value.trim(),
    document.getElementById("fruit3").value.trim()
  ];

  if (!username || isNaN(userNumber) || !sentence || fruits.some(f => !f)) {
    document.getElementById("result").innerHTML = `<p>Please fill out all fields correctly.</p>`;
    return;
  }

  let output = "";


  const baseNumber = 10;
  output += `<h3>1. Variables & Constant Arithmetic</h3>`;
  output += `<p>Base Number: ${baseNumber}</p>`;
  output += `<p>Sum: ${baseNumber + userNumber}</p>`;
  output += `<p>Difference: ${baseNumber - userNumber}</p>`;
  output += `<p>Product: ${baseNumber * userNumber}</p>`;
  output += `<p>Quotient: ${(baseNumber / userNumber).toFixed(2)}</p>`;

  output += `<h3>2. String & String Methods</h3>`;
  output += `<p>Original Sentence: "${sentence}"</p>`;
  output += `<p>Uppercase: ${sentence.toUpperCase()}</p>`;
  output += `<p>Lowercase: ${sentence.toLowerCase()}</p>`;

  output += `<h3>3. If Statement & Ternary Operator</h3>`;
  if (userNumber >= 0) {
    output += `<p>If Statement: ${userNumber} is Positive</p>`;
  } else {
    output += `<p>If Statement: ${userNumber} is Negative</p>`;
  }
  output += `<p>Ternary Operator: ${userNumber >= 0 ? "Positive" : "Negative"}</p>`;

  output += `<h3>4. Loops</h3>`;
  output += `<p>For Loop (1 to ${userNumber}): `;
  for (let i = 1; i <= userNumber && i <= 20; i++) {
    output += `${i} `;
  }
  output += `</p>`;

  output += `<p>While Loop (countdown from 5): `;
  let count = 5;
  while (count > 0) {
    output += `${count} `;
    count--;
  }
  output += `</p>`;

  function greetUsername(name) {
    return `Hello, ${name}!`;
  }

  output += `<h3>5. Functions & Arrays</h3>`;
  output += `<p>${greetUsername(username)}</p>`;
  output += `<p>Your favorite fruits are: ${fruits.join(", ")}</p>`;

  document.getElementById("result").innerHTML = output;
}
