// 1)Reverse String.

var input = "Hello, World!";


function reverseString(str) {
  return str.split("").reverse().join("");
}

function reverseAfterDelay() {
  setTimeout(function() {
    var reversed = reverseString(input);
    console.log(reversed);
  }, 2000); 
}

reverseAfterDelay();


// 2)Random Number Generator with Delay and Progress Indication:

var delayInSeconds = 3;

function generateRandomNumber() {
  return Math.floor(Math.random() * 100); // Change the range as needed
}

function displayCountdown(secondsRemaining) {
  console.log(`Generating random number in ${secondsRemaining} seconds...`);
}

function startCountdownAndGenerateNumber() {
  var secondsRemaining = delayInSeconds;

  var countdownInterval = setInterval(function () {
    displayCountdown(secondsRemaining);
    secondsRemaining--;

    if (secondsRemaining < 0) {
      clearInterval(countdownInterval);
      var randomNumber = generateRandomNumber();
      console.log(`Random number generated: ${randomNumber}`);
    }
  }, 1000); // Update countdown every 1 second
}


startCountdownAndGenerateNumber();



// 3) Build a feature for Store's Inventory.

const usdToInrExchangeRate = 80;

const itemsInUSD = {
  item1: 20,
  item2: 35,
  item3: 10,
};

function convertToINR(priceInUSD) {
  return priceInUSD * usdToInrExchangeRate;
}

const itemsInINR = Object.keys(itemsInUSD).reduce((acc, item) => {
  acc[item] = convertToINR(itemsInUSD[item]);
  return acc;
}, {});
console.log(itemsInINR);


// 4)Filtering and Capitalizing: Books Published After 2010 with Author Names.

const books = [
  {
    title: "Book 1",
    author: "author 1",
    year: 2008
  },
  {
    title: "Book 2",
    author: "author 2",
    year: 2015
  },
  {
    title: "Book 3",
    author: "author 3",
    year: 2005
  },
  {
    title: "Book 4",
    author: "author 4",
    year: 2012
  }
];


function filterAndCapitalize(books) {
  return books
    .filter(book => book.year >= 2010)
    .map(book => {
      book.author = book.author.toUpperCase();
      return book;
    });
}

const filteredBooks = filterAndCapitalize(books);


console.log(filteredBooks);


// 5)URL validation.

const urlPattern = /^(https?:\/\/)[\w\d.-]+\.[A-Za-z]+$/;


function isURLValid(input) {
  return urlPattern.test(input);
}


const testUrls = [
  "http://example.com",
  "https://www.example.com",
  "https://example123-abc.xyz",
  "ftp://invalid.com", // Invalid URL
  "http://invalid"     // Invalid URL
];


testUrls.forEach(url => {
  if (isURLValid(url)) {
    console.log(`${url} is a valid URL.`);
  } else {
    console.log(`${url} is not a valid URL.`);
  }
});





// 6LinkedIn Profile URL Validator.

const linkedinUrlPattern ="https:www.linkedin.com/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$";


function isLinkedInURLValid(url) {
  return linkedinUrlPattern.test(url);
}


const testLinkedInURLs = [
  "https://www.linkedin.com/in/johndoe123",
  "https://www.linkedin.com/in/jane_smith",
  "https://www.linkedin.com/in/user-name-1234",
  "https://www.linkedin.com/in/a",
  "https://www.linkedin.com/profile/invalid", // Invalid URL
  "https://www.linkedin.com/in/username123/"  // Invalid URL
];


testLinkedInURLs.forEach(url => {
  if (isLinkedInURLValid(url)) {
    console.log(`${url} is a valid LinkedIn profile URL.`);
  } else {
    console.log(`${url} is not a valid LinkedIn profile URL.`);
  }
});


