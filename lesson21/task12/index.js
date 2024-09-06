const squaredNumbers = () => {
    const elements = document.querySelectorAll('.number');
    elements.forEach(element => {
        const number = parseFloat(element.dataset.number);
        const squaredNumber = number * number; 
        element.dataset.squaredNumber = squaredNumber; 
      });
      
    }


console.log(squaredNumbers());