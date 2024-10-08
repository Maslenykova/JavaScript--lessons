const saveColorToLocalStorage = (color) => {
    localStorage.setItem('eventColor', color); 
  };
  
 
  const loadColorFromLocalStorage = () => {
    const savedColor = localStorage.getItem('eventColor');
    if (savedColor) {
      return savedColor; 
    }
    return '#0000ff'; 
  };
  
 
  export const updateEventColors = () => {
    const color = loadColorFromLocalStorage(); 
    document.documentElement.style.setProperty('--event-color', color); 
  };

  const eventColorInput = document.querySelector('#eventColor');
  eventColorInput.addEventListener('input', (event) => {
    saveColorToLocalStorage(event.target.value); 
    updateEventColors(); 
  });
  
  
  window.addEventListener('load', () => {
    updateEventColors(); 
  });