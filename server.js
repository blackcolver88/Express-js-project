const express= require('express');
const User=require('./models/user')
require('./config/connect')
const app=express();
app.use(express.json());
app.listen(3000,()=>{
    console.log("hello");
});
app.post('/add',(req ,res)=>{
    data =req.body;
    usr= new User(data);
    usr.save()
    .then((savedUser)=>{res.status(200).send(savedUser)})
    .catch((err)=>{res.status(400).send(err)})

});
app.post('/create', async (req ,res)=>{
    try
    {
        data =req.body;
        usr= new User(data);
        savedUser = await usr.save();
        res.status(200).send(savedUser);
    } catch (error) {res.status(400).send(error)}
    });
app.get('/get_all',(req,res)=>{
    User.find()
        .then((users)=>{res.status(200).send(users);})
        .catch((err)=>{res.status(400).send(err);})
});
app.get('/all',async (req,res)=>{
    try{
        users = await User.find();
        res.status(200).send(users);

    }catch (error) {res.status(400).send(error);}
});
app.get('/getbyid/:id', (req,res)=>{
    id=req.params.id;
    User.findOne({_id:id})
    .then((user)=>{res.status(200).send(user)})
    .catch((err)=>{res.status(400).send(err)})
});
app.get('/getByid/:id', async (req,res)=>{
    try{
        id=req.params.id;
        us = await User.findOne({_id:id});
        res.status(200).send(us);

    }catch (error) {res.status(400).send(error); }
});
app.delete('/delete/:id',(req,res)=>{
    id =req.params.id;
    User.findByIdAndDelete({_id:id})
    .then((deletedUser)=>{res.status(200).send(deletedUser)}
    ).catch((err)=>{res.status(400).send(err)})
});
app.delete('/deleter/:id', async (req,res)=>{
    try{
    id =req.params.id;
    del = await User.findByIdAndDelete({_id:id});
    res.status(200).send(del);
    }catch(error){res.status(400).send(error);}
});
app.put('/update/:id',(req,res)=>{
    id=req.params.id;
    newData = req.body;
    User.findByIdAndUpdate({_id:id}, newData)
    .then((updated)=>{res.status(200).send(updated)})
    .catch((err)=>{res.status(400).send(err)})
});
app.put('/u/:id',async(req,res)=>{
    try{
        id=req.params.id;
        newData=req.body;
        up=await User.findByIdAndUpdate({_id:id},newData);
        res.status(200).send(up);
    }catch(error){res.status(400).send(error);}
})


