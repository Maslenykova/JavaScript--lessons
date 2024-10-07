export const renderEvents = () => {
    // Получаем список всех дней в календаре (предполагается, что они имеют класс .calendar__day)
    const daysElements = document.querySelectorAll('.calendar__day');
    
    // Сначала очищаем все существующие события
    daysElements.forEach(dayElem => {
      dayElem.innerHTML = ''; // Очищаем ячейки
    });
  
    // Проходим по каждому событию
    storage.events.forEach(event => {
      const eventElement = document.createElement('div');
      eventElement.classList.add('calendar__event');
      eventElement.style.backgroundColor = loadColorFromLocalStorage(); // Применяем цвет события
      eventElement.textContent = event.title; // Добавляем название события
  
      // Пример добавления события в ячейку дня
      const eventStartTime = event.start.getHours(); // Получаем час начала события
      const dayNumber = event.start.getDate(); // Получаем номер дня
  
      // Ищем нужный день на основе dayNumber
      const dayElement = document.querySelector(`.calendar__day[data-day="${dayNumber}"]`);
      if (dayElement) {
        // Добавляем событие в нужный день
        dayElement.appendChild(eventElement);
      }
    });
  };