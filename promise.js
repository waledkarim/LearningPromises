

new Promise((resolve) => {
    setTimeout(() => resolve("Done!"), 1000);
})
.then(result => console.log(result));