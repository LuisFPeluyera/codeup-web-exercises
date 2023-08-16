




// const logUser = logInfo =>{
    // if (typeof logInfo != "string") {
    //     alert("Invalid input data type, please try again")
    // } else {
    //     console.log(`${logInfo} has logged in for the day`);
    //     return`${logInfo} has logged in for the day`;
    // }
//}

// const logUser = logInfo => {return (typeof logInfo != "string") ? "Invalid Input" : `${logInfo} has logged in for the day`}


//console.log(logUser("test test test"));



//   Create an object literal with the following properties: a string property called “username” and a string property called “email” with string values representing the property name to them.
//     Assign your object literal into a variable called “userObject”. Console.log the objects properties to verify your values are assigned into the object properly.
// console.log(userObject.username) // “ken2cool”
// console.log(userObject.email) // “ken2cool@yahoo.com”
//     Bonus:
//         I. Refactor your logUser function to use your userObject’s property of username vs. an hardcoded string literal argument - update the string return from logUser to also include the userObject.email property e.g.: “ken2cool with email ken2cool@yahoo.com has logged in for the day.”
//         Ii. Refactor your userObject to have a userRoles property that is an array of strings listing the user’s roles - e.g “admin”, “moderator”, “buyer”, “seller” and other hypothetical roles a user could have on a website
//         Iii. Refactor your user object to have a nested userProfile object property - this nested property should have a userProfileUrl property with a string value mocking a link to an image. The other property should be a userLocation property with a string value mocking a CityName, StateName location the user could be from. Finally, add a property called numLikes with a number value indicating the users received ‘likes’ in our hypothetical application.



let userObject = {
    userName: "Odin",
    email: "Odin@gmail.com",
    userRoles: ["admin","moderator","user"],
    userProfile: {
        userProfileUrl:"link here",
        userLocation: "San Antonio",
        numLikes: 5
    }
}

//console.log(userObject.email);

const logUser = logInfo => {return (typeof logInfo.userName !== "string" || logInfo.email !== "string") ? "Invalid Input" : `${logInfo.userName} with email ${logInfo.email} has logged in for the day`};

console.log(logUser(userObject));