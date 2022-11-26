const { mongoose, config } = require("../packages");
const PORT = config.get("PORT") || 8800;

module.exports.start = async (app) => {
  try {
    await mongoose
      .connect(config.get("MONGO_URI"), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connect to MongoDB");
      })
      .catch(() => {
        console.log("Connecting error to MongoDB");
      });
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
  } catch (error) {
    console.log("Ошибка в сервере", error.message);
    process.exit(1);
  }
};
