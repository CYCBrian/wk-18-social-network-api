// Import the User model from the models directory
const { User, Thought } = require("../models");

// Export the controller functions for thought and reaction management
module.exports = {
  // Controller function to get all thoughts
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Controller function to get a single thought by ID
  async getOneThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });
      if (!thought) {
        return res.status(404).json({
          message: "No thought found with this ID.",
        });
      }
      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Controller function to create a new thought
  async createThought(req, res) {
    try {
      const newThought = await Thought.create(req.body);
      const thoughtCreator = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { thoughts: newThought._id } },
        { new: true }
      );
      if (!thoughtCreator) {
        return res.status(404).json({
          message: "Thought created but no user attached.",
        });
      }
      res.json(newThought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Controller function to update an existing thought
  async updateThought(req, res) {
    try {
      const updateThought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      if (!updateThought) {
        return res.status(404).json({
          message: "No thought found with this ID.",
        });
      }
      res.json(updateThought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Controller function to delete a thought
  async deleteThought(req, res) {
    try {
      const removeThought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
      if (!removeThought) {
        return res.status(404).json({
          message: "No thought found with this ID.",
        });
      }
      const removeThoughtFromUser = await User.findOneAndUpdate(
        { thoughts: req.params.thoughtId },
        { $pull: { thoughts: req.params.thoughtId } },
        { new: true }
      );
      if (!removeThoughtFromUser) {
        return res.status(500).json({
          message: "Failed to remove thought from user's thoughts.",
        });
      }
      res.json(removeThought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Controller function to add a reaction to a thought
  async addReaction(req, res) {
    try {
      const addToThought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );
      if (!addToThought) {
        return res.status(500).json({
          message: "No thought found with this ID.",
        });
      }
      res.json(addToThought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Controller function to delete a reaction from a thought
  async deleteReaction(req, res) {
    try {
      const removeFromThought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions:{ reactionId: req.params.reactionId} } },
        { runValidators: true, new: true }
      );
      if (!removeFromThought) {
        return res.status(500).json({
          message: "No thought found with this ID.",
        });
      }
      res.json(removeFromThought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
