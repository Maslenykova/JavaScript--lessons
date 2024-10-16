export const addImage = (url, callback) => {
    const img = document.createElement('img');
    img.setAttribute('alt', 'User avatar');
    img.src = url;
  
    const pageElem = document.querySelector('.page');
    pageElem.append(img);
  
    const onImageLoaded = () => {
      const { width, height } = img;
      callback(null, { width, height });
    };
  
    const onImageLoadError = () => callback('Image load failed');
  
    img.addEventListener('load', onImageLoaded);
  
    img.addEventListener('error', onImageLoadError);
  };
  const onImageLoaded = (error, imgElem) => {
    if (error) {
      console.log(error);
      return;
    }
    const { width, height } = imgElem;
    const sizeElem = document.querySelector('.image-size');
    sizeElem.textContent = `${width} x ${height}`;
  };

  addImage('https://server.com/image.png', onImageLoaded);