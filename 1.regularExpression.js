// Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.

// If you want to find the word the in the string The dog chased the cat, you could use the following regular expression: /the/. Notice that quote marks are not required within the regular expression.

// JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.


let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
function testing(str,toFind){
    if(toFind.test(str)){
      return true
    }
}



// Example


let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // Change this line
let result1 = waldoRegex.test(waldoIsHiding);  //false  



// Finding Multiple Words

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result2 = petRegex.test(petString);


// Ignore cases

let myString1 = "freeCodeCamp";
let fccRegex = /freecodeCamp/i; // Change this line
let result3 = fccRegex.test(myString);

// match()

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result4 = extractStr.match(codingRegex); // Change this line


// Find More Than the First Match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result5 = twinkleStar.match(starRegex); // Change this line

// Match Anything with Wildcard Period

// Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: .

// The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);  //true
huRegex.test(hugStr);  //true

// Match Single Character with Multiple Possibilities ______________________________

// You learned how to match literal patterns (/literal/) and wildcard character (/./). Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.

// You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

// For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result6 = quoteSample.match(vowelRegex); // Change this line
console.log(result)




// Match Letters of the Alphabet


// You saw how you can use character sets to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.

// Inside a character set, you can define a range of characters to match using a hyphen character: -.

// For example, to match lowercase letters a through e you would use [a-e].

// let catStr = "cat";
// let batStr = "bat";
// let matStr = "mat";
// let bgRegex = /[a-e]at/;
// catStr.match(bgRegex);
// batStr.match(bgRegex);
// matStr.match(bgRegex);
// In order, the three match calls would return the values ["cat"], ["bat"], and null.


let quoteSample3 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result7 = quoteSample.match(alphabetRegex); // Change this line


// Match Numbers and Letters of the Alphabet
// using both number and alphabets range
let quoteSample4 = "Blueberry 3.141592653s are delicious.";
let myRegex6 = /[h-s2-6]/gi; // Change this line
let result8 = quoteSample.match(myRegex); // Change this line
console.log(result)


// neglect matched data
// Match Single Characters Not Specified

let quoteSample2 = "3 blind mice.";
let myRegex5 = /[^1-9aeiou]/gi; // Change this line
let result9 = quoteSample.match(myRegex); // Change this line


// Match the character that occurs one or more time

let difficultSpelling = "Mississippi";
let myRegex4 = /s+/g; // Change this line
let result11 = difficultSpelling.match(myRegex);
console.log(result)

// Match Characters that Occur Zero or More Times

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!"
let chewieRegex = /Aa*/; 

let result12 = chewieQuote.match(chewieRegex);
console.log(result)  //'Aaaaaaaaaaaaaaaa'


// find The Character with lazy matching

let text = "<h1>Winter is cogming</h1>";
let myRegex11 = /<h[1]*1>/g; // Change this line
let result13 = text.match(myRegex);
console.log(result)


