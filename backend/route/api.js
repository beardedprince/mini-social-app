const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');

const mongoose = require('mongoose');
const db = 'mongodb+srv://ollie:olliedb@cluster0-2mplc.mongodb.net/social';
const User = require('../model/user')
const Post = require('../model/post')

mongoose.Promise = Promise

function getAuthenticater (req, res, next) {
    if(!req.header('Authorization'))
        return res.status(401).send({message: 'Unauthorized. Missing Auth header'})
    
    const token = req.header('authorization').split(' ')[1]
    var payload = jwt.sign(token, 'secretKey')
    if(!payload)
        return res.status(401).send({message: 'Unauthorized. Auth header invalid'})
    req.userId = payload.subject
    next()

}
// get post by used id
router.get('/post/:id', async (req, res) => {
    const author = req.params.id
    const posts = await Post.find({author})
    res.send(posts)
})


// post and also associate a use to a post
router.post('/post', getAuthenticater, (req, res) => {
    let newPost = req.body
    console.log(newPost)
    newPost.author = req.userId
    
    let post = new Post(newPost)
    post.save((err, postResult) => {
        if(err) 
            return postResult.status(500).send('error')
        res.status(200).send('post sent successfully')
    })
})

// register a new user
router.post('/register', (req, res) => {
    let Userdata = req.body
    let user = new User(Userdata)
    user.save((err, result) => {
        if(err) {
            console.log(err)
        } else {
            let payload = {}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
        }
    } )
})

// login a registered user
router.post('/login', async (req, res) => {
    let logindata = req.body
    const user = await User.findOne({email: logindata.email})
    if(!user)
        return res.status(401).send('invalid username')
    
    bcrypt.compare(logindata.password, user.password, (err, isMatch) => {
        if (!isMatch)
            return res.status(401).send('invalid password')       

        let payload = {subject: user._id}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
    })
    
})

router.get('/users', async (req, res) => {
    console.log('user id',req.userId)  
    let users =  await User.find({}, '-password -__v')
    res.send(users)
})

router.get('/users/:id', async (req, res) => {
    let user =  await User.findById(req.params.id, '-password -__v')
    res.status(200).send(user)
})

mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true }, err => {
    if (err) {
        console.log('so so so error ', err)
    } else {
        console.log('were connect sha')
    }
})


module.exports = router