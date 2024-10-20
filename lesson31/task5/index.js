export const delay = time => {
    const request = new Promise(resolve => {
      setTimeout(() => {
        resolve('Done');
      }, time);
    });
    return request;
  };
  delay(3000).then(() => console.log('Done'));