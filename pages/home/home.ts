import { ElementFinder, browser } from 'protractor';
import { HomeElements } from './locator.elements';
import { Act } from './act';
import { Verify } from './verify';

export class ECommerceHome {
    constructor(
        private _act: Act = new Act(),
        private _verify: Verify = new Verify()
    ) { }

    public get act(): Act {
        return this._act;
    }

    public get verify(): Verify {
        return this._verify;
    }





}