const express = require("express");
const router = express.Router();
const goalController = require("../controllers/goalControllers/goalController");
const noteController = require("../controllers/goalControllers/noteController");
const diaryController = require("../controllers/goalControllers/diaryController");
const summaryController = require("../controllers/goalControllers/summaryController");
const historyController = require("../controllers/goalControllers/historyController");

router.use(express.json());

// Routes for goals
router.get("/goals", goalController.getAllGoals);
router.get("/goals/:id", goalController.getGoalById);
router.post("/goals", goalController.createGoal);
router.put("/goals/:id", goalController.updateGoal);
router.delete("/goals/:id", goalController.deleteGoal);

// Routes for notes
router.get("/notes", noteController.getAllNotes);
router.get("/notes/:id", noteController.getNoteById);
router.post("/notes", noteController.createNote);
router.put("/notes/:id", noteController.updateNote);
router.delete("/notes/:id", noteController.deleteNote);

// Routes for diaries
router.get("/diary", diaryController.getAllDiaries);
router.get("/diary/:id", diaryController.getDiaryById);
router.post("/diary", diaryController.createDiary);
router.put("/diary/:id", diaryController.updateDiary);
router.delete("/diary/:id", diaryController.deleteDiary);

// Routes for summaries
router.get("/summaries", summaryController.getAllSummaries);
router.get("/summaries/:id", summaryController.getSummaryById);
router.post("/summaries", summaryController.createSummary);
router.put("/summaries/:id", summaryController.updateSummary);
router.delete("/summaries/:id", summaryController.deleteSummary);

// Routes for histories
router.get("/histories", historyController.getAllHistories);
router.get("/histories/:id", historyController.getHistoryById);
router.post("/histories", historyController.createHistory);
router.put("/histories/:id", historyController.updateHistory);
router.delete("/histories/:id", historyController.deleteHistory);

module.exports = router;
