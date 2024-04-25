const User = require('../model/user');
const {setUser} = require('../services/auth');

const login = async(req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne();
        if(user) {
            const token = setUser(user);
            res.status(202).json(token);
        }
    } catch (error) {
        console.error(error);
        res.status[500].json({'message': 'Internal Server Error'});
    }
}

const signup = async(req, res) => {
    try{
        const {email, password, name} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({'message': 'Email alrady exist. Please use different email'});
        }

        const newUser = new User({
            name,
            email,
            password
        });

        await newUser.save();
        res.status(200).send({'messae': 'User created sucessfully', user:newUser});
    } catch (error) {
        console.error(error);
        res.status(500).send({'message': 'Error creating user'});
    }
}

module.exports = {login, signup};