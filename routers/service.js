const { startDay, firstBreak, secondBreak, endDay } = require("../controllers");
const router = require("express").Router();

router.post("/start_day", startDay);
router.post("/first_break", firstBreak);
router.post("/second_break", secondBreak);
router.post("/end_day", endDay);

module.exports = router;
