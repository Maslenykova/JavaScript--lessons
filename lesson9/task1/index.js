const user = {
    'John Doe': 19,
    'Tom': 17,
    'Bob': 18,
  };
  
  const getAdults = users => Object.entries(users)
      .filter(age => age[1] >= 18)
      .map(userAdult => userAdult[0]);
 
  console.log(getAdults(user));