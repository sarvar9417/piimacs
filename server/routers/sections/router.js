const { router } = require("../../packages");
const { createSection, getSectionsByChapter } = require("./section");

router.post("/create", createSection);
router.post("/getbychapter", getSectionsByChapter);

module.exports = router;
