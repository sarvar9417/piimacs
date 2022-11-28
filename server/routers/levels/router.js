const { router } = require("../../packages");
const { createLevel, getLevels } = require("./level");

router.post("/create", createLevel);
router.get("/getall", getLevels);

module.exports = router;
