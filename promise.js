const promise = new Promise((resolve, reject) => {
  const value = 0;
  if (value) {
    resolve('This is Success');
  } else {
    reject('This is Failed');
  }

});

// Method 1:
promise.then(
  (success) => {
    console.info(success); // Success!
  },
  (error) => {
    console.error(error); // Error!
  },
).finally(
  (response) => {
    console.warn(response); // Response!
  }
);


// Method 2:
promise.then(
  (success) => {
    console.info(success); // Success!
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