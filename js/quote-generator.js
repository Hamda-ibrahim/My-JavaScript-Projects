const quotes = [{
  quote: "The only way to do great work is to love what you do.",
  author: "Steve Jobs",
},
 {
  quote: "In the middle of every difficulty lies opportunity.",
  author: "Albert Einstein",            
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",            
  },
  {
  quote: "Life is what happens when you're busy making other plans.",
  author: "John Lennon",            
  },
  {
  quote: "The future belongs to those who believe in the beauty of their dreams.",
  author: "Eleanor Roosevelt",            
  },
  { 
    quote: "You miss 100% of the shots you don't take.", 
    author: "Wayne Gretzky" 
},
{ 
    quote: "The harder I work, the luckier I get.", 
    author: "Samuel Goldwyn" 
},
{ 
    quote: "Dream big and dare to fail.", 
    author: "Norman Vaughan"
},
{ 
    quote: "What you get by achieving your goals is not as important as what you become.", author: "Thoreau" 
},
{ 
    quote: "Push yourself, because no one else is going to do it for you.", 
    author: "Unknown" 
},
{ 
    quote: "Great things never come from comfort zones.", 
    author: "Unknown" 
},
{ 
    quote: "Don't stop when you're tired. Stop when you're done.", 
    author: "Unknown" 
},
{ 
    quote: "Wake up with determination. Go to bed with satisfaction.", 
    author: "Unknown" },
{ 
    quote: "Little things make big days.", 
    author: "Unknown" 
},
                
];

const quoteElement = document.querySelector('.quote');
const authorElement = document.querySelector('.author');
const containerElement = document.querySelector('.container');
const generatedColor = document.querySelector('.color');

let previousIndex = -1;

generateQuote();

function generateQuote(){
  
  let randomQuote = Math.floor(Math.random() * quotes.length);

    
  while(randomQuote === previousIndex){
    randomQuote = Math.floor(Math.random() * quotes.length);
  }

   previousIndex = randomQuote;

  
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  
  console.log(randomColor);
  
  
  const generatedQuote = quotes[randomQuote];
  
  quoteElement.innerHTML = generatedQuote.quote;
  authorElement.innerHTML = generatedQuote.author;
  
  containerElement.style.backgroundColor = randomColor;

  generatedColor.innerHTML = randomColor;
  
  console.log(quoteElement);
  
}