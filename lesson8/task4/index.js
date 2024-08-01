 /* eslint-disable dot-notation */

 const user = {
    name: 'Tom',
    age: 17,
  };
  user.hobby = 'football';
  const anotherKey = 'married';
  user.married = false;
  user['favorite music'] = 'rock';
  user.address = {};
  user.address.country = 'Ukraine';
  user.address.building = 17;
  console.log(user);

  