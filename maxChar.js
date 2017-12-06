const maxChar = (str) => {
  let charMap = {};
  let max = 0;
  let maxChar;

  strippedWhitespaceString = str.split(' ').join('');

  for (let char of strippedWhitespaceString) {
    charMap[char] ? charMap[char]++ : charMap[char] = 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  console.log("Most used character in " + str + " is: " + maxChar);
}

maxChar('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi repudiandae ab exercitationem repellat vero sit dignissimos beatae distinctio. Incidunt at nihil iusto ullam maiores ipsum unde optio reprehenderit veritatis, rem velit ratione nostrum tenetur officiis dignissimos dolore ea esse debitis animi deserunt labore voluptatem quos eius cupiditate. Eveniet, dolor alias?');