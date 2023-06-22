const Summary = require("../../models/goalModels/summaryModel");

// Controller methods for summaries
const getAllSummaries = async (req, res) => {
  try {
    const userId = req.user;
    const items = await Summary.find({ creator: userId });
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getSummaryById = async (req, res) => {
  try {
    const item = await Summary.findById(req.params.id);
    if (!item) {
      res.staus(404).json({ message: "Not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createSummary = async (req, res) => {
  const { title, body, item } = req.body;

  try {
    const it = new Summary({ title, body, item });
    it.save();
    res.status(200).json(it);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateSummary = async (req, res) => {
  const { title, body, item } = req.body;

  try {
    const updatedItem = await Summary.findByIdAndUpdate(
      req.params.id,
      {
        title,
        body,
        item,
      },
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteSummary = async (req, res) => {
  try {
    const foundItem = await Summary.findById(req.params.id);
    if (!foundItem) {
      return res.status(404).json({ message: "Not found" });
    }
    if (req.user != foundItem.creator) {
      res
        .staus(400)
        .json({ message: "You don't have any permissions for this" });
    }
    const deletedItem = await Summary.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json(deletedItem);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllSummaries,
  getSummaryById,
  createSummary,
  updateSummary,
  deleteSummary,
};
