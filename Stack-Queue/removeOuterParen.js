function outerParenthesis(str) {
    let stack = [];
    let ans = ""
    for (let i = 0; i < str.length; i++) {


        if (str[i] === "(") {
            stack.push(str[i])
            if (stack.length > 1) {
                ans = ans + str[i];
            }
        } else {
            if (stack.length > 1) {
                ans = ans + str[i];
            }
            stack.pop()
        }
    }
    return ans;
}
console.log(outerParenthesis("(()())(())(()()(()))"));


// function roidonsGeniusSolution(str){
//     let ans="";
//     for(let i=0;i<str.length;i++){
//         if(str[i]=="("&&str[i+1]===")"){
//             ans=ans+str[i]
//         }

//     }
//     return ans

// }
// console.log(roidonsGeniusSolution("(()())(())(()()(()))"));

function removeP(str){
    let depth=0;
    let ans=""
    for(let i=0;i<str.length;i++){
        if(str[i]=="("){
            depth++
            depth >1 ?ans=ans+str[i]:""
            
        }else{
                 depth >1 ?ans=ans+str[i]:""
            depth--
        }

    }
    return ans

}
console.log(removeP("(()())(())(()()(()))"));