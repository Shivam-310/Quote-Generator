 async function fetchQuote() {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    return data.content;
  }
  
  async function generateQuote() {
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = 'Loading...';
    const quote = await fetchQuote();
    quoteElement.textContent = quote;
  }
  