![password](https://user-images.githubusercontent.com/8418700/140722813-db8b8cdb-9f97-4710-aff4-14450264bf82.png)

# PasswordMeter 

This password meter library is inspired by pointing system in [here](http://www.passwordmeter.com/), in which the main purpose is to help the end users to have more stronger passwords.

[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/password-meter.svg)](https://badge.fury.io/js/password-meter)
[![Downloads](https://img.shields.io/npm/dm/password-meter.svg)](https://www.npmjs.com/package/password-meter)

```
npm i password-meter

yarn add password-meter
```

```javascript

// default
console.log(JSON.stringify(new PasswordMeter().getResult('@xc5--WWb')));
// result
{
	"score" : 170,
	"status" : "strong",
	"percent" : 85
}


// with score range
console.log(JSON.stringify(new PasswordMeter({}, {
    "40": "E",  // 001 <= x <  040
    "80": "D",  // 040 <= x <  080
    "120": "C", // 080 <= x <  120
    "180": "B", // 120 <= x <  180
    "200": "A", // 180 <= x <  200
    "_": "A+"   //        x >= 200
}).getResult('@xc5--WWb')));
// result
{
	"score" : 170,
	"status" : "B",
	"percent" : 85
}

// with score range (The score range must have at least two members)
console.log(JSON.stringify(new PasswordMeter({}, {
    "100": "Low",  // 001 <= x <  100
    "_": "High"    //        x >= 100
}).getResult('@xc5--WWb')));
// result
{
	"score" : 170,
	"status" : "High",
	"percent" : 100
}

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
    endsWith: '$',
    includeOne: ['$']
}, {
        "40": "veryWeak",    // 001 <= x <  040
        "80": "weak",        // 040 <= x <  080
        "120": "medium",     // 080 <= x <  120
        "180": "strong",     // 120 <= x <  180
        "200": "veryStrong", // 180 <= x <  200
        "_": "perfect"       //        x >= 200
    }).getResults(['1baAe$', '0xaZ$', 'ERT', '1pwQvF@87$','12a4A6rx90$'])));
// result
[{
		"score" : 118,
		"status" : "medium",
		"percent" : 59
	}, {
		"score" : -1,
		"status" : "needs requirement(s)",
		"errors" : ["The password must start with 1.", "The Password must exclude all the items specified."],
		"percent" : 0
	}, {
		"score" : -1,
		"status" : "needs requirement(s)",
		"errors" : ["The minimum password length is 5.", "The password must start with 1.", "The password must end with $.", "You must use at least 1 lowercase letter(s).", "You must use at least 1 number(s).", "You must use at least 1 symbol(s).", "The Password must include all the items specified.", "The Password must include at least one item specified [$]."],
		"percent" : 0
	}, {
		"score" : -1,
		"status" : "needs requirement(s)",
		"errors" : ["The Password must include all the items specified."],
		"percent" : 0
	}, {
		"score" : -1,
		"status" : "needs requirement(s)",
		"errors" : ["The maximum password length is 10."],
		"percent" : 0
	}
]    
    

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
    endsWith: { value: '$', message: "Hey!, check endsWith" },
    includeOne: { value: ['$'], message: "Hey!, check includeOne" }
}, {
        "40": "veryWeak",    // 001 <= x <  040
        "80": "weak",        // 040 <= x <  080
        "120": "medium",     // 080 <= x <  120
        "180": "strong",     // 120 <= x <  180
        "200": "veryStrong", // 180 <= x <  200
        "_": "perfect"       //        x >= 200
    }).getResults(['1baAe$', '0xaZ$', 'ERT', '1pwQvF@87$','12a4A6rx90$'])));
// result
[{
		"score" : 118,
		"status" : "medium",
		"percent" : 59
	}, {
		"score" : -1,
		"status" : "needs requirement(s)",
		"errors" : ["Hey!, check startsWith", "Hey!, check exclude(s)"],
		"percent" : 0
	}, {
		"score" : -1,
		"status" : "needs requirement(s)",
		"errors" : ["Hey!, check minLength", "Hey!, check startsWith", "Hey!, check endsWith", "Hey!, check lowercaseLettersMinLength", "Hey!, check numbersMinLength", "Hey!, check symbolsMinLength", "Hey!, check include(s)", "Hey!, check includeOne"],
		"percent" : 0
	}, {
		"score" : -1,
		"status" : "needs requirement(s)",
		"errors" : ["Hey!, check include(s)"],
		"percent" : 0
	}, {
		"score" : -1,
		"status" : "needs requirement(s)",
		"errors" : ["Hey!, check maxLength"],
		"percent" : 0
	}
]    
```

<hr/>

### Release notes

##### Version 3.9.3

`System.js` module format added.

All dependencies upddated.

##### Version 3.9.2

For `unpkg`, the minified `UMD` package was set.

Fix bundle's name issue.

Now, you can use the library inside a browser as well as the Node.js.

```js
// IIFE
// https://unpkg.com/password-meter@VERSION/dist/index.iife.js
// https://unpkg.com/password-meter@3.9.3/dist/index.iife.js
// https://unpkg.com/password-meter@3.9.3/dist/index.iife.min.js

var pswm = new PasswordMeterModule.PasswordMeter();
var result = pswm.getResult("pa$$w0rd");
```

and also,

```js
// UMD
// https://unpkg.com/password-meter@VERSION/dist/index.umd.js
// https://unpkg.com/password-meter
// https://unpkg.com/password-meter@3.9.3/dist/index.umd.js
// https://unpkg.com/password-meter@3.9.3/dist/index.umd.min.js

var pswm = new PasswordMeterModule.PasswordMeter();
var result = pswm.getResult("pa$$w0rd");
```

##### Version 3.8.1

Fix a bug for `UMD` module name.

##### Version 3.8

No new feature or breaking changes just changing in project structure. (From `Gulp` to `Rollup`)

##### Version 3.7

In `getResult(password: string, ignoreCase: boolean = false, skipReq: boolean = false))` `skipReq` was added.
With this option we could provide a "score" to our users based on the current 
typed password (even if they aren't according to requirements).

```typescript
console.log(JSON.stringify(new PasswordMeter({ 
    uniqueLettersMinLength: { value: 5, message: "Hey!, check uniqMinLength" } 
  }).getResult('aZ&4aZ&4', false, true)));
// result
{"score":124,"status":"strong","percent":62,"errors":["Hey!, check uniqMinLength"]}
```

##### Version 3.6

`includeOne` added.
Now you can define custom special characters set.

```typescript
console.log(JSON.stringify(new PasswordMeter({
		includeOne: { value: ["#", "!", "*"], message: "Hey!, check includeOne" },
	}).getResult('aZ&4aZ&4')));
// result
{"score":-1,"status":"needs requirement(s)","errors":["Hey!, check includeOne"],"percent":0}
```
They are looking for including at least one character from provided set, but `aZ&4aZ&4` has none of them!


##### Version 3.5

bug fixed: `uniqueLettersMinLength` is optional now.

##### Version 3.4

`uniqueLettersMinLength` added.
Now you can define min length for unique letters.

```typescript
console.log(JSON.stringify(new PasswordMeter({
		uniqueLettersMinLength: { value: 5, message: "Hey!, check uniqMinLength" },
	}).getResult('aZ&4aZ&4')));
// result
{"score":-1,"status":"needs requirement(s)","errors":["Hey!, check uniqMinLength"],"percent":0}
```
They are looking for `5` unique characters but `aZ&4aZ&4` needs one more!

##### Version 3.3

```
Everything except letters (a-z and A-Z) and numbers (0-9) are considered symbols, 
so the symbols are not defined in advance.
```

##### Version 3.2

```
An 'ignoreCase' mode is added in .getResult('',ignoreCase: boolean = false)) 
and also for .getResults([],ignoreCase: boolean = false)) as a parameter.

Obviously, the default value is 'false', It helps you to 'exclude' and 'blackList' passwords in an easier way
if you pass the 'true' then exclude: { value: ['test'], message: "Hey!, check exclude(s)" }, 
means every kind of 'test' word for example teST, TEST, Test eESt and so on are excluded.

```

##### Version 3.1

```
- blackList property added. eg: { blackList : ['123456','p@ssw0rd'] }
```

##### Version 3.0

```
- mustBe renamed to include.
- mustNotBe renamed to exclude.
- The getResult(s) includes percent.
- You can create an object as a fully customizable score range. { "score" : "message" }
  Conditions :
    1. The score range must have at least two members.
    2. The last member of the score range must be "_".
```

##### Version 2.0

```
- getScore() renamed to getResult() 
- getScores() renamed to getResults()
```

<hr/>

<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
