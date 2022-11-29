const { router } = require("../../packages");
const { createSection, getSectionsByLevel } = require("./section");

router.post("/create", createSection);
router.post("/getbylevel", getSectionsByLevel);

module.exports = router;
