
const quotes = [
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    { text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Anonymous" }
];


const jokeBtn = document.getElementById("jokeBtn");
  const jokeText = document.getElementById("joke");

  // 🔢 Function to calculate a random index
  function getRandomIndex(arrLength) {
    return Math.floor(Math.random() * arrLength);
  }
  function generateQuote() {
    const index = getRandomIndex(quotes.length);
    const joke = quotes[index];
    jokeText.textContent = joke;
  }

  // 🎯 Attach event listener to the button
  jokeBtn.addEventListener("click", generateJoke);
  // 🧠 Use the function inside the event listener
//   jokeBtn.addEventListener("click", () => {
//     const randomIndex = getRandomIndex(jokes.length);
//     jokeText.textContent = jokes[randomIndex];