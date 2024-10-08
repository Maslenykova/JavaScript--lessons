 import { loadColorFromLocalStorage } from "./color.js";
 import { storage } from "./storage.js";
 
 export const renderEvents = () => {
    const daysElements = document.querySelectorAll('.calendar__day');
    
    daysElements.forEach(dayElem => {
      dayElem.innerHTML = ''; 
    });
  
   
    storage.events.forEach(event => {
      const eventElement = document.createElement('div');
      eventElement.classList.add('calendar__event');
      eventElement.style.backgroundColor = loadColorFromLocalStorage(); 
      eventElement.textContent = event.title; 
  
      const dayNumber = event.start.getDate(); 
  
      const dayElement = document.querySelector(`.calendar__day[data-day="${dayNumber}"]`);
      if (dayElement) {
        dayElement.appendChild(eventElement);
      }
    });
  };