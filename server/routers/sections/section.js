const { validateSection } = require("../../models/validators");
const { Level, Section } = require("../../models/models");

const createSection = async (req, res) => {
  try {
    const { error } = validateSection(req.body);
    if (error) {
      return res.status(400).json({ error: error.message });
    }

    const { number, name, level } = req.body;
    const oldLevel = await Level.findById(level);
    if (!oldLevel) {
      return res.status(400).json({ error: "This level is not created" });
    }
    const oldSection = await Section.findOne({ name, level, number });
    if (oldSection) {
      return res.status(400).json({ error: "This section is already created" });
    }

    const newSection = new Section({ name, level, number });
    await newSection.save();

    return res.status(200).json(newSection);
  } catch (err) {
    return res.status(500).json({ error: "Serverda xatolik yuz berdi..." });
  }
};

const getSectionsByLevel = async (req, res) => {
  try {
    const { level } = req.body;
    const oldLevel = await Level.findById(level);
    if (!oldLevel) {
      return res.status(400).json({ error: "This level is not available" });
    }

    const sections = await Section.find({ level })
      .sort({ number: 1 })
      .select("name number level");

    return res.status(200).json(sections);
  } catch (err) {
    return res.status(500).json({ error: "Serverda xatolik yuz berdi..." });
  }
};

module.exports = { createSection, getSectionsByLevel };
