const Diary = require("../../models/goalModels/diaryModel");

const getAllDiaries = async (req, res) => {
  try {
    const userId = req.user ? req.user.id : null;
    const items = await Diary.find({ creator: userId });
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getDiaryById = async (req, res) => {
  try {
    const diary = await Diary.findById(req.params.id);
    if (!diary) {
      res.status(404).json({ message: "Not found" });
    }
    if (req.user && req.user.id != diary.creator) {
      res
        .status(400)
        .json({ message: "You don't have any permissions for this" });
    }
    res.status(200).json(diary);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createDiary = async (req, res) => {
  const { title, body } = req.body;

  try {
    const userId = req.user ? req.user.id : null;
    const newDiary = new Diary({ creator: userId, title, body });
    await newDiary.save();

    res.status(200).json(newDiary);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateDiary = async (req, res) => {
  const { creator, title, body } = req.body;
  try {
    const updatedDiary = await Diary.findByIdAndUpdate(
      req.params.id,
      { creator, title, body },
      { new: true }
    );
    if (!updatedDiary) {
      return res.status(404).json({ message: "Not found" });
    }
    if (req.user && req.user.id != updatedDiary.creator) {
      res
        .status(400)
        .json({ message: "You don't have any permissions for this" });
    }
    res.status(200).json(updatedDiary);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteDiary = async (req, res) => {
  try {
    const foundItem = await Diary.findById(req.params.id);
    if (!foundItem) {
      return res.status(404).json({ message: "Not found" });
    }
    if (req.user && req.user.id != foundItem.creator) {
      res
        .status(400)
        .json({ message: "You don't have any permissions for this" });
    }
    const deletedDiary = await Diary.findByIdAndDelete(req.params.id);

    res.status(200).json(deletedDiary);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllDiaries,
  getDiaryById,
  createDiary,
  updateDiary,
  deleteDiary,
};
