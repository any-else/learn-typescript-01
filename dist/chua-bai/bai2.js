"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCheckBracket = void 0;
const isCheckBracket = (str) => {
    const stack = [];
    const open = ["{", "[", "("];
    const close = ["}", "]", ")"];
    for (let i = 0; i < str.length; i++) {
        if (open.includes(str[i])) {
            stack.push(str[i]);
        }
        else if (close.includes(str[i])) {
            const idxClose = close.indexOf(str[i]);
            const openEqual = open[idxClose];
            console.log("equal", openEqual);
            if (stack.length === 0 || stack.pop() != openEqual) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
exports.isCheckBracket = isCheckBracket;
//# sourceMappingURL=bai2.js.map