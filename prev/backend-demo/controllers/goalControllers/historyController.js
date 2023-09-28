const History = require("../../models/goalModels/historyModel");

// Controller methods for histories
const getAllHistories = async (req, res) => {
  try {
    const userId = req.user;
    const items = await History.find({ creator: userId });
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getHistoryById = async (req, res) => {
  try {
    const item = await History.findById(req.params.id);
    if (!item) {
      res.status(404).json({ message: "Not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createHistory = async (req, res) => {
  const { title, win, why } = req.body;

  try {
    const item = new History({ title, win, why });
    await item.save(); // Fix: Added 'await' to ensure the item is saved before responding
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateHistory = async (req, res) => {
  const { title, win, why } = req.body;

  try {
    const item = await History.findByIdAndUpdate(
      req.params.id,
      {
        title,
        win,
        why,
      },
      { new: true }
    );
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteHistory = async (req, res) => {
  try {
    const foundItem = await History.findById(req.params.id);
    if (!foundItem) {
      return res.status(404).json({ message: "Not found" });
    }
    if (req.user != foundItem.creator) {
      res
        .staus(400)
        .json({ message: "You don't have any permissions for this" });
    }
    const item = await History.findByIdAndDelete(req.params.id); // Fix: Declare 'item' using 'const'
    if (!item) {
      res.status(404).json({ message: "Not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllHistories,
  getHistoryById,
  createHistory,
  updateHistory,
  deleteHistory,
};
