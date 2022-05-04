const quotes = [
{
    quote: "When something is important enough, you do it even if the odds are not in your favor.",
    author: "Elon Musk"
},

{
    quote:"It always seems impossible until it's done.",
    author: "Nelson Mandela"
},

{
    quote: "If opportunity doesn't knock, build a door.",
    author: "Milton Berle"
},

{
    quote: "Common sense is the collection of prejudices acquired by age eighteen.",
    author: "Albert Einstein"
},

{
    quote: "I used to jog but the ice cubes kept falling out of my glass.",
    author: "David Lee Roth"
},

{
    quote: "Somewhere, something incredible is waiting to be known.",
    author: "Sharon Begley"
},

{
    quote: "Let every dawn be to you as the beginning of life, and every setting sun be to you as its close.",
    author: "John Ruskin"
},
{
    quote: "Every story I create, creates me. I write to create myself.",
    author: "Octavia E. Butler"
},
{
    quote: "Either I will find a way, or I will make one.",
    author: "Philip Sidney"
},
{
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
},
]

const qutebtn = document.getElementById('btn');
const randomQuote = document.getElementById('quote');
const randomauthor = document.querySelector('.quoteauthor');

qutebtn.addEventListener('click', () => {
    getRandomQuote = () => Math.floor(Math.random() * Math.floor(quotes.length));
    randomQuote.textContent = quotes[getRandomQuote()].quote;
    randomauthor.textContent = quotes[getRandomQuote()].author;
})
