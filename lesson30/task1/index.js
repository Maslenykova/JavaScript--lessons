

export const addImage = (imgSrc) => {
    const p = new Promise((resolve, reject)=>{
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'Picture');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);
  
    const onImageLoaded = () => {
      const { width, height} = imgElem;
      resolve({ width, height});
    };

    imgElem.addEventListener('load', onImageLoaded);
    imgElem.addEventListener('error', () => reject(new Error('Image load is failed')));
  });
  return p;
}
 const imgSrc = 'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';
  
 const result = addImage(imgSrc);

 result.then(data => console.log(data));