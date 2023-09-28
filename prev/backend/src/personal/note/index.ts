import express from "express";

import noteFolderController from "./noteFolderController";
import noteController from "./noteController";
import protectRoute from "../../middlewares/protectRoute";

const router = express.Router();
router.use(express.json());

//Scaffold
router.get("/folder/", protectRoute, noteFolderController.getAll);

router.get("/folder/:id", protectRoute, noteFolderController.getOne);

router.post("/folder/", protectRoute, noteFolderController.createOne);

router.patch("/folder/:id", protectRoute, noteFolderController.updateOne);

router.delete("/folder/:id", protectRoute, noteFolderController.deleteOne);

//Tracker

router.get("/", protectRoute, noteController.getAll);

router.get("/:id", protectRoute, noteController.getOne);

router.post("/", protectRoute, noteController.createOne);

router.patch("/:id", protectRoute, noteController.updateOne);

router.delete("/:id", protectRoute, noteController.deleteOne);

export default router;
