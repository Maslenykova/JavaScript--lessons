const student = {
    name: 'Tom',
  };
  
  function sayName() {
    console.log(this.name);
  }

  const sayStudentName = sayName.bind(student);
  sayStudentName();
  const sayBruceName = sayName.bind({ name: 'Bruce' });
  sayBruceName();
  
  const company = {
    companyName: 'Microsoft',
  };
  

  function greeting(firstName, lastName) {
    console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
  }

  company.firstName = 'Bob';
  company.lastName = 'Marley';
  const sayGreeting = greeting.bind(company ,company.firstName, company.lastName);
  sayGreeting();

  const country = {
    countryName: 'Ukraine',
    capital: 'Kyiv',
  };
  
  function getPopulation(population) {
    return `Population in ${this.countryName} is ${population}`;
  }
  country.population = 43000;
  const populationOfCountry = getPopulation.bind(country, country.population);
  console.log(populationOfCountry());

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

  const printSpecialTransaction = transaction.printTransaction.bind(anotherTransaction);
  printSpecialTransaction();