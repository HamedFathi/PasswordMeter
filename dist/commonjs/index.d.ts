export interface IRequirement {
    minLength?: number | IMessage;
    maxLength?: number | IMessage;
    uppercaseLettersMinLength?: number | IMessage;
    lowercaseLettersMinLength?: number | IMessage;
    numbersMinLength?: number | IMessage;
    symbolsMinLength?: number | IMessage;
    include?: string[] | IMessage;
    exclude?: string[] | IMessage;
    startsWith?: string | IMessage;
    endsWith?: string | IMessage;
}
export interface IMessage {
    value: number | string | string[];
    message: string;
}
export interface IResult {
    score: number;
    status: string;
    percent: number;
    errors?: string | string[];
}
export declare class PasswordMeter {
    requirements: IRequirement | undefined;
    scoreRange: any;
    private uppercaseLetters;
    private lowercaseLetters;
    private numbers;
    private symbols;
    constructor(requirements?: IRequirement | undefined, scoreRange?: any);
    private startsWith(str, word);
    private endsWith(str, word);
    private chunkString(str, len);
    private getLength(text);
    private doesNotContains(text, list);
    private contains(text, list);
    private between(x, min, max);
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
