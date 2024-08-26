const student = {
    name: 'Tom',
  };
  
  export function sayName() {
    console.log(this.name);
  };
   sayName.call(student);
  sayName.call({name: 'Bruce'});

  const company = {
    companyName: 'Microsoft',
  };
  
  function greeting(firstName, lastName) {
    console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
  }

  greeting.call(company, company.firstName = 'Bob', company.lastName = 'Marley');

  const country = {
    countryName: 'Ukraine',
    capital: 'Kyiv',
  };
  
  function getPopulation(population) {
    return `Population in ${this.countryName} is ${population}`;
  }
 
  console.log(getPopulation.call(country, country.population = 43000));

  const transaction = {
    amount: 1200,
    operation: 'sell',
    currency: 'USD',
    exchange: 'NYSE',
    printTransaction() {
      console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
    },
  };
  
  const anotherTransaction = {
    amount: 400,
    operation: 'buy',
    currency: 'USD',
    exchange: 'NASDAQ',
  };
  // '400 USD - buy on NASDAQ'
  transaction.printTransaction.call(anotherTransaction);