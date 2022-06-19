//for in loop(used to loop objects)
let person = {
  name : 'xxx',
  age  : 27 ,
  mailid: "xxx@gmail.com"
}
var personJSON = JSON.stringify(person);
for (let key in person)
{
console.log(personJSON);
}
{
  console.log(person);
}