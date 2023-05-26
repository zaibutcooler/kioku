const History = require("../../models/goalModels/historyModel");

// Controller methods for histories
const getAllHistories = async (req, res) => {
  try {
    const items = await History.find();
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
      res.staus(404).json({ message: "Not found" });
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
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateHistory = async (req, res) => {
  const { title, win, why } = req.body;

  try {
    const item = History.findByIdAndUpdate(
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
    item = History.findByIdAndDelete(req.params.id);
    if (!item) {
      res.staus(404).json({ message: "Not found" });
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
