export const getItem = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : [];
  };
  
  export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };