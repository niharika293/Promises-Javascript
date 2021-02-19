// Generally, promises ae wrapped withi the functions foor better reusability and usage. 
// instead of log statements for output, we can pass parameters to the promises. 
var userLoggedIn = false;
function checkUserLoggedIn() {
    // 1. Create a promise
    var promise = new Promise((resolve, reject) => {
        // What the promise is supposed to do?
        // Wait for 1s.
        setTimeout(() => {
            // promise is resolved
            //resolve();
            // Consider another case for reject callback
            if (userLoggedIn) {
                resolve("Successful");
            }
            else {
                // Reject if the user isn't logged in
                reject("User Not Logged in!");
            }
        }, 1000);
    });
    return promise;
}
// 2. Pass the resolved/rejected callback
//(then) will be executed when the promise is resolved, corresponds to the resolve parameter callback.
// catch responds to the reject callback
checkUserLoggedIn().then((sucessOutput) => {
    console.log(sucessOutput);
}).catch((errorOutput) => console.error(errorOutput));
