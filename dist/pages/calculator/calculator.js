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
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Calculator {
    constructor() {
        this._firstNum = protractor_1.element(protractor_1.by.model("first"));
        this._secondNum = protractor_1.element(protractor_1.by.model("second"));
    }
    verifyHistory(text) {
        return __awaiter(this, void 0, void 0, function* () {
            yield expect(protractor_1.element(protractor_1.by.tagName("h4")).getText()).toBe(text);
            console.log("text: " + text);
        });
    }
    get firstNum() {
        return this._firstNum;
    }
    get secondNum() {
        return this._secondNum;
    }
}
exports.Calculator = Calculator;
