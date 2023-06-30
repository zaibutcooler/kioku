const express = require("express");
const router = express.Router();
const goalController = require("../controllers/goalControllers/goalController");
const noteController = require("../controllers/goalControllers/noteController");
const diaryController = require("../controllers/goalControllers/diaryController");
const summaryController = require("../controllers/goalControllers/summaryController");
const historyController = require("../controllers/goalControllers/historyController");
const protected = require("../middlewares/protectRoute");

router.use(express.json());

// Routes for goals
router.get("/goals", protected, goalController.getAllGoals);
router.get("/goals/:id", protected, goalController.getGoalById);
router.post("/goals", protected, goalController.createGoal);
router.patch("/goals/:id", protected, goalController.updateGoal);
router.delete("/goals/:id", protected, goalController.deleteGoal);

// Routes for notes
router.get("/notes", protected, noteController.getAllNotes);
router.get("/notes/:id", protected, noteController.getNoteById);
router.post("/notes", protected, noteController.createNote);
router.patch("/notes/:id", protected, noteController.updateNote);
router.delete("/notes/:id", protected, noteController.deleteNote);

// Routes for diaries
router.get("/diary", protected, diaryController.getAllDiaries);
router.get("/diary/:id", protected, diaryController.getDiaryById);
router.post("/diary", protected, diaryController.createDiary);
router.patch("/diary/:id", protected, diaryController.updateDiary);
router.delete("/diary/:id", protected, diaryController.deleteDiary);

// Routes for summaries
router.get("/summaries", protected, summaryController.getAllSummaries);
router.get("/summaries/:id", protected, summaryController.getSummaryById);
router.post("/summaries", protected, summaryController.createSummary);
router.patch("/summaries/:id", protected, summaryController.updateSummary);
router.delete("/summaries/:id", protected, summaryController.deleteSummary);

// Routes for histories
router.get("/histories", protected, historyController.getAllHistories);
router.get("/histories/:id", protected, historyController.getHistoryById);
router.post("/histories", protected, historyController.createHistory);
router.patch("/histories/:id", protected, historyController.updateHistory);
router.delete("/histories/:id", protected, historyController.deleteHistory);

module.exports = router;
