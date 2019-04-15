const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User');
const Thread = require('../models/Thread');
users.use(cors());

process.env.SECRET_KEY = 'secret';

users.post('/Register',(req,res) =>{
    const userData = {
        email:req.body.email,
        password:req.body.password
    };
    User.findOne({
        email:req.body.email
    }).then(user => {
        if(!user){
            bcrypt.hash(req.body.password,10,(err,hash) =>{
                userData.password = hash;
                User.create(userData).then(user => {
                    res.json({status: user.email + 'Registerd'});
                }).catch(err => {
                    res.send('err' + err);
                })
            })
        }
        else{
            res.json({error: 'User already Registered'});
        }
    }).catch(err => {
        res.send('error:'+err);
    })
});
users.post('/login',(req,res) => {
    User.findOne({
        email:req.body.email
    }).then(user => {
        if(user){
            if(bcrypt.compareSync(req.body.password,user.password)){
                const payload = {
                    _id:user._id,
                    email:user.email,
                }
                let token = jwt.sign(payload,process.env.SECRET_KEY,{
                    expiresIn:3220
                });
                res.send(token);
            }else{
                res.json({error:'User does not exist'});
            }
        }else{
            res.json({error:'User does not exist'});
        }
    }).catch(err => {
        res.send('error'+ err);
    })
});
users.get('/profile',(req,res) => {
    var decoded = jwt.verify(req.headers['authorization'],process.env.SECRET_KEY);

    User.findOne({
        _id:decoded._id
    }).then(user =>{
        if(user){
            Thread.find({}).exec().then(threads =>{
                if(threads.length>0){
                    var newuser = user.toObject();
                    newuser.threads = threads;
                    res.json(newuser);
                }else{
                    console.log("No tags exist");
                    res.json(user);
                }
            }).catch(err => {
                res.send(err + "error");
            })
        }else{
            res.send("User does not exist");
        }
    }).catch(err => {
        res.send(err + "error");
    })
});
users.post('/thread',(req,res) =>{
    const today = new Date();
    const threadData = {
        email:req.body.email,
        title:req.body.title,
        description:req.body.description,
        tags:req.body.tags,
        date:today
    };
    Thread.create(threadData).then(user => {
        res.json({status: threadData.title + 'added'});
    }).catch(err => {
        res.send('err' + err);
    })

});

module.exports = users;