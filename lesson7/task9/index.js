function filterNames(arr, text) {
    const names = arr.filter(name => name.includes(text) && name.length > 5); 
    return names;
  }
  
  console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya'));
  