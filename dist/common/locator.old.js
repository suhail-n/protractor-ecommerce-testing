"use strict";
// import { by, element, ElementFinder } from 'protractor';
// import { Locator } from 'protractor/built/locators';
// import { By } from 'selenium-webdriver';
// // type F<T extends number | string> = {
// //     a: T,
// // };
// // function f<T extends number | string>(t: T) {
// //     const a: F<typeof t> = { a: t };
// //     return a;
// // }
// type F<T extends typeof by.name | typeof by.cssContainingText> = {
//     name: string,
//     locator: string,
//     locatorType: T,
//     description?: string
// };
// function getLocProperties<T extends typeof by.name | typeof by.cssContainingText>(locatorType: T, name: string, locator: string, description?: string) {
//     const locatorProps: F<typeof locatorType> = {
//         name,
//         locator,
//         locatorType,
//         description
//     };
//     return locatorProps;
// }
// let nameEE = getLocProperties(
//     by.name,
//     "name field",
//     "name",
//     "this is a description");
// let eleF1: ElementFinder = element(nameEE.locatorType(nameEE.locator));
// let empStat = getLocProperties(
//     by.cssContainingText,
//     "employment status field",
//     "input[name='inlineRadioOptions']+label",
//     "employment status radio buttons")
// let el2: ElementFinder = element(empStat.locatorType(empStat.locator, "Employed"));
// let nameE: F<typeof by.name> = {
//     name: "name",
//     locator: "name",
//     locatorType: by.name,
//     description: "This is a locator for the name box"
// };
// // let eleF1: ElementFinder = element(nameE.locatorType(nameE.locator));
// let empStatus: F<typeof by.cssContainingText> = {
//     name: "Employment Status",
//     locator: "input[name='inlineRadioOptions']+label",
//     locatorType: by.cssContainingText,
//     description: "Finds location of employment status based on css selector containing a text"
// };
// let eleF2: ElementFinder = element(empStatus.locatorType(empStatus.locator, "junior employee"));
// type LocType<T extends typeof by.name | typeof by.cssContainingText> = T;
// type LocatorType1 = (selector: string, optional?: string) => Locator;
// type LocatorType = typeof by.name | typeof by.cssContainingText | LocatorType1;
// // export interface LocatorProperties<T extends number | string> {
// //     name: string;
// //     locator: string;
// //     locatorType: F<T>;
// //     description?: string;
// // };
// // let e: LocatorProperties<string> = {
// //     name: "df",
// //     locator: "",
// //     locatorType: f(3)
// // };
// export interface LocatorProperties<T extends typeof by.name | typeof by.cssContainingText> {
//     name: string;
//     locator: string;
//     locatorType: T;
//     description?: string;
// };
// let nameEle: LocatorProperties<typeof by.name> = {
//     name: "name",
//     locator: "name",
//     locatorType: by.name,
//     description: "This is a locator for the name box"
// };
// let ele1: ElementFinder = element(nameEle.locatorType(nameEle.locator));
// let employmentStatus: LocatorProperties<typeof by.cssContainingText> = {
//     name: "Employment Status",
//     locator: "input[name='inlineRadioOptions']+label",
//     locatorType: by.cssContainingText,
//     description: "Finds location of employment status based on css selector containing a text"
// };
// let ele2: ElementFinder = element(employmentStatus.locatorType(employmentStatus.locator, "junior employee"));
