




// const logUser = logInfo =>{
    // if (typeof logInfo != "string") {
    //     alert("Invalid input data type, please try again")
    // } else {
    //     console.log(`${logInfo} has logged in for the day`);
    //     return`${logInfo} has logged in for the day`;
    // }
//}


const logUser = logInfo => {return (typeof logInfo != "string") ? "Invalid Input" : `${logInfo} has logged in for the day`}


    console.log(logUser("test test test"));