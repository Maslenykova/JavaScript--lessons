const splitText = (text, len) => {
    const strArr = [];
    let startPosition = 0;
    if(len === undefined){
        len = 10;
    }
    if(text.constructor !== String){
        return null;
    }
    while (true) {
        let chunk = text.substr(startPosition, len);
        if (chunk.length === 0) {
            break;
          }
      strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
      startPosition += len;
      
    }
    return strArr.join('\n');
  };

  console.log(splitText('asdfghjkqw', 4));
  console.log(splitText('asdfghjkqwrtubhj', ));