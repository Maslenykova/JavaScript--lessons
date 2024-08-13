const sortContacts = (arr, meaning) => {
    if (!Array.isArray(arr)) {
      return null;
    }
   const result = arr.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    let array = [];
    if (meaning === true) {
      array = result;
    }
    if (meaning === false) {
      array = result.slice(0).reverse();
    }
    if (meaning === undefined){
        array = result;
    }
    return array;
  };

  const contact = [
    {
        name: 'A',
        phonenamber: '2222222',
    },
    {
        name: 'B',
        phonenamber: '4444444',
    },
    {
        name: 'C',
        phonenamber: '5555555',
    },
    {
        name: 'D',
        phonenamber: '6667777',
    },
    {
        name: 'I',
        phonenamber: '8888888',
    }
  ];
  console.log(sortContacts (contact, true));
  console.log(sortContacts (contact, false));
  console.log(sortContacts (contact, ));