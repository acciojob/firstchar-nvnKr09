function firstChar(text) {
	// Check if the inputString is empty or contains only spaces
  if (text.trim() === '') {
    return '';
  }

  // Iterate through the characters in the string
  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    // If the character is not a space, return it
    if (char !== ' ') {
      return char;
    }
  }

  // If all characters are spaces, return an empty string
  return '';
}


// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
