"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// controllers
const chatRoom_js_1 = __importDefault(require("../controllers/chatRoom.js"));
const router = express_1.default.Router();
router
    .get('/', chatRoom_js_1.default.getRecentConversation)
    .get('/:roomId', chatRoom_js_1.default.getConversationByRoomId)
    .post('/initiate', chatRoom_js_1.default.initiate)
    .post('/:roomId/message', chatRoom_js_1.default.postMessage)
    .put('/:roomId/mark-read', chatRoom_js_1.default.markConversationReadByRoomId);
exports.default = router;
