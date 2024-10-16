import { addImage } from './addImage.test.js';

export const addImageV2 = url => {
    return new Promise((resolve, reject) => {
      addImage(url, (error, data) => {
        if (error) {
          reject(new Error(error));
        } else {
          resolve(data);
        }
      });
    });
  };

const result = addImageV2('https://server.com/image.png');
result.then((data) => console.log(data)); // ==> { width: 200, height: 100 }
result.catch((error) => console.log(error)); // ==> 'Image load failed'

