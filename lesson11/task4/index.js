const countOccurrences = (text, str) => {
    if (str === '') {
      return null;
    }
    let count = 0;
    let index = 0;

    while (index !== -1) {
        index = text.indexOf(str, index);
        if (index !== -1) {
            count +=1;
            index += str.length; 
        }
    }

    return count;
}

  

  const text = 'I am student of Gromcode university';
  const str = '';
  const str1 = 'am';
  console.log(countOccurrences(text, str));
  
  console.log(countOccurrences(text, str1 ));
  