"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// utils
// models
const User_js_1 = __importDefault(require("../models/User.js"));
exports.default = {
    onGetAllUsers: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const users = yield User_js_1.default.find();
            return res.status(200).json({ success: true, users });
        }
        catch (error) {
            return res.status(500).json({ success: false, error: error });
        }
    }),
    onGetUserById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield User_js_1.default.findById(req.params.id);
            return res.status(200).json({ success: true, user });
        }
        catch (error) {
            return res.status(500).json({ success: false, error: error });
        }
    }),
    onCreateUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(req.body);
        try {
            const { firstName, lastName, type } = req.body;
            const user = yield User_js_1.default.create({ firstName, lastName, type });
            return res.status(200).json({ success: true, user });
        }
        catch (error) {
            console.log({ error });
            return res.status(500).json({ success: false, error: error });
        }
    }),
    onDeleteUserById: (req, res) => __awaiter(void 0, void 0, void 0, function* () { }),
};
