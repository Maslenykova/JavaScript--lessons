import { updateEventColors} from "./color";
import { renderEvents } from "./events";
import { loadEventsFromLocalStorage } from "./index.js";

export const storage = [];
window.addEventListener('storage', (event) => {
    if (event.key === 'calendarEvents') {
      loadEventsFromLocalStorage(); 
      renderEvents(); 
    }
  
    if (event.key === 'eventColor') {
      updateEventColors(); 
    }
  });