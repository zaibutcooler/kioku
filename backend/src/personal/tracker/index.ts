import { Router } from "express";

import scaffoldController from "./ScaffoldController";
import trackercontroller from "./Trackercontroller";

const router = Router();

//Scaffold
router.get("/", scaffoldController.getAll);

router.get("/:id", scaffoldController.getOne);

router.post("/", scaffoldController.createOne);

router.patch("/:id", scaffoldController.updateOne);

router.delete("/:id", scaffoldController.deleteOne);

//Tracker

router.get("/", trackercontroller.getAll);

router.get("/:id", trackercontroller.getOne);

router.post("/", trackercontroller.createOne);

router.patch("/:id", trackercontroller.updateOne);

router.delete("/:id", trackercontroller.deleteOne);

export default router;
