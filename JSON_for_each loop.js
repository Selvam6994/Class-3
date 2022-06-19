let student = [{
    "id" : "1", 
    "msg"   : "hi"
    
}];
let studentJSON = JSON.stringify(student);
student.forEach(function(student) { 
console.log(studentJSON); });
