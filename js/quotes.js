const quotes = [
    {
        quote: "Love all, trust a few. Do wrong to none.",
        author: "William Shakespeare"
    },
    {
        quote: "If you want to build a ship, don't drum up the men to gather wood, divide the work and give orders. Instead, teach them to yearn for the vast and endless sea.",
        author: "Antoine de Saint-Exupery"
    },
    {
        quote: "The world is full of suffering but it is also full of people overcoming it.",
        author: "Helen Keller"
    },
    {
        quote: "Your happiness is defined by what makes your spirit sing.",
        author: "Nancy Sullivan"
    },
    {
        quote: "Get not your friends by bare compliments, but by giving them sensible tokens of your love.",
        author: "Socrates"
    },
    {
        quote: "When I am attacked by gloomy thoughts, nothing helps me so much as running to my books. They quickly absorb me and banish the clouds from my mind.",
        author: "Michel de Montaigne"
    },
    {
        quote: "The best way to predict the future is to invent it.",
        author: "Alan Kay"
    },
    {
        quote: "Idleness is not doing nothing. Idleness is being free to do anything.",
        author: "Floyd Dell"
    },
    {
        quote: "Don't be afraid your life will end; be afraid that it will never begin.",
        author: "Grace Hansen"
    },
    {
        quote: "Paradise is where I am.",
        author: "Voltaire"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;