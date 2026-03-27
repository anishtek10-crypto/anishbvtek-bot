/*const user ={name:"john",age : 20};
let jsonStr = JSON.stringify(user);
let temp = JSON.parse(jsonStr);
temp.isAdult = temp.age >=18;
let finalObj = temp;
console.log(finalObj);*/

/*const users = [
    { name : "A", role :"admin"},
    {name :"B",role : "user"},
    {name : "C" ,role : "admin"}
];
const freq = users.reduce((result,user)=>{
    result[user.role]=(result[user.role]||0)+1;
    return result;
},{});
console.log(freq);*/

/*const users = [
    { name : "B",age : "20"},
    {name :"A",age:"20"},
    {name : "C",age:"18"}
];
users.sort((a,b)=>{
    if(a.age!==b.age)return a.age-b.age;
    return a.name.localeCompare(b.name);
});
console.log(users);
*/

/*const users = [
    {name : "A",role:"admin"},
    {name : "B",role :"user"}
];
const grouped = users.reduce((acc,user)=>{
    if(!acc[user.role])acc[user.role]=[];
    acc[user.role].push(user);
    return acc;
},{});
console.log(grouped);
*/
/*const users = [
    {name : "A",role:"admin",salary:4000},
    {name : "B",role :"user",salary:4000},
    {name : "C",role :"user",salary:5000},
];
function groupBySalary(users){
    const grouped = users.reduce((acc,user)=>{
        if(!acc[user.salary])acc[user.salary]=[];
        acc[user.salary].push(user);
        return acc;
    },{});
    console.log(JSON.stringify(grouped, null, 2));
}
function groupByRole(users){
    const grouped = users.reduce((acc,user)=>{
    if(!acc[user.role])acc[user.role]=[];
    acc[user.role].push(user);
    return acc;
},{});
console.log(JSON.stringify(grouped, null, 2));
}
groupByRole(users);
groupBySalary(users);
 */

/*function diff(a,b){
    const result={};
    for(let key in b){
         if (a[key] !== b[key]) {
      result[key] = { old: a[key], new: b[key] };
    }
  }
  return result;
}
const a = {name :"A",age:20};
const b = {name :"B",age:21};
console.log(diff(a,b));
*/
function validate(obj,requiredKeys){
    return requiredKeys.every(key=> key in obj);
}
const data = {name:"john",age:25};
console.log(validate(data,["name","age","email"]));

