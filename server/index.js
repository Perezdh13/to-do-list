
const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors")
const app = express()
const mysql = require('mysql')

const dataBase = mysql.createPool({
    host:'localhost',
    user:'root',
    password:"null",
    database:'To-DoList',
    port:'3306',
    socketPath: '/var/run/mysqld/mysqld.sock'
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/', (req,res) =>{

    const taskName = req.body.taskName
    const taskDescription = req.body.taskDescription
    const taskType = req.body.taskType
    const taskDay = req.body.taskDay
    const taskHour= req.body.taskHour

    const sqlInsert =
    "INSERT INTO task (taskName, taskDescription,taskType, taskDay, taskHour) VALUES (?,?)"
    dataBase.query(sqlInsert,[taskName, taskDescription, taskType, taskDay, taskHour], (err, result)=>{
        console.log(err);
    })
});

app.listen(3001,()=>{
    console.log('running on port 3001');
});
