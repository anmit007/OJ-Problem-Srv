const express = require("express");
const { problemController } = require("../../controllers");
const problemRouter = express.Router();
problemRouter.get("/ping", problemController.ping);
problemRouter.get("/", problemController.getProblems);
problemRouter.get("/:id", problemController.getProblem);
problemRouter.post("/", problemController.addProblem);
problemRouter.delete("/:id", problemController.deleteProblem);
problemRouter.patch("/:id", problemController.upadateProblem);

module.exports = problemRouter;
