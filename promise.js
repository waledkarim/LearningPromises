//new Promise() is pushed to the call stack which creates a new Promise object. PromiseState is pending and PromiseResult is undefined.
// (resolve) => { setTimeout(() => resolve("Done!"), 1000);} This callback function gets pushed to the call stack next
// setTimeout() gets pushed to the call stack and it registers the callback () => resolve("Done!"), 1000 to LIBUV
//then() gets pushed to the call stack which, creates the PromiseReaction record in the PromiseFullfillReactions attribute and
// registers the call back function there.

//When 1000ms is over, () => resolve("Done!") gets pushed to the task queue and since the call stack is empty, event loop pushes
//() => resolve("Done!") to the call stack which in turn pushes resolve("Done!") to the call stack.

//When resolve is called, PromiseState is set to fullfilled and PromiseResult is set to the string "Done!" as well as 
//result => console.log(result) gets pushed to the microtask. Since the call stack is empty, result => console.log(result)
// gets pushed to the call stack which prints the "Done!"



new Promise((resolve) => {
    setTimeout(() => resolve("Done!"), 1000);
})
.then(result => console.log(result))

new Promise((resolve) => {
    console.log(1);
    resolve(2);
}).then(result => console.log(result))

console.log(3);