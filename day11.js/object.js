/*const user = {
    name: "anish",
    age: 22,
    address: {
        pin: 570032,
        house: 2809
    }
};
console.log(user.name);
console.log(user.address.pin);
*/
const users=[
    {"id":1,"user":'A', "active":true},
    {"id":2,"user":'B', "active":false},
    {"id":3,"user":'C', "active":true}
];
console.log(users[0].name);
users.forEach((user) => {
    user.active = !user.active;
});
console.log(users);