const express = require("express");
const router = express.Router();
const { image } = require("../config/multer");
const {
  createDiary,
  getDiary,
  getSingleDiary,
  updateDiary,
  deleteDiary,
} = require("../controller/diaryController");

router.route("/diary/:id").post(image, createDiary);
router.route("/diary/:id").get(getDiary);
router
  .route("/diary/:id/:diary")
  .get(getSingleDiary)
  .patch(updateDiary)
  .delete(deleteDiary);

module.exports = router;
