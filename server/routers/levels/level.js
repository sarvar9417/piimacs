const { validateLevel } = require("../../models/validators");
const { Level } = require("../../models/models");

const createLevel = async (req, res) => {
  try {
    const { error } = validateLevel(req.body);
    if (error) {
      return res.status(400).json({ error: error.message });
    }

    const { name, image } = req.body;
    const isCreated = await Level.findOne({ name });
    if (isCreated) {
      return res.status(400).json({ error: "This level is already created" });
    }

    const newLevel = new Level({ name, image });
    await newLevel.save();
    return res.status(200).json({ ...newLevel });
  } catch (err) {
    return res.status(500).json({ error: "Serverda xatolik yuz berdi..." });
  }
};

const getLevels = async (req, res) => {
  try {
    const levels = await Level.find();
    if (!levels) {
      return res.status(404).json({ error: "Serverda xatolik yuz berdi..." });
    }
    return res.status(200).json(levels);
  } catch (err) {
    return res.status(500).json({ error: "Serverda xatolik yuz berdi..." });
  }
};

module.exports = { createLevel, getLevels };
