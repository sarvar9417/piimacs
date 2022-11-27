const { express, cors, path } = require("./packages");
const app = express();
const { start } = require("./db/db");
const { routers } = require("./routers/routers");

app.use(cors());
start(app).then(() => {});
routers(app);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "./../frontend", "build")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "./../frontend", "build", "index.html")
    );
  });
}
