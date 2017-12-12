"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PasswordMeter = (function () {
    function PasswordMeter(requirements, scoreRange) {
        this.requirements = requirements;
        this.scoreRange = scoreRange;
        this.uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
        this.numbers = "1234567890";
        this.symbols = "~`!@#$%^&*()_+-={}[]:\"|;'\\<>?/";
    }
    PasswordMeter.prototype.startsWith = function (str, word) {
        return str.lastIndexOf(word, 0) === 0;
    };
    PasswordMeter.prototype.endsWith = function (str, word) {
        return str.indexOf(word, str.length - word.length) !== -1;
    };
    PasswordMeter.prototype.chunkString = function (str, len) {
        var _size = Math.ceil(str.length / len), _ret = new Array(_size), _offset;
        for (var _i = 0; _i < _size; _i++) {
            _offset = _i * len;
            _ret[_i] = str.substring(_offset, _offset + len);
        }
        return _ret;
    };
    PasswordMeter.prototype.getLength = function (text) {
        if (text) {
            return text.length;
        }
        return 0;
    };
    PasswordMeter.prototype.doesNotContains = function (text, list) {
        if (text) {
            if (list) {
                var doesnotContainsAll = list.every(function (x) { return text.indexOf(x) == -1; });
                return doesnotContainsAll;
            }
            else {
                return true;
            }
        }
        else {
            return true;
        }
    };
    PasswordMeter.prototype.contains = function (text, list) {
        if (text) {
            if (list) {
                var containsAll = list.every(function (x) { return text.indexOf(x) >= 0; });
                return containsAll;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    PasswordMeter.prototype.between = function (x, min, max) {
        return x >= min && x < max;
    };
    PasswordMeter.prototype.isIMessage = function (arg) {
        var status = arg.message !== undefined;
        return status;
    };
    PasswordMeter.prototype.isNumber = function (text) {
        if (text) {
            var pattern = /^\d+$/;
            return pattern.test(text);
        }
        return false;
    };
    PasswordMeter.prototype.isLetter = function (text) {
        if (text) {
            var pattern = /^[a-zA-Z]+$/;
            return pattern.test(text);
        }
        return false;
    };
    PasswordMeter.prototype.isUppercaseLetter = function (text) {
        if (text) {
            var pattern = /^[A-Z]+$/;
            return pattern.test(text);
        }
        return false;
    };
    PasswordMeter.prototype.isLowercaseLetter = function (text) {
        if (text) {
            var pattern = /^[a-z]+$/;
            return pattern.test(text);
        }
        return false;
    };
    PasswordMeter.prototype.isSymbol = function (text) {
        if (text) {
            return !this.isNumber(text) && !this.isLetter(text);
        }
        return false;
    };
    PasswordMeter.prototype.getLengthScore = function (text) {
        if (text) {
            var ratio = 9;
            return this.getLength(text) * ratio;
        }
        return 0;
    };
    PasswordMeter.prototype.getUppercaseLettersScore = function (text) {
        var _this = this;
        if (text) {
            var ratio = 2;
            var n_1 = 0;
            text.split('').forEach(function (value, index) {
                if (_this.isUppercaseLetter(value)) {
                    n_1++;
                }
            });
            if (n_1 == 0) {
                return 0;
            }
            return (this.getLength(text) - n_1) * ratio;
        }
        return 0;
    };
    PasswordMeter.prototype.getLowercaseLettersScore = function (text) {
        var _this = this;
        if (text) {
            var ratio = 2;
            var n_2 = 0;
            text.split('').forEach(function (value, index) {
                if (_this.isLowercaseLetter(value)) {
                    n_2++;
                }
            });
            if (n_2 == 0) {
                return 0;
            }
            return (this.getLength(text) - n_2) * ratio;
        }
        return 0;
    };
    PasswordMeter.prototype.getNumbersScore = function (text) {
        var _this = this;
        if (text) {
            var ratio = 4;
            var n_3 = 0;
            text.split('').forEach(function (value, index) {
                if (_this.isNumber(value)) {
                    n_3++;
                }
            });
            if (n_3 == 0) {
                return 0;
            }
            return (this.getLength(text) - n_3) * ratio;
        }
        return 0;
    };
    PasswordMeter.prototype.getSymbolsScore = function (text) {
        var _this = this;
        if (text) {
            var ratio = 6;
            var n_4 = 0;
            text.split('').forEach(function (value, index) {
                if (_this.isSymbol(value)) {
                    n_4++;
                }
            });
            if (n_4 == 0) {
                return 0;
            }
            return (this.getLength(text) - n_4) * ratio;
        }
        return 0;
    };
    PasswordMeter.prototype.getLettersOnlyScore = function (text) {
        if (text) {
            var ratio = -1;
            if (this.isLetter(text)) {
                return this.getLength(text) * ratio;
            }
        }
        return 0;
    };
    PasswordMeter.prototype.getNumbersOnlyScore = function (text) {
        if (text) {
            var ratio = -1;
            if (this.isNumber(text)) {
                return this.getLength(text) * ratio;
            }
        }
        return 0;
    };
    PasswordMeter.prototype.getConsecutiveUppercaseLettersScore = function (text) {
        var _this = this;
        if (text) {
            var pattern = /[A-Z]+/g;
            var results = text.match(pattern);
            if (!results) {
                return 0;
            }
            var score_1 = 0;
            var ratio_1 = -2;
            results.forEach(function (value, index) {
                if (_this.getLength(value) > 1) {
                    score_1 += (_this.getLength(value) - 1)
                        * ratio_1;
                }
            });
            return score_1;
        }
        return 0;
    };
    PasswordMeter.prototype.getConsecutiveLowercaseLettersScore = function (text) {
        var _this = this;
        if (text) {
            var pattern = /[a-z]+/g;
            var results = text.match(pattern);
            if (!results) {
                return 0;
            }
            var score_2 = 0;
            var ratio_2 = -2;
            results.forEach(function (value, index) {
                if (_this.getLength(value) > 1) {
                    score_2 += (_this.getLength(value) - 1)
                        * ratio_2;
                }
            });
            return score_2;
        }
        return 0;
    };
    PasswordMeter.prototype.getConsecutiveNumbersScore = function (text) {
        var _this = this;
        if (text) {
            var pattern = /[0-9]+/g;
            var results = text.match(pattern);
            if (!results) {
                return 0;
            }
            var score_3 = 0;
            var ratio_3 = -2;
            results.forEach(function (value, index) {
                if (_this.getLength(value) > 1) {
                    score_3 += (_this.getLength(value) - 1)
                        * ratio_3;
                }
            });
            return score_3;
        }
        return 0;
    };
    PasswordMeter.prototype.reverseString = function (str) {
        return str.split("").reverse().join("");
    };
    PasswordMeter.prototype.sequentialBuilder = function (text, minChunk) {
        if (text) {
            var list = [];
            var len = text.split('').length - minChunk;
            for (var i = 0; i < len; i++) {
                for (var index = 0; index < len; index++) {
                    var newText = text.substring(index, text.length);
                    var arr = this.chunkString(newText, i + minChunk);
                    for (var j = 0; j < arr.length; j++) {
                        list.push(arr[j]);
                        list.push(this.reverseString(arr[j]));
                    }
                }
            }
            var result = this.distinctArray(this.sortByLength(list, minChunk));
            return result;
        }
        return [];
    };
    PasswordMeter.prototype.distinctArray = function (arr) {
        var a = [];
        for (var i = 0, l = arr.length; i < l; i++)
            if (a.indexOf(arr[i]) === -1 && arr[i] !== '')
                a.push(arr[i]);
        return a;
    };
    PasswordMeter.prototype.sortByLength = function (arr, limit) {
        arr.sort(function (a, b) {
            return b.length - a.length;
        });
        var list = [];
        for (var index = 0; index < arr.length; index++) {
            if (limit) {
                if (arr[index].length >= limit) {
                    list.push(arr[index]);
                }
            }
            else {
                list.push(arr[index]);
            }
        }
        return list;
    };
    PasswordMeter.prototype.getSequentialLettersScore = function (text) {
        var minChunk = 3;
        if (text) {
            var uStr = this.sequentialBuilder(this.uppercaseLetters, minChunk);
            var lStr = this.sequentialBuilder(this.lowercaseLetters, minChunk);
            var score_4 = 0;
            var uTxt_1 = text;
            var lTxt_1 = text;
            uStr.forEach(function (value) {
                if (uTxt_1.indexOf(value) != -1) {
                    score_4 += value.length - (minChunk - 1);
                    uTxt_1 = uTxt_1.replace(value, "");
                }
            });
            lStr.forEach(function (value) {
                if (lTxt_1.indexOf(value) != -1) {
                    score_4 += value.length - (minChunk - 1);
                    lTxt_1 = lTxt_1.replace(value, "");
                }
            });
            var ratio = -3;
            return score_4 * ratio;
        }
        return 0;
    };
    PasswordMeter.prototype.getSequentialNumbersScore = function (text) {
        var minChunk = 3;
        if (text) {
            var num = this.sequentialBuilder(this.numbers, minChunk);
            var score_5 = 0;
            var txt_1 = text;
            num.forEach(function (value) {
                if (txt_1.indexOf(value) != -1) {
                    score_5 += value.length - (minChunk - 1);
                    txt_1 = txt_1.replace(value, "");
                }
            });
            var ratio = -3;
            return score_5 * ratio;
        }
        return 0;
    };
    PasswordMeter.prototype.getSequentialSymbolsScore = function (text) {
        var minChunk = 3;
        if (text) {
            var num = this.sequentialBuilder(this.symbols, minChunk);
            var score_6 = 0;
            var txt_2 = text;
            num.forEach(function (value) {
                if (txt_2.indexOf(value) != -1) {
                    score_6 += value.length - (minChunk - 1);
                    txt_2 = txt_2.replace(value, "");
                }
            });
            var ratio = -3;
            return score_6 * ratio;
        }
        return 0;
    };
    PasswordMeter.prototype.getRepeatCharactersScore = function (text) {
        var pattern = /(.+)(?=.*?\1)/g;
        if (text) {
            var matches = text.match(pattern);
            if (!matches) {
                return 0;
            }
            var maxResultLength = this.sortByLength(matches)[0].length;
            var ratio = 0;
            if (maxResultLength >= 1 && maxResultLength <= 5)
                ratio = -8;
            if (maxResultLength >= 6 && maxResultLength <= 10)
                ratio = -5;
            if (maxResultLength >= 11)
                ratio = -2;
            var score = (ratio * maxResultLength) + (text.length - (maxResultLength * 2));
            return score;
        }
        return 0;
    };
    PasswordMeter.prototype.getRequirementsScore = function (text) {
        var req = this.requirements;
        var errors = [];
        if (req) {
            var minLengthMsg = "The minimum password length is " + req.minLength + ".";
            var maxLengthMsg = "The maximum password length is " + req.maxLength + ".";
            ;
            var uppercaseLettersMinLengthMsg = "You must use at least " + req.uppercaseLettersMinLength + " uppercase letter(s).";
            var lowercaseLettersMinLengthMsg = "You must use at least " + req.uppercaseLettersMinLength + " lowercase letter(s).";
            var numbersMinLengthMsg = "You must use at least " + req.uppercaseLettersMinLength + " number(s).";
            var symbolsMinLengthMsg = "You must use at least " + req.uppercaseLettersMinLength + " symbol(s).";
            var includeMsg = "The Password must include all the items specified.";
            var excludeMsg = "The Password must exclude all the items specified.";
            var startsWithMsg = "The password must start with " + req.startsWith + ".";
            var endsWithMsg = "The password must end with " + req.endsWith + ".";
            var upperCount = (text.match(/[A-Z]/g) || []).length;
            var lowerCount = (text.match(/[a-z]/g) || []).length;
            var numbersCount = (text.match(/[0-9]/g) || []).length;
            var symbolsCount = text.length - (upperCount + lowerCount + numbersCount);
            if (req.minLength) {
                var val = void 0;
                var msg = minLengthMsg;
                if (this.isIMessage(req.minLength)) {
                    val = req.minLength.value;
                    msg = req.minLength.message;
                }
                else {
                    val = req.minLength;
                }
                if (req.minLength && text.length < val) {
                    errors.push(msg);
                }
            }
            if (req.maxLength) {
                var val = void 0;
                var msg = maxLengthMsg;
                if (this.isIMessage(req.maxLength)) {
                    val = req.maxLength.value;
                    msg = req.maxLength.message;
                }
                else {
                    val = req.maxLength;
                }
                if (req.maxLength && text.length > val) {
                    errors.push(msg);
                }
            }
            if (req.startsWith) {
                var val = void 0;
                var msg = startsWithMsg;
                if (this.isIMessage(req.startsWith)) {
                    val = req.startsWith.value;
                    msg = req.startsWith.message;
                }
                else {
                    val = req.startsWith;
                }
                if (!this.startsWith(text, val)) {
                    errors.push(msg);
                }
            }
            if (req.endsWith) {
                var val = void 0;
                var msg = endsWithMsg;
                if (this.isIMessage(req.endsWith)) {
                    val = req.endsWith.value;
                    msg = req.endsWith.message;
                }
                else {
                    val = req.endsWith;
                }
                if (!this.endsWith(text, val)) {
                    errors.push(msg);
                }
            }
            if (req.uppercaseLettersMinLength) {
                var val = void 0;
                var msg = uppercaseLettersMinLengthMsg;
                if (this.isIMessage(req.uppercaseLettersMinLength)) {
                    val = req.uppercaseLettersMinLength.value;
                    msg = req.uppercaseLettersMinLength.message;
                }
                else {
                    val = req.uppercaseLettersMinLength;
                }
                if (val > upperCount) {
                    errors.push(msg);
                }
            }
            if (req.lowercaseLettersMinLength) {
                var val = void 0;
                var msg = lowercaseLettersMinLengthMsg;
                if (this.isIMessage(req.lowercaseLettersMinLength)) {
                    val = req.lowercaseLettersMinLength.value;
                    msg = req.lowercaseLettersMinLength.message;
                }
                else {
                    val = req.lowercaseLettersMinLength;
                }
                if (val > lowerCount) {
                    errors.push(msg);
                }
            }
            if (req.numbersMinLength) {
                var val = void 0;
                var msg = numbersMinLengthMsg;
                if (this.isIMessage(req.numbersMinLength)) {
                    val = req.numbersMinLength.value;
                    msg = req.numbersMinLength.message;
                }
                else {
                    val = req.numbersMinLength;
                }
                if (val > numbersCount) {
                    errors.push(msg);
                }
            }
            if (req.symbolsMinLength) {
                var val = void 0;
                var msg = symbolsMinLengthMsg;
                if (this.isIMessage(req.symbolsMinLength)) {
                    val = req.symbolsMinLength.value;
                    msg = req.symbolsMinLength.message;
                }
                else {
                    val = req.symbolsMinLength;
                }
                if (val > symbolsCount) {
                    errors.push(msg);
                }
            }
            if (req.include) {
                var val = void 0;
                var msg = includeMsg;
                if (this.isIMessage(req.include)) {
                    val = req.include.value;
                    msg = req.include.message;
                }
                else {
                    val = req.include;
                }
                if (!this.contains(text, val)) {
                    errors.push(msg);
                }
            }
            if (req.exclude) {
                var val = void 0;
                var msg = excludeMsg;
                if (this.isIMessage(req.exclude)) {
                    val = req.exclude.value;
                    msg = req.exclude.message;
                }
                else {
                    val = req.exclude;
                }
                if (!this.doesNotContains(text, val)) {
                    errors.push(msg);
                }
            }
            return errors;
        }
        return [];
    };
    PasswordMeter.prototype.getResults = function (passwords) {
        var results = [];
        if (passwords && passwords.length > 0) {
            for (var index = 0; index < passwords.length; index++) {
                results.push(this.getResult(passwords[index]));
            }
            return results;
        }
        return [];
    };
    PasswordMeter.prototype.getResult = function (password) {
        if (password) {
            var req = this.getRequirementsScore(password);
            if (req.length != 0) {
                return {
                    "score": -1,
                    "status": "needs requirement(s)",
                    "errors": req,
                    "percent": 0
                };
            }
            var len = this.getLengthScore(password);
            var upper = this.getUppercaseLettersScore(password);
            var lower = this.getLowercaseLettersScore(password);
            var num = this.getNumbersScore(password);
            var symbol = this.getSymbolsScore(password);
            var letterOnly = this.getLettersOnlyScore(password);
            var numberOnly = this.getNumbersOnlyScore(password);
            var repetition = this.getRepeatCharactersScore(password);
            var consecutiveUpper = this.getConsecutiveUppercaseLettersScore(password);
            var consecutiveLower = this.getConsecutiveLowercaseLettersScore(password);
            var consecutiveNumber = this.getConsecutiveNumbersScore(password);
            var seqLetters = this.getSequentialLettersScore(password);
            var seqNumbers = this.getSequentialNumbersScore(password);
            var seqSymbols = this.getSequentialSymbolsScore(password);
            var score = len + upper + lower + num + symbol + letterOnly
                + numberOnly + repetition + consecutiveUpper + consecutiveLower
                + consecutiveNumber + seqLetters + seqNumbers + seqSymbols;
            var defaultRanges = {
                "40": "veryWeak",
                "80": "weak",
                "120": "medium",
                "180": "strong",
                "200": "veryStrong",
                "_": "perfect"
            };
            var stat = "";
            if (!this.scoreRange) {
                this.scoreRange = defaultRanges;
            }
            var value = void 0;
            var message = void 0;
            var range = Object.keys(this.scoreRange).sort(function (a, b) {
                if (isNaN(a) || isNaN(b)) {
                    if (a > b)
                        return 1;
                    else
                        return -1;
                }
                return a - b;
            });
            if (range.length < 2) {
                return {
                    "score": -2,
                    "status": "error",
                    "errors": '"scoreRange" must have at least two members.',
                    "percent": 0
                };
            }
            for (var index = 0; index < range.length; index++) {
                var key = range[index];
                if (key != undefined) {
                    if (index == 0) {
                        if (this.between(score, 1, parseFloat(range[index]))) {
                            stat = this.scoreRange[range[0]];
                            break;
                        }
                    }
                    if (index === (range.length - 1)) {
                        if (range[index] == "_") {
                            if (this.between(score, parseFloat(range[index - 1]), 1000000000000000000)) {
                                stat = this.scoreRange[range[range.length - 1]];
                                break;
                            }
                        }
                        else {
                            return {
                                "score": -2,
                                "status": "error",
                                "errors": 'The last member of the "scoreRange" must be "_".',
                                "percent": 0
                            };
                        }
                    }
                    if (this.between(score, parseFloat(range[index - 1]), parseFloat(range[index]))) {
                        stat = this.scoreRange[range[index]];
                        break;
                    }
                }
            }
            var percent = (score * 100) / parseFloat(range[range.length - 2]);
            return {
                "score": score,
                "status": stat,
                "percent": percent >= 100 ? 100 : percent
            };
        }
        return {
            "score": 0, "status": "Empty", "percent": 0
        };
    };
    return PasswordMeter;
}());
exports.PasswordMeter = PasswordMeter;
//# sourceMappingURL=index.js.map