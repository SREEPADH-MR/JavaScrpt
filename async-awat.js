function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// The await keyword can only be used inside an async function.
// The await keyword makes the function pause the execution and wait for a resolved promise before it continues:

async function test() {
    console.log(1)
    await sleep(3000);
    return 2;
}

const testResponse = test();

testResponse.then(
    (success) => {
        console.info(success); // Success!
        // output: 2
    }
).catch(
    (error) => {
        console.error(error); // Error!
    }
).finally(
    (response) => {
        console.warn(response); // Response!
    }
);
