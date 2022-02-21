const User = require('../models/User');
const router = require('express').Router();

router.get("/", async(req, res) => {
    const q = req.query.q;
    try {
        const users = await User.find();
        const keys = Object.assign({}, ...users);
        const keysWithoutId = Object.keys(keys._doc).filter(x => 
            x !== "_id" && x !== "__v"    
        );

        const filteredUsers = users.filter(user=> 
            keysWithoutId.some(key => user[key].toLowerCase().includes(q)))
        res.status(200).json(filteredUsers.splice(0,10));
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post("/", async(req, res) => {
    const newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender
    });

    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;