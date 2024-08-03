const getPeople = obj => {
 const valuesOfObject = Object.values(obj);
 const newObject = valuesOfObject.slice();
 const copy = newObject.reduce((acc,item) => {return acc.concat(item)}, []);
 const result = copy.map(elem => elem.name)

return result;

  };
  
  const rooms = {
    room1: [{ name: 'Jack' }, { name: 'Andrey' }, { name: 'Ann' }, { name: 'Vasyl' }],
    room2: [{ name: 'Dan' }],
    room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
  };
  console.log(getPeople(rooms));
  