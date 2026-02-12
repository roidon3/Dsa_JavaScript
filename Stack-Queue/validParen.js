function valid(str) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "[" || str[i] === "(" || str[i] === "{") {
            stack.push(str[i])
        }
        else {
            let top = stack.pop();
            if (!top || (top === "(" && str[i] != ")") || (top === "[" && str[i] != "]") || (top === "{" && str[i] != "}")) {
                return false
            }

        }

    }
    return stack.length === 0
}
// console.log(valid("[[]]"));
// console.log(valid("[[{)}]]"));
// console.log(valid("[[{)}]"));
// console.log(valid("[]{}[[{}]]"));


function validOptimized(str) {
    let stack = [];
    let map = {
        "(": ")",
        "[": "]",
        "{": "}",
    }
    for (let i = 0; i < str.length; i++) {
        if (map[str[i]]) {
            stack.push(str[i])

        }
        else {
            let top = stack.pop();
            if(!top||str[i] !== map[top]){
                return false
            }
        }
    }
        return stack.length === 0

}

console.log(validOptimized("[[]]"));
console.log(validOptimized("[[{)}]]"));
console.log(validOptimized("[[{)}]"));
console.log(validOptimized("[]{}[[{}]]"));