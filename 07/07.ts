function fixPackages(packages: string): string {
  if (!packages) return "";

  const stack: Array<string> = [];

  for (let char of packages) {
    if (char === ")") {
      let revsersedStack = "";
      while (stack.length && stack[stack.length - 1] !== "(") {
        revsersedStack += stack.pop();
      }
      stack.pop();
      for (let reversedChar of revsersedStack) {
        stack.push(reversedChar);
      }
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
}

console.log(fixPackages("a(cb)de"));
// ➞ "abcde"
// We reverse "cb" inside the parentheses

// console.log(fixPackages("a(bc(def)g)h"));
// // ➞ "agdefcbh"
// // 1st we reverse "def" → "fed", then we reverse "bcfedg" → "gdefcb"

// console.log(fixPackages("abc(def(gh)i)jk"));
// // ➞ "abcighfedjk"
// // 1st we reverse "gh" → "hg", then "defhgi" → "ighfed"

// console.log(fixPackages("a(b(c))e"));
// // ➞ "acbe"
// // 1st we reverse "c" → "c", then "bc" → "cb"
