
const divElement = document.querySelector('.rect_div');
const pElement = document.querySelector('.rect_p');
const spanElement = document.querySelector('.rect_span');
const eventsList = document.querySelector('.events-list');
const clearBtn = document.querySelector('.clear-btn');
const removeHandlersBtn = document.querySelector('.remove-handlers-btn');
const attachHandlersBtn = document.querySelector('.attach-handlers-btn');

function addEventLog(text, color) {
  const span = document.createElement('span');
  span.textContent = text;
  span.style.color = color;
  span.style.marginLeft = '8px';
  eventsList.appendChild(span);
}

function logEventCapture(e) {
  addEventLog(e.currentTarget.tagName.toLowerCase(), 'grey');
}

function logEventBubble(e) {
  addEventLog(e.currentTarget.tagName.toLowerCase(), 'green');
}

function attachEventHandlers() {
  divElement.addEventListener('click', logEventCapture, true);
  pElement.addEventListener('click', logEventCapture, true);
  spanElement.addEventListener('click', logEventCapture, true);

  divElement.addEventListener('click', logEventBubble);
  pElement.addEventListener('click', logEventBubble);
  spanElement.addEventListener('click', logEventBubble);
}
function removeEventHandlers() {
  divElement.removeEventListener('click', logEventCapture, true);
  pElement.removeEventListener('click', logEventCapture, true);
  spanElement.removeEventListener('click', logEventCapture, true);

  divElement.removeEventListener('click', logEventBubble);
  pElement.removeEventListener('click', logEventBubble);
  spanElement.removeEventListener('click', logEventBubble);
}

clearBtn.addEventListener('click', () => {
  eventsList.innerHTML = '';
});


attachHandlersBtn.addEventListener('click', attachEventHandlers);
removeHandlersBtn.addEventListener('click', removeEventHandlers);


attachEventHandlers();
