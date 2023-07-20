// Function to calculate the love percentage
function calculateLovePercentage(yourName, partnerName) {
  const lovePercentage = Math.floor(Math.random() * 101); // Random percentage between 0 and 100
  return lovePercentage;
}

// Function to display the result
function displayResult(lovePercentage) {
  const resultDiv = document.querySelector(".result");
  resultDiv.innerHTML = `<div class="alert alert-success text-center">Love Percentage: ${lovePercentage}%</div>`;
}

// Event listener for form submission
document
  .getElementById("loveCalculatorForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const yourName = document.getElementById("yourName").value.trim();
    const partnerName = document.getElementById("partnerName").value.trim();

    if (yourName === "" || partnerName === "") {
      alert("Please enter both names.");
      return;
    }

    const lovePercentage = calculateLovePercentage(yourName, partnerName);
    displayResult(lovePercentage);
  });
