import express from "express";

import scaffoldController from "./ScaffoldController";
import trackercontroller from "./Trackercontroller";
import protectRoute from "../../middlewares/protectRoute";

const router = express.Router();

//Scaffold
router.get("/scaffold/", protectRoute, scaffoldController.getAll);

router.get("/scaffold/:id", protectRoute, scaffoldController.getOne);

router.post("/scaffold/", protectRoute, scaffoldController.createOne);

router.patch("/scaffold/:id", protectRoute, scaffoldController.updateOne);

router.delete("/scaffold/:id", protectRoute, scaffoldController.deleteOne);

//Tracker

router.get("/", protectRoute, trackercontroller.getAll);

router.get("/:id", protectRoute, trackercontroller.getOne);

router.post("/", protectRoute, trackercontroller.createOne);

router.patch("/:id", protectRoute, trackercontroller.updateOne);

router.delete("/:id", protectRoute, trackercontroller.deleteOne);

export default router;
