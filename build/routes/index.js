"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// middlewares
const jwt_1 = require("../middlewares/jwt");
const router = express_1.default.Router();
router
    .post('/login/:userId', jwt_1.encode, (req, res, next) => { });
exports.default = router;
