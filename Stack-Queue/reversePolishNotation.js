function reversePolishNotation() {
    // let str = ["2","1","+","3","*"]//9
    // let str= ["4","13","5","/","+"]//6
    let str=["10","6","9","3","+","-11","*","/","*","17","+","5","+"]//22

    let stack = [];
    for (let i = 0; i < str.length; i++) {
        // if (str[i] >= '0' && str[i] <= '9') {
         if (!isNaN(str[i])) {
            stack.push(Number(str[i]));
        } else {
            let a = stack.pop()
            let b = stack.pop()
            // let ans= eval(b+str[i]+a)
            if (str[i] === "+") {
                console.log("a");
                ans = b+a

            } else if (str[i] === "-") {
                  console.log("b");
                ans = b-a

            } else if (str[i] === "*") {
                  console.log("c");
                ans = a * b

           } else if (str[i] === "/") {
                  console.log("d");
                ans = b/a

            }
             stack.push(Math.trunc(ans))
        }

    }
    return +stack[stack.length - 1];//add plus to convert it to number suppose the iput id ["8"] so it'll return string 8 we need int 8
    // return stack

}
console.log(reversePolishNotation());

function reversePolishNotation1() {
    let str = ["2","1","+","3","*"]; // 9
    let stack = [];

    for (let token of str) {
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            let a = stack.pop();
            let b = stack.pop();

            switch (token) {
                case "+": stack.push(b + a); break;
                case "-": stack.push(b - a); break;
                case "*": stack.push(b * a); break;
                case "/": stack.push(b / a); break;
            }
        }
    }

    return stack[0];
}

function reversePolishNotation2() {
    let str = ["2","1","+","3","*"];
    let stack = [];

    const ops = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b
    };

    for (let token of str) {
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(ops[token](b, a));
        }
    }

    return stack[0];
}
