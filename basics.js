var userLoggedIn = false;
// 1. Create a promise
var promise = new Promise((resolve, reject) => {
    // What the promise is supposed to do?
    // Wait for 1s.
    setTimeout(() => {
        // promise is resolved
        //resolve();
        // Consider another case for reject callback
        if (userLoggedIn) {
            resolve();
        }
        else{
            // Reject if the user isn't logged in
            reject();
        }
    }, 1000);
});
// 2. Pass the resolved callback
//(then) will be executed when the promise is resolved, corresponds to the resolve parameter callback.
// catch responds to the reject callback
promise.then(() => {
    console.log("Successful!!");
}).catch(()=>console.error("User Not Logged in!"));
