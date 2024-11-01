

export const getUsersBlogs = async (users) => {
    try {
      const requests = users.map(user => fetch(`https://api.github.com/users/${user}`).then(response => {
        if (!response.ok) {
          throw new Error('Failed to load data');
        }
        return response.json();
      }));

      const usersData = await Promise.all(requests);
  
      return usersData.map(user => user.blog);
    } catch (error) {
      throw new Error('Failed to load data');
    }
  };


getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
