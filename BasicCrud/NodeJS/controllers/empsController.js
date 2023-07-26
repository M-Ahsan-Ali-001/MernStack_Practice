const express = require('express')

var router = express.Router()

var {Employee} = require('../models/emps')


router.get('/' , (req,res)=>{
    Employee.find((err,docs) =>{

if(!err) {res.send(docs);}
else {console.log('error'+err)}


})



})

module.exports = router