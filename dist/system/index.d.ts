export interface IRequirement {
    minLength?: number | IMessage;
    maxLength?: number | IMessage;
    uppercaseLettersMinLength?: number | IMessage;
    lowercaseLettersMinLength?: number | IMessage;
    numbersMinLength?: number | IMessage;
    symbolsMinLength?: number | IMessage;
    mustBe?: string[] | IMessage;
    mustNotBe?: string[] | IMessage;
    startsWith?: string | IMessage;
    endsWith?: string | IMessage;
}
export interface IScoreRange {
    veryWeak?: number;
    weak?: number;
    medium?: number;
    strong?: number;
    veryStrong?: number;
}
export interface IMessage {
    value: number | string | string[];
    message: string;
}
export interface IResult {
    score: number;
    status: string;
    errors?: string[];
}
export declare class PasswordMeter {
    requirements: IRequirement | undefined;
    scoreRange: IScoreRange | undefined;
    private uppercaseLetters;
    private lowercaseLetters;
    private numbers;
    private symbols;
    constructor(requirements?: IRequirement | undefined, scoreRange?: IScoreRange | undefined);
    private startsWith(str, word);
    private endsWith(str, word);
    private chunkString(str, len);
    private getLength(text);
    private doesNotContains(text, list);
    private contains(text, list);
    private isIMessage(arg);
    private isNumber(text);
    private isLetter(text);
    private isUppercaseLetter(text);
    private isLowercaseLetter(text);
    private isSymbol(text);
    private getLengthScore(text);
    private getUppercaseLettersScore(text);
    private getLowercaseLettersScore(text);
    private getNumbersScore(text);
    private getSymbolsScore(text);
    private getLettersOnlyScore(text);
    private getNumbersOnlyScore(text);
    private getConsecutiveUppercaseLettersScore(text);
    private getConsecutiveLowercaseLettersScore(text);
    private getConsecutiveNumbersScore(text);
    private reverseString(str);
    private sequentialBuilder(text, minChunk);
    private distinctArray(arr);
    private sortByLength(arr, limit?);
    private getSequentialLettersScore(text);
    private getSequentialNumbersScore(text);
    private getSequentialSymbolsScore(text);
    private getRepeatCharactersScore(text);
    private getRequirementsScore(text);
    getResults(passwords: string[]): IResult[];
    getResult(password: string): IResult;
}
