/* ==========================================================================  **
## HW Instructions

See this Google doc for clarifications:

https://docs.google.com/document/d/1Azh7c_sMtjHApLnQ-AamZ_LRs0Gqlc_nSCPp4zSbFJM/edit?usp=sharing

** ==========================================================================  **


1. Push your solution, contained entirely in hw1.ts, back to the github classroom
   repository. Please make sure you solution compiles!!! 

   To run the typescript compiler (`tsc`), make sure you have it installed
   ```
   tsc -v
   >> Version 4.4.3
   ```
   Then run the compiler
   ```
   tsc --strict --target es2019 --module commonjs hw1.ts
   ```
   to produce a file `hw1.js`. If we cannot compile your solution with `tsc`, we
   will not grade your submission. Even if you are looking for partial credit,
   your entire hw1.ts must compile, and we must be able to run the compiled js file
   in `node`.
2. **Do not** change any of the function interfaces.
3. **Do not** use any external libraries.
4. Replace `throw Error("TODO")` with your code. If you do not attempt a problem,
   please leave the `throw Error("TODO")` code there unmodified.
5. Always remember to check the function input types and the output types.
6. You can create any other additional helper functions that you would like.
7. You can leave testing code in provided that your code compiles and does not
   depend on external libraries. Remember it is up to you to test your own code.
8. You can use your solutions to questions in this assignment to answer other question
   in this assignment.

** ============================================================================ */


/* ==========================================================================  **
## Honor Pledge
** ============================================================================ */

export const HONOR_PLEDGE = "I pledge on my honor that this assignment is my own work.";
export const SIGNATURE = "Darren Wong"; // TODO: FILL ME IN

// If you used any resources, please list them here
export const RESOURCES_CONSULTED = [
    "www.google.com", // TODO: FILL ME IN
    "https://stackoverflow.com/questions/43963518/to-copy-the-values-from-one-dictionary-to-other-dictionary-in-javascript"
];


/* ==========================================================================  **
## 1. Fun with TypeScript Arrays (40 pts)

This problem is a warmup to get you familiar with TypeScript syntax.
Throughout these problems, please just use basic TypeScript features:
for loops, conditionals, basic arithmetic expressions, basic string operations.

Hint: The `for` `of` construct below can be used to traverse an array.

const arr = [1, 2, 3];
for (const x of arr) {
    console.log(x);
}
>> 1
>> 2
>> 3
** ============================================================================ */


/* ----------------------------------------------------- **
### 1a. Complete the function definition below. (8 pts)

`multArray` takes an array of numbers and produces the product of all the numbers in the array.

Example:
  multArray([]) = 1

Example:
  multArray([1, 2, 3]) = 6

Example:
  multArray([-1, -2, 3, 10]) = 60
** ----------------------------------------------------- */

export function multArray(arr: number[]): number {
    let product = 1;
    if(arr.length > 0){
      for(let i = 0; i < arr.length; i++){
        product = product * arr[i];
      }
      return product;
    }
    else{ //if array length = 0
      return 1;
    }
}

//Q1a Testing Code
// console.log("Q1a. " + multArray([]));
// console.log("Q1a. " + multArray([1, 2, 3]));
// console.log("Q1a. " + multArray([-1, -2, 3, 10]));

/* ----------------------------------------------------- **
### 1b. Complete the function definition below. (8 pts)

`maxArray` takes an array of numbers and returns the largest number in the array.

Example:
  maxArray([]) = Number.POSITIVE_INFINITY

Example:
  maxArray([1, 2, 3]) = 3

Example:
  maxArray([-1, -2, 3, 10]) = 10
** ----------------------------------------------------- */

export function maxArray(arr: number[]): number {
    
    if(arr.length > 0){
      let max = arr[0];
      for(let i = 0; i < arr.length; i++){
        if(max < arr[i]){
          max = arr[i];
        }
      }
      return max;
    }
    else{
      return Number.POSITIVE_INFINITY;
    }
}

//Q1b Testing Code
// console.log("Q1b. "+ maxArray([]));
// console.log("Q1b. "+ maxArray([1, 2, 3]));
// console.log("Q1b. "+ maxArray([-1, -2, 3, 10]));

/* ----------------------------------------------------- **
### 1c. Complete the function definition below. (8 pts)

`longestWord` takes an array of strings and returns the longest
word found. If there are multiple words of the same length, return
the last one found.

Example:
  longestWord([]) = ""

Example:
  longestWord(["hello", "world"]) = "world"

Example:
  longestWord(["csc600", "is", "fun"]) = "csc600"

** ----------------------------------------------------- */

export function longestWord(arr: string[]): string {
    let longestWord = "";
    for(let i = 0; i < arr.length; i++){
      if(longestWord.length <= arr[i].length){
        longestWord = arr[i];
      }
    }
    return longestWord;
}

//Q1c Testing Code
// console.log("Q1c. " + longestWord([]));
// console.log("Q1c. " + longestWord(["hello", "world"]));
// console.log("Q1c. " + longestWord(["csc600", "is", "fun"]));

/* ----------------------------------------------------- **
### 1d. Complete the function definition below. (8 pts)

`shortestWord` takes an array of strings and returns the shortest
word found. If there are multiple words of the same length, return
the first one found.

Example:
  shortestWord([]) = ""

Example:
  shortestWord(["hello", "world"]) = "hello"

Example:
  shortestWord(["csc600", "is", "fun"]) = "is"
** ----------------------------------------------------- */

export function shortestWord(arr: string[]): string {
    if(arr.length <= 0){
      let shortestWord = "";
      return shortestWord;
    }
    else{
      let shortestWord = arr[0];
      for(let i = 0; i < arr.length; i++){
        if(shortestWord.length > arr[i].length){
          shortestWord = arr[i];
        }
      }
      return shortestWord;
    }
}

//Q1d Testing Code
// console.log("Q1d. " + shortestWord([]));
// console.log("Q1d. " + shortestWord(["hello", "world"]));
// console.log("Q1d. " + shortestWord(["csc600", "is", "fun"]));

/* ----------------------------------------------------- **
### 1e. Complete the function definition below. (8 pts)

`shortestAndLongestWord` takes an array of strings and returns both
the shortest and longest words found.
1. If there are multiple shortest words of the same length, return
   the first one found.
2. If there are multiple longest words of the same length, return
   the last one found.
Thus `shortestAndLongestWord` returns a tuple of 2 strings.

Example:
  shortestAndLongestWord([]) = ["", ""]

Example:
  shortestAndLongestWord(["hello", "world"]) = ["hello", "world"]

Example:
  shortestAndLongestWord(["csc600", "is", "fun"]) = ["is", "csc600"]
** ----------------------------------------------------- */

export function shortestAndLongestWord(arr: string[]): [string, string] {
    if(arr.length <= 0){
      let emptyPair: [string, string] = ["", ""];
      return emptyPair;
    }
    else{
      let shortest_word = shortestWord(arr);
      let longest_word = longestWord(arr);

      let shortLongPair: [string, string] = [shortest_word, longest_word];
      return shortLongPair;
    }
}

//Q1e Testing Code
// console.log("Q1e. " + shortestAndLongestWord([]));
// console.log("Q1e. " + shortestAndLongestWord(["hello", "world"]));
// console.log("Q1e. " + shortestAndLongestWord(["csc600", "is", "fun"]));

/* ==========================================================================  **
## 2. Pure Functions (30 pts)


This problem is a warmup to get you familiar with the concept of a **pure** function.
As a reminder, a pure function is a function that always produces the same outputs
given the same inputs. Also pure functions do not modify their arguments. Pure functions
are very valuable in distributed and collaborative settings because different consumers of
pure functions can trust that their own data will not be clobbered by calling a pure function.

Throughout these problems, please just use basic TypeScript features:
for loops, conditionals, basic arithmetic expressions, basic string operations.

** ============================================================================ */

/* ----------------------------------------------------- **
### 2a. Complete the function definition below. (10 pts)

`impureNegate` takes an array of numbers and replaces each element in the array
with its negation. Thus `impureNegate` is not a pure function. This style of
coding might be what you are familiar with from an imperative programming (e.g., 
C/Java) background. Note that `impureNegate` returns nothing, i.e., has 
return type of `void`.

Example:
  const arr = [1, 2, 3];
  impureNegate(arr);
  console.log(arr);
  >> [-1, -2, -3]

  impureNegate(arr);
  console.log(arr);
  >> [1, 2, 3]

  impureNegate(arr);
  console.log(arr);
  >> [-1, -2, -3]

  const arr2 = [1, 2, 3];
  impureNegate(arr2);
  console.log(arr2);
  >> [-1, -2, -3]
** ----------------------------------------------------- */

export function impureNegate(arr: number[]): void {
    for(let i = 0; i < arr.length; i++){
      arr[i] = arr[i] * (-1);
    }
}

//Q2a Testing Code
// console.log("Q2a.");
// const arr = [1, 2, 3];
// impureNegate(arr);
// console.log(arr);

// impureNegate(arr);
// console.log(arr);

// impureNegate(arr);
// console.log(arr);

// const arr2 = [1, 2, 3];
// impureNegate(arr2);
// console.log(arr2);

/* ----------------------------------------------------- **
### 2b. Complete the function definition below. (10 pts)

`copyNumArray` takes an array of numbers and returns a duplicate.
`copyNumArray` is an example of a *pure* function. In particular,
creating a copy of an input data structure is a good heuristic for
making a function pure. However, creating a copy of a data structure
is not necessary to make a function pure.

Example:
  const arr1 = [1, 2, 3];
  const arr2 = copyNumArray(arr1);
  impureNegate(arr1);
  console.log(arr1);
  >> [-1, -2, -3]

  console.log(arr2);
  >> [1, 2, 3]

Example:
  const arr = [1, 2, 3, 4];
  console.log(impureNegate(copyNumArray(arr)));
  >> undefined

  const arr2 = copyNumArray(arr);
  impureNegate(arr2);
  console.log(arr2);
  >> [-1, -2, -3, -4]
  console.log(arr);
  >> [1, 2, 3, 4]
** ----------------------------------------------------- */

export function copyNumArray(arr: number[]): number[] {
    let copyArray: number[] = [];
    for(let i = 0; i < arr.length; i++){
      copyArray.push(arr[i]);
    }
    return copyArray;
}

//Q2b Testing Code
// console.log("Q2b.");
// const arr3 = [1, 2, 3];
// const arr4 = copyNumArray(arr3);
// impureNegate(arr3);
// console.log(arr3);

// console.log(arr4);
// --------------------------------------------
// const arr5 = [1, 2, 3, 4];
// console.log(impureNegate(copyNumArray(arr5)));

// const arr6 = copyNumArray(arr5);
// impureNegate(arr6);
// console.log(arr6);

// console.log(arr5);

/* ----------------------------------------------------- **
### 2c. Complete the function definition below. (10 pts)

`pureNegate` is a *pure* function that increments each element of an array
without modifying the array passed in. Now would be a good time to compare
and contrast `pureNegate` and `imppureNegate` to see how different the
reasoning with a pure and impure function is.

Example:
  const arr = [1, 2, 3];
  console.log(pureNegate(arr));
  >> [-1, -2, -3]
  console.log(arr);
  >> [1, 2, 3]
  console.log(pureNegate(arr));
  >> [-1, -2, -3]
  console.log(arr);
  >> [1, 2, 3]
** ----------------------------------------------------- */

export function pureNegate(arr: number[]): number[] {
    let copyArray: number[] = [];
    for(let i = 0; i < arr.length; i++){
      copyArray.push(arr[i] * (-1));
    }
    return copyArray;
}

//Q2c Testing Code
// console.log("Q2c.");
// const arr7 = [1, 2, 3];
// console.log(pureNegate(arr7));
// console.log(arr7);
// console.log(pureNegate(arr7));
// console.log(arr7);

/* ==========================================================================  **
## 3. Other TypeScript Features (30 pts)

This problem is a warmup to get you familiar with other TypeScript features,
including generics, dictionary types, and record types. You should have encountered
these language features in other languages (e.g., C/Java). We'll also get more practice
with writing pure functions.

** ============================================================================ */


/* ----------------------------------------------------- **
### 3a. Complete the function definition below. (10 pts)

`copyArray` is a *generic* and *pure* function that returns a copy of an array.

Example:
  const arr = ["csc600", "is", "fun"];
  const arr2 = copyArray(arr);
  arr[0] = "life";
  console.log(arr2);
  >> ["csc600", "is", "fun"]

Example:
  const arr = [1, 2, 3, 4];
  const arr2 = copyArray(arr);
  arr[0] = -1;
  console.log(arr2);
  >> [1, 2, 3, 4]
** ----------------------------------------------------- */

export function copyArray<T>(arr: T[]): T[] {
  let copyArray: T[] = [];
  for(let i = 0; i < arr.length; i++){
    copyArray.push(arr[i]);
  }
  return copyArray;
}

//Q3a Testing Code
// console.log("Q3a.")
// const arr8 = ["csc600", "is", "fun"];
// const arr9 = copyArray(arr8);
// arr8[0] = "life";
// console.log(arr9);

// -----------------
// const arr10 = [1, 2, 3, 4];
// const arr11 = copyArray(arr10);
// arr10[0] = -1;
// console.log(arr11);

/* ----------------------------------------------------- **
### 3b. Complete the function definition below. (10 pts)

`copyDictionary` is a *pure* function that returns a copy of a dictionary.

Example:
  const dict = {
      "hello": 1,
      "world": 2
  };
  const dict2 = copyDictionary(dict);
  dict["hello"] = -1;
  console.log(dict2);
  >> {"hello": 1, "world": 2}


Hint: you may want to use the code below to traverse a dictionary

for (const [key, val] of Object.entries(dict)) {
    console.log(key, val);
}
>> "hello" 1
>> "world" 2
** ----------------------------------------------------- */

export function copyDictionary(dict: {[key: string]: number}): {[key: string]: number} {
    let copyDict: {[key: string]: number} = {};
    for (const key in dict) {
      //console.log(key, value);]
      copyDict[key] = dict[key];
    }
    return copyDict;
}

//Q3b Testing Code
// console.log("Q3b.");
// const dict = {
//   "hello": 1,
//   "world": 2
// };
// const dict2 = copyDictionary(dict);
// dict["hello"] = -1;
// console.log(dict2);

/* ----------------------------------------------------- **
### 3c. Complete the function definition below. (10 pts)

`copyTsRecord` returns a copy of a user-defined data structure.
It is a *pure* and *generic* function.
Make sure to also copy the dictionary! Hint: can you use a function that you previously defined?

Example:
  const rec = {
    myStr: "hello",
    myNum: 42,
    myDict: {
        "csc600": -1,
        "is": -2,
        "fun": 3
    }
  };
  const rec2 = copyTsRecord(rec);
  rec.myStr = "foobar";
  console.log(rec2);
  >> {myStr: "hello", myNum: 42, myDict: {"csc600": -1, "is": -2, "fun": 3}}
** ----------------------------------------------------- */

type tsRecord = {
    myStr: string,
    myNum: number,
    myDict: {[key: string]: number}
}

export function copyTsRecord(tsRec: tsRecord): tsRecord {
  const copyTs = {
    myStr: tsRec.myStr,
    myNum: tsRec.myNum,
    myDict: copyDictionary(tsRec.myDict)
  };

  return copyTs;
}

//Q3c Testing Code
// console.log("Q3c.");

// const rec = {
//   myStr: "hello",
//   myNum: 42,
//   myDict: {
//       "csc600": -1,
//       "is": -2,
//       "fun": 3
//   }
// };
// const rec2 = copyTsRecord(rec);
// rec.myStr = "foobar";
// console.log(rec2);


/* ==========================================================================  **
## Bonus. (10 pts)

This is a bonus that introduces a generic dictionary and record.
It behaves just like tsRecord, except that the dictionary can contain values of
any type T. Write the `copyGenericTsRecord` function. Make sure to also copy the
dictionary!
** ============================================================================ */

type genericTsRecord<T> = {
    myStr: string,
    myNum: number,
    myDict: {[key: string]: T}
}
//Helper function to copy dictionary
export function copyDictionaryGeneric<T>(dict: {[key: string]: T}): {[key: string]: T} {
  let copyDict: {[key: string]: T} = {};
  for (const key in dict) {
    //console.log(key, value);]
    copyDict[key] = dict[key];
  }
  return copyDict;
}
export function copyGenericTsRecord<T>(tsRec: genericTsRecord<T>): genericTsRecord<T> {
  const copyTs = {
    myStr: tsRec.myStr,
    myNum: tsRec.myNum,
    myDict: copyDictionaryGeneric(tsRec.myDict)
  };

  return copyTs;
}
