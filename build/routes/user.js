"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// controllers
const user_js_1 = __importDefault(require("../controllers/user.js"));
const router = express_1.default.Router();
router
    .get('/', user_js_1.default.onGetAllUsers)
    .post('/', user_js_1.default.onCreateUser)
    .get('/:id', user_js_1.default.onGetUserById)
    .delete('/:id', user_js_1.default.onDeleteUserById);
exports.default = router;
