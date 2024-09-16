const studentBirthDays = (students) =>{

    const studentsCopy = students.slice();
    function getMonthAndDay(birthDate) {
        const [month, day] = birthDate.split('/').slice(0, 2).map(Number);
        return { month, day };
      }
    
      studentsCopy.sort((a, b) => {
        const dateA = getMonthAndDay(a.birthDate);
        const dateB = getMonthAndDay(b.birthDate);
    
        if (dateA.month !== dateB.month) {
          return dateA.month - dateB.month;
        }
    
   
        return dateA.day - dateB.day;
      });
    
      return studentsCopy;
    }
    
    
    const students = [
      { name: 'Tom', birthDate: '01/15/2010' },
      { name: 'Ben', birthDate: '01/17/2000' },
      { name: 'Sam', birthDate: '03/15/2010' },
      { name: 'Alex', birthDate: '01/12/2005' }
    ];
    
    const sortedStudents = studentBirthDays(students);
    console.log(sortedStudents);


//   const student = [
//     {name: 'Tom' ,
//      birthDate: '01/15/2010'   
//     },
//     {name: 'Ben',
//      birthDate: '01/17/2000'
//     },
//     {name: 'Sam',
//      birthDate: '03/15/2010'
//     }
//   ];

//   console.log(studentBirthDays(student));
