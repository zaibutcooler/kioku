import express from "express";

import majorController from "./majorController";
import minorController from "./minorController";
import protectRoute from "../../middlewares/protectRoute";

const router = express.Router();
router.use(express.json());

//Scaffold
router.get("/major/", protectRoute, majorController.getAll);

router.get("/major/:id", protectRoute, majorController.getOne);

router.post("/major/", protectRoute, majorController.createOne);

router.patch("/major/:id", protectRoute, majorController.updateOne);

router.delete("/major/:id", protectRoute, majorController.deleteOne);

//Tracker

router.get("/minor/", protectRoute, minorController.getAll);

router.get("/minor/:id", protectRoute, minorController.getOne);

router.post("/minor/", protectRoute, minorController.createOne);

router.patch("/minor/:id", protectRoute, minorController.updateOne);

router.delete("/minor/:id", protectRoute, minorController.deleteOne);

export default router;
