function reversedString(text) {
    let reversed = "";
    for (i = text.length - 1; i >= 0; i--) {
      let element = text[i];
      reversed = reversed + element;
      //console.log(element, reversed);
    }
    return reversed;
  }
  
  const myString = "I am a good boy";
  
  const reversed = reversedString(myString);
  
  console.log(reversed);