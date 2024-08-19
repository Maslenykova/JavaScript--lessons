'use strict';

let message = 'Just learn it';

export function sendMessage(name) {
  const sender = 'Your Gromcode';
  console.log(`${name}, ${message}! ${sender}`);
}

export function setMessage(text) {
  message = text;
}
sendMessage('Ann');
setMessage('Good job');
sendMessage('Ann');