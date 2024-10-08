import { renderEvents } from "./events";
import { storage } from "./storage.js";

const saveEventsToLocalStorage = () => {
    const events = JSON.stringify(storage.events); 
  };
  

  const loadEventsFromLocalStorage = () => {
    const savedEvents = localStorage.getItem('calendarEvents'); 
    if (savedEvents) {
      storage.events = JSON.parse(savedEvents); 
    }
  };
  
  window.addEventListener('load', () => {
    loadEventsFromLocalStorage(); 
    renderEvents(); 
  });
  
 
  const addEvent = (event) => {
    storage.events.push(event); 
    saveEventsToLocalStorage(); 
    renderEvents(); 
  };