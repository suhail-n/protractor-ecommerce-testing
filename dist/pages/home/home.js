"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const act_1 = require("./act");
const verify_1 = require("./verify");
class ECommerceHome {
    constructor(_act = new act_1.Act(), _verify = new verify_1.Verify()) {
        this._act = _act;
        this._verify = _verify;
    }
    get act() {
        return this._act;
    }
    get verify() {
        return this._verify;
    }
}
exports.ECommerceHome = ECommerceHome;
