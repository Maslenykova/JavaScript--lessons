/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

function addPropertyV1(userData, userId) {
    userData.id = userId;
    return userData;
  }
  
  function addPropertyV2(userData, userId1) {
    const id1 = {id: userId1};
    const obj = Object.assign(userData, id1);
    return obj;
  }
  
  function addPropertyV3(userData, userId2) {
    const id2 = {id: userId2};
    const obj = Object.assign({}, userData, id2);
    return obj;
  }
  function addPropertyV4(userData, userId3) {
    const obj = { ...userData, id: userId3 };
    return obj;
  }
  
  const user = {
    name: 'Sam',
  };
  const user1 = {
    name: 'Sam',
  };
  const user2 = {
    name: 'Sam',
  };
  const user3 = {
    name: 'Sam',
  };

  console.log(addPropertyV1(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
  console.log(addPropertyV2(user1, '1234567'));
  console.log(addPropertyV3(user2, '1234567'));
  console.log(addPropertyV4(user3, '1234567'));