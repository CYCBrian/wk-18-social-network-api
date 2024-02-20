// Import the User model from the models directory
const { User, Thought } = require("../models");

// Export the controller functions for user and friend management
module.exports = {
  // Controller function to get all users
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Controller function to get a single user by ID
  async getOneUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId }).select(
        "-__v"
      );
      if (!user) {
        return res.status(404).json({
          message: "No user with this ID.",
        });
      }
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Controller function to create a new user
  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Controller function to update an existing user
  async updateUser(req, res) {
    try {
      const updateUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      if (!updateUser) {
        return res.status(404).json({
          message: "No user found with this ID.",
        });
      }
      res.json(updateUser);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Controller function to delete a user
  async deleteUser(req, res) {
    try {
      const removeUser = await User.findOneAndDelete({
        _id: req.params.userId,
      });
      if (!removeUser) {
        return res.status(404).json({
          message: "No user found with this ID.",
        });
      }
      res.json(removeUser);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Controller function to add a friend to a user
  async addFriend(req, res) {
    try {
      const newFriend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendID } },
        { runValidators: true, new: true }
      );
      if (!newFriend) {
        return res.status(404).json({
          message: "No user found with this ID.",
        });
      }
      res.json(newFriend);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Controller function to delete a friend from a user
  async deleteFriend(req, res) {
    try {
      const removeFriend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendID } },
        { runValidators: true, new: true }
      );
      if (!removeFriend) {
        return res.status(404).json({
          message: "No user found with this ID.",
        });
      }
      res.json(removeFriend);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
