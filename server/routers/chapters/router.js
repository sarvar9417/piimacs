const { router } = require("../../packages");
const { createChapter, getChaptersByLevel } = require("./chapter");

router.post("/create", createChapter);
router.post("/getbylevel", getChaptersByLevel);

module.exports = router;
