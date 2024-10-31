const successRequest = Promise.reject(new Error('Error with data')); 

successRequest
  .then(function onSuccess1(data) {
    console.log(data);
  })
  .catch(function onError1(error) {
    console.error('onError1', error.message); 
  });

const failRequest = Promise.reject(new Error('Server error')); 

failRequest
  .catch(function onError2(error) {
    console.error('onError2', error.message);
    throw error; 
  })
  .then(function onSuccess2(data) {
    console.log('onSuccess2', data);
  })
  .catch(function onError3(error) {
    console.error('onError3', error.message); 
  });
