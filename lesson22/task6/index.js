const button = document.querySelector('.single-use-btn');

const handler = () =>{
    console.log('clicked')
    button.removeEventListener('click', handler);
    
};

button.addEventListener('click', handler);

