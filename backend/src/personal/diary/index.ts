import express from "express";
import { getAll, getOne, createOne, updateOne, deleteOne } from "./controller";

const router = express.Router();
router.use(express.json());

router.get("/", getAll);

router.get("/:id", getOne);

router.post("/", createOne);

router.patch("/:id", updateOne);

router.delete("/:id", deleteOne);

export default router;
