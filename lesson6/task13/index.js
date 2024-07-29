function withdraw(clients, balances, client, amount) {
    let newBalanse = [];
  
    for (let i = 0; i < clients.length; i += 1) {
      if (clients[i] === client) {
        balances[i] -=  amount;
      }
      newBalanse.push(balances[i]);
      
    }
    return newBalanse;
      
     
  }
  
  console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
 console.log( withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));