const saveColorToLocalStorage = (color) => {
    localStorage.setItem('eventColor', color); // Сохраняем цвет
  };
  
  // Загружаем цвет из localStorage
  const loadColorFromLocalStorage = () => {
    const savedColor = localStorage.getItem('eventColor');
    if (savedColor) {
      return savedColor; // Если цвет сохранен, возвращаем его
    }
    return '#0000ff'; // Синий по умолчанию
  };
  
  // Обновляем цвет событий на странице
  export const updateEventColors = () => {
    const color = loadColorFromLocalStorage(); // Загружаем цвет
    document.documentElement.style.setProperty('--event-color', color); // Устанавливаем CSS переменную для цвета
  };
  
  // Пример работы на странице настроек
  const eventColorInput = document.querySelector('#eventColor');
  eventColorInput.addEventListener('input', (event) => {
    saveColorToLocalStorage(event.target.value); // Сохраняем выбранный цвет
    updateEventColors(); // Обновляем цвет событий
  });
  
  // Загружаем цвет и применяем его при загрузке страницы
  window.addEventListener('load', () => {
    updateEventColors(); // Применяем цвет при загрузке
  });