import express from "express";
import { getAll, getOne, createOne, updateOne, deleteOne } from "./controller";
import protectRoutes from "../../middlewares/protectRoute";

const router = express.Router();
router.use(express.json());

router.get("/", protectRoutes, getAll);

router.get("/:id", protectRoutes, getOne);

router.post("/", protectRoutes, createOne);

router.patch("/:id", protectRoutes, updateOne);

router.delete("/:id", protectRoutes, deleteOne);

export default router;
