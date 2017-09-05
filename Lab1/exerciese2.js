var library = [
    {prof: 'Asaad Saad', course: 'WAP', courseId:'CS452'},
    {prof: 'Rakesh Shrestha', course: 'WAA', courseId:'CS545'},
    {prof: 'Steve Nolle', course: 'SWE', courseId:'CS425'}
]

var sortedLibrary = library.sort((obj1, obj2) => obj1.course.localeCompare(obj2.course));
console.log(sortedLibrary);