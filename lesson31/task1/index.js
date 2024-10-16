export const requestUserData = userId => {
  const request = new Promise((resolve, reject) => {
    if (userId === "broken") {
      setTimeout(() => {
        reject(new Error("User not found"));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: "John",
          age: 17,
          userId,
          email: "userid777@example.com",
          
        });
      }, 1000);
    }
  });
  return request;
};

const p = requestUserData('userid777');
p.then(data=> console.log(data))
.catch(error=> console.log(error));
