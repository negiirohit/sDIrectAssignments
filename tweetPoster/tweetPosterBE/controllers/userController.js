var express = require('express');
const auth = require('../auth/authenticate');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config')
const User = require('../models/user');
const Tweet = require('../models/tweet');

const mongoose =require('mongoose');



module.exports.register = (req,res,next) => {
    User.findOne({ handle : req.body.handle })
    .then( (user) => {
            if(user) {
                    console.log("user already exists: " +user)
                    res.status(422);
                    res.json({ 
                        success : false,
                        message : 'User already exists',
                        data:null
                    });
            }
            else {
                    newUser = User(req.body);
                    
                    return( 
                        newUser.save()
                        .then((user) => {
                            res.status(200);                    
                            console.log("user created " +user);
                            res.json({ 
                                success : true, 
                                message : 'User created!',
                                data :{user : user }
                             })
                        })
                    
                    )
            }
                        
    })
    .catch((err) => {
        res.status(500);
        res.json({
            success : false,
            message : err.message,
            data: null
        }); 
    });
}

module.exports.login = (req, res, next) => {

    User.findOne({ handle : req.body.handle })
    .then((user) => {
        if(user){
            
            if(bcrypt.compareSync(req.body.password,user.password)){

                let token = jwt.sign({id: user._id,handle: user.handle},config.secret,{ expiresIn: '24h' });
                res.status(200);
                res.json({
                    success: true,
                    message: 'Authentication successful!',
                    data : { token: token }
                });

            } 
            else {
                res.status(401);
                res.json({
                    success: false,
                    message: 'Incorrect username or password',
                    data: null
                });
            }
        }
        else {
            res.status(401);
            res.json({
            success: false,
            message: 'Authentication failed! Please check the request'
            });

        }
    })
    .catch((err) => {
        res.status(500);        
        res.json({
            success : false,
            message : err.message,
        }); 
    });
}


module.exports.getTweets = (req, res, next) => {
    //Use authentication middleware before getTweets
    Tweet.find({handler: req.user._id})
    .then( tweets =>{
        res.status(200);
        res.json({
            success: true,
            message: 'fetched tweets',
            data: {tweets: tweets }
        })
    })
    .catch((err) => {
        res.status(500);        
        res.json({
            success : false,
            message : err.message,
        }); 
    });

}



module.exports.getMentions = (req, res, next) => {
    //Use authentication middleware before getTweets
    Tweet.find({content : { $regex: req.user.handle }})
    .then( tweets =>{
        res.status(200);
        res.json({
            success: true,
            message: 'fetched tweets with mentions',
            data: {tweets: tweets }
        })
    })
    .catch((err) => {
        res.status(500);        
        res.json({
            success : false,
            message : err.message,
        }); 
    });

}


module.exports.createTweet = (req, res, next) => {
    //Use authentication middleware before getTweets
    req.body.handler = req.user.id;
    Tweet.create(req.body)
    .then( tweet =>{

        return User.findOneAndUpdate({_id:req.user.id},{$push : { tweets : tweet._id }})
            .populate('tweets') 
            .then( user => {
                res.status(200);
                res.json({
                success: true,
                message: 'tweet created',
                data: {user : user }
                })        
                  
              } )
    })
    .catch((err) => {
        res.status(500);        
        res.json({
            success : false,
            message : err.message,
        }); 
    });

}


module.exports.findHandles = (req, res, next) => {
    let pattern = '^'+req.params.handle;
    console.log("pattern: "+pattern);
    User.find({handle : { $regex : pattern, $options : 'm' }},{ handle : 1,_id:0 })
    .then( handles => {
        res.status(200);
        res.json({
        success: true,
        message: 'tweet created',
        data: { handles : handles }
        })        
    })
    .catch((err) => {
        res.status(500);        
        res.json({
            success : false,
            message : err.message,
        }); 
    });

    
}


