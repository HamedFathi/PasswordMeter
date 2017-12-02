# PasswordMeter 
* It`s worth to know that this library is written in [Typescript](https://www.typescriptlang.org/)

This password meter library is inspired by pointing system in [here](http://www.passwordmeter.com/), in which the main purpose is to help the end users to have more stronger passwords.

```javascript
console.log(JSON.stringify(new PasswordMeter({
    minLength: { value: 5, message: "Hey!, check minLength" },
    maxLength: { value: 10, message: "Hey!, check maxLength" },
    uppercaseLettersMinLength: { value: 1, message: "Hey!, check uppercaseLettersMinLength" },
    lowercaseLettersMinLength: { value: 2, message: "Hey!, check lowercaseLettersMinLength" },
    numbersMinLength: { value: 1, message: "Hey!, check numbersMinLength" },
    symbolsMinLength: { value: 1, message: "Hey!, check symbolsMinLength" },
    mustBe: { value: ['a', '$'], message: "Hey!, check mustBe" },
    mustNotBe: { value: ['1baA$', '0xaZ$'], message: "Hey!, check mustNotBe" },
    startsWith: { value: '1', message: "Hey!, check startsWith" },
    endsWith: { value: '$', message: "Hey!, check endsWith" }
}, {
        veryWeak: 40,    // 1>=   , <40
        weak: 80,        // 40>=  , <80
        medium: 120,     // 80>=  , <120
        strong: 180,     // 120>= , <200
        veryStrong: 200  // 200>=
    }).getResults(['1baAe$', '0xaZ$', 'ERT', '1pwQvF@87$', '12a4A6rx90$'])));
 ```

### Breaking changes in version 2.0

```
- getScore() renamed to getResult() 
- getScores() renamed to getResults()
```
   