
function willPassExam(){
    try{
        console.log('before taking the exam');
        let result = await examResult();
        console.log(result);
        console.log('after taking the exam'); 
    }catch(error){

    }
}
function examResult(){
setTimeout(function examResult(){
    return true;
}, 5000);
return true;
}


willPassExam();
console.log("other unrelated executions");

