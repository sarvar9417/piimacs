const { validateSection } = require("../../models/validators");
const { Level, Section, Chapter } = require("../../models/models");

const createSection = async (req, res) => {
  try {
    console.log(req);
    const { error } = validateSection(req.body);
    if (error) {
      return res.status(400).json({ error: error.message });
    }

    const { number, name, level, chapter } = req.body;
    const oldLevel = await Level.findById(level);
    if (!oldLevel) {
      return res.status(400).json({ error: "This level is not created" });
    }

    const oldChapter = await Chapter.findById(chapter);
    if (!oldChapter) {
      return res.status(400).json({ error: "This chapter is not created" });
    }

    const oldSection = await Section.findOne({ name, level, number, chapter });
    if (oldSection) {
      return res.status(400).json({ error: "This section is already created" });
    }

    const newSection = new Section({ name, level, number, chapter });
    await newSection.save();

    return res.status(200).json(newSection);
  } catch (err) {
    return res.status(500).json({ error: "Serverda xatolik yuz berdi..." });
  }
};

const getSectionsByChapter = async (req, res) => {
  try {
    const { chapter } = req.body;
    const oldLevel = await Level.findById(chapter);
    if (!oldLevel) {
      return res.status(400).json({ error: "This level is not available" });
    }

    const sections = await Section.find({ chapter })
      .sort({ number: 1 })
      .select("name number chapter");

    return res.status(200).json(sections);
  } catch (err) {
    return res.status(500).json({ error: "Serverda xatolik yuz berdi..." });
  }
};

module.exports = { createSection, getSectionsByChapter };
