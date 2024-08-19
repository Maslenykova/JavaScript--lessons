function createLogger() {
  const messages = [];

  return {
      warn(message) {
          if (typeof message === 'string') {
              messages.push({
                  message: message,
                  dateTime: new Date(),
                  type: 'warn'
              });
          } else {
              throw new Error('Message must be a string');
          }
      },

      error(message) {
          if (typeof message === 'string') {
              messages.push({
                  message: message,
                  dateTime: new Date(),
                  type: 'error'
              });
          } else {
              throw new Error('Message must be a string');
          }
      },

      log(message) {
          if (typeof message === 'string') {
              messages.push({
                  message: message,
                  dateTime: new Date(),
                  type: 'log'
              });
          } else {
              throw new Error('Message must be a string');
          }
      },

      getRecords(type) {
          let filteredMessages = messages;

          // Если передан тип, фильтруем массив по этому типу
          if (type) {
              filteredMessages = messages.filter(msg => msg.type === type);
          }

          // Сортируем сообщения по времени в порядке убывания
          return filteredMessages.sort((a, b) => b.dateTime - a.dateTime);
      }
  };
}

// Пример использования
const logger = createLogger();
logger.warn("Это предупреждение");
logger.error("Это ошибка");
logger.log("Это лог");

console.log(logger.getRecords()); // Все сообщения
console.log(logger.getRecords("warn")); // Только предупреждения
console.log(logger.getRecords("error")); // Только ошибки
console.log(logger.getRecords("log")); // Только логи