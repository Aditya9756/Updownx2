const API_URL = "https://tiranga-backend.onrender.com/api/result";

function placeBet(color) {
  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ betColor: color })
  })
  .then(response => response.json())
  .then(data => {
    const resultDiv = document.getElementById("result");
    if (data.winnerColor === color) {
      resultDiv.textContent = `You WON! Color was: ${data.winnerColor}`;
      resultDiv.style.color = "green";
    } else {
      resultDiv.textContent = `You LOST! Color was: ${data.winnerColor}`;
      resultDiv.style.color = "red";
    }
  })
  .catch(err => {
    console.error(err);
    document.getElementById("result").textContent = "Error connecting to server";
  });
}