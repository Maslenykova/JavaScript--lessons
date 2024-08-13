const splitString = (str, len) => {
    const strArr = [];
    let startPosition = 0;
    if(len === undefined){
        len = 10;
    }
    if(str.constructor !== String){
        return null;
    }
    while (true) {
        let chunk = str.substr(startPosition, len);
        if (chunk.length === 0) {
            break;
          }

      strArr.push(chunk);
      startPosition += len;
      
    }
    return strArr.map(item => item.padEnd(len, "."));
  };

  console.log(splitString('asdfghjkqw', 4));
  console.log(splitString('asdfghjkqwrtubhj', ));