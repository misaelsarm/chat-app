"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// controllers
const delete_js_1 = __importDefault(require("../controllers/delete.js"));
const router = express_1.default.Router();
router
    .delete('/room/:roomId', delete_js_1.default.deleteRoomById)
    .delete('/message/:messageId', delete_js_1.default.deleteMessageById);
exports.default = router;
