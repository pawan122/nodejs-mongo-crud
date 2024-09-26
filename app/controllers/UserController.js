
const userModel = require('../models/userModel')

exports.getUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        const updatedData = users.map(user => {
            const formateDate = new Date(user.createdAt).toLocaleDateString('en-GB');
            return {
                ...user.toObject(),
                createdAt: formateDate
            }
        })
        res.status(200).json(updatedData)
    } catch (error) {
        console.log('Err', error),
        res.status(500).json({error: 'Error retriving data '})
    }
}

exports.getUserById = async (req, res) => {
    const { id } = req.params;
    console.log('CHECK IDD', id)
    try {
        const user = await userModel.findById(id); 
        if (user) res.status(200).json(user)
            else
        res.status(404).json({error: 'User not found'})
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ error: 'Error retrieving user' });
    }
}

exports.createUsers = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userData = await userModel.create({
            name,
            email,
            password
        });
        res.status(200).json({
            message: 'User created successfully',
            user: userData
        })
    } catch (error) {
        console.log('Error', error)
        res.status(500).json({ error: "data not fetched..!!" })
    }
}