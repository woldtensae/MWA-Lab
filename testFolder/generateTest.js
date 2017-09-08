function* generateMyName(){
    yield  `This`;
    yield `is`;
    yield  `Aman`;
    yield `Estifanos`;
}

let startGenerateMyName = generateMyName();
for(let word of startGenerateMyName){
    console.log(word);
}
//////////////////////////////////////////////////////
const courses = [
    { name : 'aaaa' ,  course : 'cs123' },
    { name : 'bbbb' ,  course : 'cs456' },
    { name : 'cccc' ,  course : 'cs789' }
]
//////////////////////////////////////////////////////
function* loop(arr){
    console.log('start');
    for(const item of arr){
        yield item;
    }
    console.log('end');
}
const startGenCourses = loop(courses);
console.log(startGenCourses.next());
console.log('normal execution resums...');

