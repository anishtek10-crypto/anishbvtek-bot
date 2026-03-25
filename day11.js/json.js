const json=`[
    {"id":1,"user":"A", "active":true},
    {"id":2,"user":"B", "active":false},
    {"id":3,"user":"C", "active":true}
]`;
const users = JSON.parse(json)
console.log(users[0])