/**
 * TODO: Implement a function that clears all the content
 * prior to generating new random content
 */
function clearAll() {
    const meme = document.querySelector(".meme");
    const joke = document.querySelector(".joke");
    const quote = document.querySelector(".quote");
    const riddle = document.querySelector(".riddle");

    meme.innerHTML = "";
    joke.innerHTML = "";
    quote.innerHTML = "";
    riddle.innerHTML = "";

}

/**
 * TODO:
 * - Show a random Meme in the correct location
 * - Never show more than 1 meme at a time
 */
function showMeme() {
    
    // Value is a string representing image URL
    const randomMemeUrl = getRandomData("memes");
    const memeDiv = document.querySelector(".meme");
    const memeHeader = document.createElement("h1");
    const newMeme = document.createElement("img");
    newMeme.setAttribute("src", randomMemeUrl);
    memeHeader.textContent = "Enjoy this meme!"
    clearAll();
    memeDiv.appendChild(memeHeader);
    // Add the new img to the document
    memeDiv.appendChild(newMeme);

}

/**
 * TODO:
 * - Show a random joke in the correct location
 * - Never show more than 1 joke at a time
 */
function showJoke() {
    // Value is a string representing the joke
    const randomJokeText = getRandomData("jokes");
    const jokeDiv = document.querySelector(".joke");
    const newJoke = document.createElement("p");
    const jokeHeader = document.createElement("h1");
    jokeHeader.textContent = "Here's a joke for you";
    newJoke.textContent = randomJokeText;
    clearAll();
    jokeDiv.appendChild(jokeHeader);
    jokeDiv.appendChild(newJoke);
}

/**
 * TODO:
 * - Show a random quote in the correct location
 * - Never show more than 1 quote at a time
 */
function showQuote() {
    // Value should be in format: { quote: '', author: '' }
    const randomQuote = getRandomData("quotes");
    const quoteDiv = document.querySelector(".quote");
    const newQuote = document.createElement("p");
    const quoteHeader = document.createElement("h1");
    const newQuoteAuthor = document.createElement("p");
    quoteHeader.textContent = "Here's a quote for you";
    newQuote.textContent = randomQuote.quote;
    newQuoteAuthor.textContent = "- "+randomQuote.author+" -";
    clearAll();
    quoteDiv.appendChild(quoteHeader);
    quoteDiv.appendChild(newQuote);
    quoteDiv.appendChild(newQuoteAuthor);

}

/**
 * TODO:
 * - Show a random riddle in the correct location
 * - Never show more than 1 riddle at a time
 * - Always hide the riddle's answer initially
 */
function showRiddle() {
    // Value should be in format: { question: '', answer: '' }
    const randomRiddle = getRandomData("riddles");
    const riddleDiv = document.querySelector(".riddle");
    const newRiddle = document.createElement("p");
    const riddleHeader = document.createElement("h1");
    const answer = document.createElement("p");
    newRiddle.textContent = randomRiddle.question;
    riddleHeader.textContent = "Solve this riddle!"
    answer.textContent = randomRiddle.answer+"!";
    answer.setAttribute("id","riddle_answer")
    clearAll();
    answer.hidden = true;
    riddleDiv.appendChild(riddleHeader);
    riddleDiv.appendChild(newRiddle);
    riddleDiv.appendChild(answer);
    
}

/**
 * TODO: Unhide the riddle's answer
 * - If there is no riddle shown, alert the user that there is no riddle
 * - If there is a riddle shown and an answer shown, alert the user
 *   that the answer is already revealed
 * - If there is a riddle shown but no answer, unhide the answer!
 */
function revealAnswers() { 
    const riddleDiv = document.querySelector(".riddle");
    const riddle = document.querySelector("p");
    const answer = document.querySelector("#riddle_answer")
    if (riddle.hidden == false) {
        if (answer.hidden == true) {
            answer.hidden = false;
        } else {
            alert("The answer is already displayed");
        }
    } else {
        alert("Generate a riddle first!");
    }
}

/**
 * This function is used to get random data.  Don't worry about how it works, just know how to use it.  Usage is pre-filled in the functions above already, but here's an explanation of the function anyways.
 *
 * Valid arguments:
 *
 * 'memes', 'jokes', 'quotes', 'riddles'
 *
 * Return values:
 *
 * For meme data:
 * A string representing an image url
 *
 * For joke data:
 * A string representing the joke
 *
 * For quote data:
 * An object - { quote: '', author: '' }
 *
 * For riddle data:
 * An object - { question: '', answer: '' }
 *
 * Example usage: getRandomData('quotes');
 */
function getRandomData(type) {
    return data[type][rn(data[type].length)];
}

// ----------------------------------------------------
// NO NEED TO CHANGE ANYTHING BELOW but...
// feel free to add/remove items from these lists to customize
// your results
// ----------------------------------------------------

// Source: https://www.thecoderpedia.com/blog/programming-memes/, Reddit
const memes = [
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Memes-Launching-of-Software.jpg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Evolution-of-Memory-Storage.jpg",
   "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Meme-Code-Comments-be-Like.jpg",
   "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke.jpg",
   "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Jokes-Programmer-Life.jpg",
   "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Front-End-vs-Back-End.jpg",
   "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Mistakes.jpg",
   "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Download-Free-RAM.jpg",
   "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Hello-World-Programming.jpg",
   "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-JavaScript-vs-Other-Languages.jpg",
   "https://res.cloudinary.com/practicaldev/image/fetch/s--W8Gltg-a--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/au2hlctns24mfc0l0egx.jpg"
   

];

// Sourced from: http://www.devtopics.com/best-programming-jokes/
const jokes = [
    "This statement",
    "Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?” “Yeah,” reply the bytes.  “Make us a double.”",
    "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
    "All programmers are playwrights, and all computers are lousy actors.",
    "Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds.",
    "The generation of random numbers is too important to be left to chance.",
    "Debugging: Removing the needles from the haystack.",
    "“Debugging” is like being the detective in a crime drama where you are also the murderer.",
    "There are two ways to write error-free programs; only the third one works.",
    "The best thing about a Boolean is even if you are wrong, you are only off by a bit.",
];

// source: https://www.goodreads.com/quotes/tag/programming
const quotes = [
    {
        quote:
            "Programs must be written for people to read, and only incidentally for machines to execute.",
        author: "Harold Abelson",
    },
    {
        quote:
            "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
        author: "Rick Cook",
    },
    {
        quote:
            "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
        author: "John Woods",
    },
    {
        quote:
            "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author: "Martin Fowler",
    },
    {
        quote: "Truth can only be found in one place: the code.",
        author: "Robert C. Martin",
    },
    {
        quote:
            "That's the thing about people who think they hate computers. What they really hate is lousy programmers.",
        author: "Larry Niven",
    },
    {
        quote:
            "You've baked a really lovely cake, but then you've used dog shit for frosting.",
        author: "Steve Jobs",
    },
    {
        quote:
            "A language that doesn't affect the way you think about programming is not worth knowing.",
        author: "Alan J. Perlis",
    },
    {
        quote:
            "The most disastrous thing that you can ever learn is your first programming language.",
        author: "Alan Kay",
    },
    {
        quote:
            "The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.",
        author: "Joseph Weizenbaum",
    },
    {
        quote:
            "Everyone knows that debugging is twice as hard as writing a program in the first place. So if you're as clever as you can be when you write it, how will you ever debug it?",
        author: "Brian Kernighan",
    },
    {
        quote:
            "No matter which field of work you want to go in, it is of great importance to learn at least one programming language.",
        author: "Ram Ray",
    },
];

// Source: https://www.rd.com/list/challenging-riddles/
const riddles = [
    {
        question:
            "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
        answer: "An echo",
    },
    {
        question:
            "You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy. ",
        answer: "A Candle",
    },
    {
        question:
            "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ",
        answer: "A Map",
    },
    {
        question:
            "What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?",
        answer: 'The letter "R"',
    },
    {
        question:
            "You see a boat filled with people. It has not sunk, but when you look again you don’t see a single person on the boat. Why?",
        answer: "All the people were married",
    },
    {
        question:
            "What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire world signifies a great woman. What is the word?",
        answer: "Heroine",
    },
];

// Just a little helper function
function rn(len) {
    return Math.floor(Math.random() * len);
}

const data = {
    memes,
    jokes,
    quotes,
    riddles,
};
