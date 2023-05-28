const Note = require("../../models/goalModels/notesModel");

// Controller methods for notes
const getAllNotes = async (req, res) => {
  try {
    const items = await Note.find();
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getNoteById = async (req, res) => {
  try {
    const item = await Note.findById(req.params.id);
    if (!item) {
      res.staus(404).json({ message: "Not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createNote = async (req, res) => {
  const { title, note, keyword } = req.body;

  try {
    const item = new Note({ title, note, keyword });
    item.save();
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateNote = async (req, res) => {
  const { title, note, keyword } = req.body;

  try {
    const updatedItem = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        note,
        keyword,
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

const deleteNote = async (req, res) => {
  try {
    const deletedItem = await Note.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json(deletedItem);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
};
