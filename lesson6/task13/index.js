function withdraw(clients, balances, client, amount) {
 
  for (let i = 0; i < clients.length; i += 1) {
    if (balances[i] < amount) {
      return (-1);
    }
    if (balances[i] > amount && clients[i] === client) {
      return (balances[i] - amount);
    } 
  }
}
  console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
 console.log( withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));