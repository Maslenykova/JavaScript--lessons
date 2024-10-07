import { updateEventColors } from "./color";

window.addEventListener('storage', (event) => {
    if (event.key === 'calendarEvents') {
      loadEventsFromLocalStorage(); // Загружаем события, если они изменились
      renderEvents(); // Перерисовываем события
    }
  
    if (event.key === 'eventColor') {
      updateEventColors(); // Обновляем цвет событий, если он изменился
    }
  });