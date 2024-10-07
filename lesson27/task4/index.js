import { renderEvents } from "./events";

const saveEventsToLocalStorage = () => {
    const events = JSON.stringify(storage.events); // Преобразуем события в строку
    localStorage.setItem('calendarEvents', events); // Сохраняем в localStorage
  };
  
  // Функция для загрузки событий из localStorage
  const loadEventsFromLocalStorage = () => {
    const savedEvents = localStorage.getItem('calendarEvents'); // Получаем строку с событиями
    if (savedEvents) {
      storage.events = JSON.parse(savedEvents); // Если события есть, преобразуем их обратно в массив
    }
  };
  
  // Пример использования сохранения и загрузки
  window.addEventListener('load', () => {
    loadEventsFromLocalStorage(); // Загружаем события при загрузке страницы
    renderEvents(); // Отображаем события
  });
  
  // Пример добавления события
  const addEvent = (event) => {
    storage.events.push(event); // Добавляем новое событие в массив
    saveEventsToLocalStorage(); // Сохраняем обновленный массив событий
    renderEvents(); // Перерисовываем события на странице
  };