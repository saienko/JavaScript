// Global Variable
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

// Show new Quote
function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
    // Styling Font size
    quote.text.length > 50 ? quoteText.classList.add('long-quote') : quoteText.classList.remove('long-quote');
    
    quoteText.textContent = quote.text; 
}


// Get Quotes from API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';

    try {
         const response = await fetch(apiUrl);
         apiQuotes = await response.json();
       newQuote();
    } catch (error) {
        
    }
}


// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);


// On Load
getQuotes();