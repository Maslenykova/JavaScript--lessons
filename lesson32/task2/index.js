
const getRandomNumber = (from, to) => from + Math.random() * (to - from);

const request = url =>
  new Promise(resolve => {
    const randomDelay = getRandomNumber(1000, 3000);
    setTimeout(() => {
      resolve({
        userData: {
          name: 'Tom',
          age: 17,
        },
        source: url,
      });
    }, randomDelay);
  });

const servers = ['http://server.com/us', 'http://server.com/eu', 'http://server.com/au'];

export const getUserASAP = userID => {
  const userUrls = servers.map(serverUrl => `${serverUrl}/${userID}`);

  const requests = userUrls.map(userUrl => request(userUrl));
  return Promise.race(requests);
};
getUserASAP('user-id-1').then(res => console.log(res));