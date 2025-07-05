
const quotes = [
  "The best way to predict the future is to invent it. – Alan Kay",
  "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "Believe you can and you’re halfway there. – Theodore Roosevelt",
  "Do not wait to strike till the iron is hot; but make it hot by striking. – William Butler Yeats",
  "I have not failed. I've just found 10,000 ways that won't work. – Thomas Edison",
  "It does not matter how slowly you go as long as you do not stop. – Confucius",
  "Act as if what you do makes a difference. It does. – William James",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
  "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
  "If you can dream it, you can do it. – Walt Disney",
  "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
  "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
  "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
  "Perseverance is not a long race; it is many short races one after the other. – Walter Elliot",
  "The future depends on what you do today. – Mahatma Gandhi",
  "Dream big and dare to fail. – Norman Vaughan",
  "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
  "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. – Roy T. Bennett",
  "Great minds discuss ideas; average minds discuss events; small minds discuss people. – Eleanor Roosevelt"
];

const quote = document.getElementById("quote");
const generateBtn = document.getElementById("generateBtn");


  // 🔢 Function to calculate a random index
  function getRandomIndex(arrLength) {
    return Math.floor(Math.random() * arrLength);
  }
  function generateQuote() {
    const index = getRandomIndex(quotes.length);
    quote.textContent = quotes[index];
  }


generateBtn.addEventListener("click", generateQuote);
