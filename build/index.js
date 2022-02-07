"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// routes
const index_1 = __importDefault(require("./routes/index"));
const user_js_1 = __importDefault(require("./routes/user.js"));
const chatRoom_js_1 = __importDefault(require("./routes/chatRoom.js"));
const delete_js_1 = __importDefault(require("./routes/delete.js"));
// middlewares
const jwt_1 = require("./middlewares/jwt");
const config_1 = require("./database/config");
const app = (0, express_1.default)();
/** Get port from environment and store in Express. */
const port = process.env.PORT || "5001";
app.set("port", port);
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// base de datos
(0, config_1.dbConnection)();
app.use("/", index_1.default);
app.use("/users", user_js_1.default);
app.use("/room", jwt_1.decode, chatRoom_js_1.default);
app.use("/delete", delete_js_1.default);
/** catch 404 and forward to error handler */
app.use('*', (req, res) => {
    return res.status(404).json({
        success: false,
        message: 'API endpoint doesnt exist'
    });
});
/** Create HTTP server. */
const server = http_1.default.createServer(app);
/** Listen on provided port, on all network interfaces. */
server.listen(port);
/** Event listener for HTTP server "listening" event. */
server.on("listening", () => {
    console.log(`Listening on port:: http://localhost:${port}/`);
});
