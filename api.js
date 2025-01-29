const express = require('express');
const router = express.Router();


const users =[{
    name:"jordan",
    id:"fdsfsfdf",
    age:20
}]
router.get("/users",(req,res)=>{
    res.send(users)
})

router.post("/addUser",(req,res)=>{
    let newUser = req.body
    users.push(newUser)
    res.send("user added")
})

router.put('/users/:id', (req, res) => {
    res.send({type:'PUT'});

});

router.delete('/users/:id', (req, res) => {
    
    });

});


router.get('/1', (req, res) => {
    res.send({type:'GET'});
});

router.post('/1', (req, res) => {
    res.send({type:'POST'});

});

router.put('/1/:id', (req, res) => {
    res.send({type:'PUT'});

});

router.delete('/1/:id', (req, res) => {
    res.send({type:'DELETE'});

});

module.exports = router; 