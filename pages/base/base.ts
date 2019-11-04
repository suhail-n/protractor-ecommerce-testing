import { browser } from 'protractor';

export class Base {
    public baseUrl: string;

    constructor() {
        this.baseUrl = "https://qaclickacademy.github.io/protocommerce/"
    }

    public async navigate(): Promise<void> {
        await browser.get(this.baseUrl);
        await browser.manage().window().maximize();
    }
}