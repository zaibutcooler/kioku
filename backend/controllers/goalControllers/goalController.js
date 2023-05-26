const Goal = require("../../models/goalModels/goalsModel");

// Controller methods for goals
const getAllGoals = async (req, res) => {
  try {
    const items = await Goal.find();
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getGoalById = async (req, res) => {
  try {
    const item = await Goal.findById(req.params.id);
    if (!item) {
      res.staus(404).json({ message: "Not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createGoal = async (req, res) => {
  const { title, note, deadline, isCompleted, risks } = req.body;

  try {
    const item = new Goal({ title, note, deadline, isCompleted, risks });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateGoal = async (req, res) => {
  const { title, note, deadline, isCompleted, risks } = req.body;

  try {
    const item = Goal.findByIdAndUpdate(
      req.params.id,
      {
        title,
        note,
        deadline,
        isCompleted,
        risks,
      },
      { new: true }
    );
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteGoal = async (req, res) => {
  try {
    item = Goal.findByIdAndDelete(req.params.id);
    if (!item) {
      res.staus(404).json({ message: "Not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllGoals,
  getGoalById,
  createGoal,
  updateGoal,
  deleteGoal,
};
