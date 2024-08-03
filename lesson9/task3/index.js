function getKeys(obj) {
    const key = Object.keys(obj);
    return key.forEach(elem => console.log(elem));
  }
  
  console.log(getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' }));
  