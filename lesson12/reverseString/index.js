const reverseString = text =>{
    if(text.constructor !== String){
        return null;
    }
    const arr = text.split('');
    let newText = arr.reverse();
    return newText.join('');
  }

  console.log(reverseString('asdfghj'));
console.log(reverseString('I am a student'));