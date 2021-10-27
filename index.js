const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/',(req,res,) =>{
    res.send('fahim from my second node');
});
const users =[
    {id:0, name:'shabana',email:'iiisratislam@gmail.com'},
    {id:1, name:'sabnur',email:'iiisratislam@gmail.com'},
    {id:2, name:'tazin',email:'iiisratislam@gmail.com'},
    {id:3, name:'fahim',email:'iiisratislam@gmail.com'},
    {id:4, name:'israt',email:'israt@gmail.com'},
    {id:5, name:'priya',email:'priya@gmail.com'},
]

app.get('/users',(req,res) =>{
    const search = req.query.search;
    //use query parameter
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);

    }
    else{
        res.send(users)

    }
    
});
//app method
app.post('/users',(req,res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post',req.body);
    //res.send(JSON.stringify(newUser));
    res.json(newUser)
})
//dynamic parameter
app.get('/users/:id',(req,res) =>{
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits',(req, res) => {
    res.send(['mangoes','orange','banana']);
})
app.get('/fruits/mangoes/fazli',(req,res) => {
    res.send('yummy yummy fruits');
})


app.listen(port,()=>{
    console.log('listening to port',port);
})
