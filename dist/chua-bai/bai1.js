"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoSum = void 0;
const twoSum = (listNumber, target) => {
    for (let i = 0; i < listNumber.length; i++) {
        for (let j = i + 1; j < listNumber.length; j++) {
            if (listNumber[i] + listNumber[j] == target) {
                return [i, j];
            }
        }
    }
    return [];
};
exports.twoSum = twoSum;
//# sourceMappingURL=bai1.js.map