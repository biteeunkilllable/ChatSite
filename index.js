const {createPool} = require('mysql')
const pool = createPool({
    host:'localhost',
    user:'root',
    password:'root123',
    database:'chatProject',
    connectionLimit: 10,
})
function newuser (username,password){// * a function that inserts new user to the database
    let count =0;
    pool.query(`insert into users (username,userpass,usermsgid) value('${username}','${password}',${count})`,(err,res)=>{console.log(err,"\n",res)})
}
