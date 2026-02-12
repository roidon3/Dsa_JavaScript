//longest common prefix

function longestCommonPrefix() {
  let str = ["flight", "flow", "flower"];
  if (str.length === 0) return;
  let prefix = str[0];
  for (let i = 1; i < str.length; i++) {
    while (!str[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return " ";
    }
  }
  return prefix;
}
// console.log(longestCommonPrefix());

//valid Anagram
//btute force

function isValidAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const normalize = (str) => str.toLowerCase().split("").sort().join("");

  return normalize(str1) === normalize(str2);
}

// console.log(isValidAnagram("tree", "erte"));

function isValidAnagramOptimize(str1, str2) {
  if (str1.length !== str2.length) return false;
  let store = {};
  for (let i of str1) {
    store[i] = (store[i] || 0) + 1;
  }

  for (let j of str2) {
    console.log(store[j], "l");
    // if (!store[j]) {
    //   return false;
    // }
    if (store[j] === undefined || store[j] === 0) {
      return false;
    }
    store[j]--;
  }
  return true;
}
// console.log(isValidAnagramOptimize("tree", "erte"));

function countChar() {
  let str = "swiss";
  let store = {};
  for (let i of str) {
    store[i] = (store[i] || 0) + 1;
  }
  return store;
}
// console.log(countChar());

function countChar() {
  let str = "swiss";
  let store = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (store[char]) {
      store[char] = store[char] + 1;
    } else {
      store[char] = 1;
    }
  }

  return store;
}

// console.log(countChar());

// function isIsomorphic(s, t) {
//   if (s.length !== t.length) return false;

//   let mapStoT = {};
//   let mapTtoS = {};

//   for (let i = 0; i < s.length; i++) {
//     if (mapStoT[s[i]] === undefined && mapTtoS[t[i]] === undefined) {
//       mapStoT[s[i]] = t[i];
//       mapTtoS[t[i]] = s[i];
//     } else if (mapStoT[s[i]] !== t[i] || mapTtoS[t[i]] !== s[i]) {
//       return false;
//     }
//   }
//   return true;
// }
function isophormic(s, t) {
  if (s.length !== t.length) return false;
  let mapStoT = {};
  let mapTtoS = {};

  for (let i = 0; i < s.length; i++) {
    if (!mapStoT[s[i]] && !mapTtoS[t[i]]) {
      mapStoT[s[i]] = t[i]
      mapTtoS[t[i]] = s[i]
    } else if (mapStoT[s[i]] !== t[i] || mapTtoS[t[i]] !== s[i]) {
      return false
    }
  }
  return true;
}
//here if checks whether tha char is present or not .if not it'll add in obj
// else if - it checks whether athe alreday present chanr has diff value if its diff return false

// console.log(isophormic("add", "egg"));//true
// console.log(isophormic("boo", "far"));//false
// console.log(isophormic("paper", "title"));//true



//program to find max and min occ of an obj
//obj vs map

function groupAnagram(arr) {
  let map = {}
  for (let i = 0; i < arr.length; i++) {
    let sortedArr = arr[i].split("").sort().join("");//aet
    if (!map[sortedArr]) {
      map[sortedArr] = [arr[i]]
    } else {
      map[sortedArr].push(arr[i])

    }

  }
  // return map
  // return [...Object.values(map)]
  return Object.values(map);
}
//chatgpt code 
// function groupAnagram(strs) {
//   let map = {};

//   for (let word of strs) {
//     let key = word.split("").sort().join("");

//     if (!map[key]) {
//       map[key] = [];
//     }
//     map[key].push(word);
//   }

//   return Object.values(map);
// }

//time complexity -o(n *m log m)
//space complexity -o(m * n)
// console.log(groupAnagram(["eat", "tree", "tan", "ate", "nat", "bat"]));


function groupAnagrams(words) {
  let map = {};

  for (let word of words) {
    let count = new Array(26).fill(0);

    for (let ch of word) {
      count[ch.charCodeAt(0) - 97]++;
    }

    let key = count.join("#");

    if (!map[key]) map[key] = [];
    map[key].push(word);
  }

  return Object.values(map);
}

console.log(groupAnagrams(["eat", "tree", "tan", "ate", "nat", "bat"]));