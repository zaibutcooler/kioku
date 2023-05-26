const Summary = require("../../models/goalModels/summaryModel");

// Controller methods for summaries
const getAllSummaries = async (req, res) => {
  try {
    const items = await Summary.find();
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
    const item = new Summary({ title, body, item });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateSummary = async (req, res) => {
  const { title, body, item } = req.body;

  try {
    const item = Summary.findByIdAndUpdate(
      req.params.id,
      {
        title,
        body,
        item,
      },
      { new: true }
    );
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteSummary = async (req, res) => {
  try {
    item = Summary.findByIdAndDelete(req.params.id);
    if (!item) {
      res.staus(404).json({ message: "Not found" });
    }
    res.status(200).json(item);
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
