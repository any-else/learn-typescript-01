export const isCheckBracket = (str: string): boolean => {
  const stack: string[] = []; // lưu trữ những dấu mở
  const open: string[] = ["{", "[", "("];
  const close: string[] = ["}", "]", ")"];
  for (let i = 0; i < str.length; i++) {
    if (open.includes(str[i])) {
      stack.push(str[i]);
    } else if (close.includes(str[i])) {
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
