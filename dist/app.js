"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Controllers Routes
app.get("/", (req, res) => {
    res.send("Welcome To Express Server with TS !!!");
});
app.listen(3000, () => {
    console.log(`Server has Started On Port 3000`);
});
