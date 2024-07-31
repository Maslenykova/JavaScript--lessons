
    function withdraw(clients, balances, client, amount){
      let res = clients.indexOf(client);
      if (balances[res] > amount){
        return balances[res] - amount;
      }
      if (balances[res] < amount){
        return (-1);
      }
  };


  console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
  // ==> 37 (balances array should be [1400, 37, -6])
  console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));
  // ==> -1 (balances array should be [1400, 87, -6])


