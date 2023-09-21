const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

 let userLanguages = users.filter(user=> user.languages.length >= 3);

console.log(userLanguages);

//Use .map to create an array of strings where each element is a user's email address

let userEmails = users.map((x)=>{ return x.email});

console.log(userEmails);

//Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let mappedTotalUserYears = users.map((x)=>{return x.yearsOfExperience});
console.log(mappedTotalUserYears);

let totalUserYears = mappedTotalUserYears.reduce((total, years )=>{
    return  total + years;
});
console.log(totalUserYears);


//Use .reduce to get the longest email from the list of users.

let longestEmail = "";


    longestEmail = users.reduce((accumulator, currentNumber)=>{

    (currentNumber.email.length > accumulator.length) ? accumulator = currentNumber.email : ""

    return accumulator;

}, " ")

console.log(longestEmail);

//Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let usersNameString = users.reduce((accumulator, currentNumber)=>{
        return accumulator + " " + currentNumber.name;
}, "")

console.log(usersNameString);


//Use .reduce to get the unique list of languages from the list of users.

// let listOfLanguages = users.reduce((accumulator, currentLanguage)=>{
//
//     return accumulator.includes(currentLanguage.languages) ? accumulator : [...accumulator,currentLanguage.languages]
//
//
// }, [])


//Use .reduce to get the unique list of languages from the list of users.

let listOfLanguages = users.reduce((accumulator, currentLanguage)=>{


    for (let i = 0; i < currentLanguage.languages.length; i++) {

    if (!accumulator.includes(currentLanguage.languages[i])) {
        console.log(accumulator);
         accumulator.push(currentLanguage.languages[i]);

     }

}

     return accumulator;

}, [])

console.log(listOfLanguages);
