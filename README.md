# PasswordMeter 
* It`s worth to know that this library is written in [Typescript](https://www.typescriptlang.org/)

This password meter library is inspired by pointing system in [here](http://www.passwordmeter.com/), in which the main purpose is to help the end users to have more stronger passwords.

```javascript

// default
console.log(JSON.stringify(new PasswordMeter().getResult('@xc5--WWb')));

// with score range
console.log(JSON.stringify(new PasswordMeter({}, {
    "40": "E",  // 001 <= x <  040
    "80": "D",  // 040 <= x <  080
    "120": "C", // 080 <= x <  120
    "180": "B", // 120 <= x <  180
    "200": "A", // 180 <= x <  200
    "_": "A+"   //        x >= 200
}).getResult('@xc5--WWb')));

// with score range (The score range must have at least two members)
console.log(JSON.stringify(new PasswordMeter({}, {
    "100": "Low",  // 001 <= x <  100
    "_": "High"    //         x >= 100
}).getResult('@xc5--WWb')));

// with requirements and score range
console.log(JSON.stringify(new PasswordMeter({
    minLength: 5,
    maxLength: 10,
    uppercaseLettersMinLength: 1,
    lowercaseLettersMinLength: 2,
    numbersMinLength: 1,
    symbolsMinLength: 1,
    include: ['a', '$'],
    exclude: ['1baA$', '0xaZ$'],
    startsWith: '1',
    endsWith: '$'
}, {
        "40": "verWeak",     // 001 <= x <  040
        "80": "weak",        // 040 <= x <  080
        "120": "medium",     // 080 <= x <  120
        "180": "strong",     // 120 <= x <  180
        "200": "veryStrong", // 180 <= x <  200
        "_": "perfect"       //        x >= 200
    }).getResults(['1baAe$', '0xaZ$', 'ERT', '1pwQvF@87$', '12a4A6rx90$'])));

// with requirements and score range and custom messages
console.log(JSON.stringify(new PasswordMeter({
    minLength: { value: 5, message: "Hey!, check minLength" },
    maxLength: { value: 10, message: "Hey!, check maxLength" },
    uppercaseLettersMinLength: { value: 1, message: "Hey!, check uppercaseLettersMinLength" },
    lowercaseLettersMinLength: { value: 2, message: "Hey!, check lowercaseLettersMinLength" },
    numbersMinLength: { value: 1, message: "Hey!, check numbersMinLength" },
    symbolsMinLength: { value: 1, message: "Hey!, check symbolsMinLength" },
    include: { value: ['a', '$'], message: "Hey!, check include(s)" },
    exclude: { value: ['1baA$', '0xaZ$'], message: "Hey!, check exclude(s)" },
    startsWith: { value: '1', message: "Hey!, check startsWith" },
    endsWith: { value: '$', message: "Hey!, check endsWith" }
}, {
        "40": "verWeak",     // 001 <= x <  040
        "80": "weak",        // 040 <= x <  080
        "120": "medium",     // 080 <= x <  120
        "180": "strong",     // 120 <= x <  180
        "200": "veryStrong", // 180 <= x <  200
        "_": "perfect"       //        x >= 200
    }).getResults(['1baAe$', '0xaZ$', 'ERT', '1pwQvF@87$', '12a4A6rx90$'])));
```

### Breaking changes in version 2.0

```
- getScore() renamed to getResult() 
- getScores() renamed to getResults()
```

### Breaking changes in version 3.0

```
- mustBe renamed to include.
- mustNotBe renamed to exclude.
- The getResult(s) includes percent.
- You can create an object as a fully customizable score range. { "score" : "message" }
  Conditions :
    1. The score range must have at least two members.
    2. The last member of the score range must be "_".
```