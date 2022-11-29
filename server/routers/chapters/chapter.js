const { validateChapter } = require("../../models/validators");
const { Level, Chapter } = require("../../models/models");

const createChapter = async (req, res) => {
  try {
    const { error } = validateChapter(req.body);
    if (error) {
      return res.status(400).json({ error: error.message });
    }

    const { number, name, level } = req.body;
    const oldLevel = await Level.findById(level);
    if (!oldLevel) {
      return res.status(400).json({ error: "This level is not created" });
    }
    const oldChapter = await Chapter.findOne({ name, level, number });
    if (oldChapter) {
      return res.status(400).json({ error: "This chapter is already created" });
    }

    const newChapter = new Chapter({ name, level, number });
    await newChapter.save();

    return res.status(200).json(newChapter);
  } catch (err) {
    return res.status(500).json({ error: "Serverda xatolik yuz berdi..." });
  }
};

const getChaptersByLevel = async (req, res) => {
  try {
    const { level } = req.body;
    const oldLevel = await Level.findById(level);
    if (!oldLevel) {
      return res.status(400).json({ error: "This level is not available" });
    }

    const chapters = await Chapter.find({ level })
      .sort({ number: 1 })
      .select("name number level");

    return res.status(200).json(chapters);
  } catch (err) {
    return res.status(500).json({ error: "Serverda xatolik yuz berdi..." });
  }
};

module.exports = { createChapter, getChaptersByLevel };
