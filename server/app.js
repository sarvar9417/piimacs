const { express, cors, path, socketIo, http } = require("./packages");
const app = express();
const { Server } = socketIo;
const server = http.createServer(app);
const { start } = require("./db/db");
const { routers } = require("./routers/routers");
const { socketIO } = require("./socketio/socket");

const io = new Server(server, {
  cors: {
    origin: "*",
    method: ["*"],
  },
});

app.use(cors());
socketIO(io);
start(server).then(() => {});
routers(app);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "./../frontend", "build")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "./../frontend", "build", "index.html")
    );
  });
}
