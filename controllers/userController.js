import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js';

const createUser = asyncHandler(async (req, res) => {
    const { name, age, country, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400).json({ message: "User already exists" });
    } else {
        const user = await User.create({ name, age, country, email, password });

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                age: user.age,
                country: user.country,
                email: user.email
            });
        } else {
            res.status(400).json({ message: "Invalid user data" });
        }
    }
});



const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
        user.name = req.body.name || user.name;
        user.age = req.body.age || user.age;
        user.country = req.body.country || user.country;
        user.email = req.body.email || user.email;

        if (req.body.password) {
            user.password = req.body.password;
        }

        const updatedUser = await user.save();

        if (updatedUser) {
            res.status(200).json({
                _id: updatedUser._id,
                name: updatedUser.name,
                age: updatedUser.age,
                country: updatedUser.country,
                email: updatedUser.email
            });
        } else {
            res.status(400).json({ message: "Failed to update user data" });
        }
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            age: user.age,
            country: user.country,
            email: user.email
        });
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({});
    // res.status(200).json({ message: "All Users fetched successfully..." });
    res.json(users).status(200);
});

const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    try {
        await User.deleteOne({_id: req.params.id})
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error: error.message });
    }
});


export {
    getUser,
    getUsers,
    createUser,
    deleteUser,
    updateUser,
};