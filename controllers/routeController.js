const express = require("express");
const router = express.Router();

const dataController = require("./dataController");
const viewController = require("./viewController");

// ----- View Routes (SSR) -----
router.get("/", viewController.home);
router.get("/engineers", viewController.index);
router.get("/engineers/new", viewController.new);
router.get("/engineers/:id", viewController.show);
router.get("/engineers/:id/edit", viewController.edit);

// ----- Data Routes (API CRUD) -----
router.get("/api/engineers", dataController.index);
router.post("/api/engineers", dataController.create);
router.get("/api/engineers/:id", dataController.show);
router.put("/api/engineers/:id", dataController.update);
router.delete("/api/engineers/:id", dataController.destroy);

module.exports = router;
