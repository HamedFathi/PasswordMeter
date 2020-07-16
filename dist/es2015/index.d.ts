export interface IRequirement {
    minLength?: number | IMessage;
    maxLength?: number | IMessage;
    uniqueLettersMinLength: number | IMessage;
    uppercaseLettersMinLength?: number | IMessage;
    lowercaseLettersMinLength?: number | IMessage;
    numbersMinLength?: number | IMessage;
    symbolsMinLength?: number | IMessage;
    include?: string[] | IMessage;
    exclude?: string[] | IMessage;
    blackList?: string[] | IMessage;
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
    requirements?: IRequirement | undefined;
    scoreRange?: any;
    private uppercaseLetters;
    private lowercaseLetters;
    private numbers;
    constructor(requirements?: IRequirement | undefined, scoreRange?: any);
    private startsWith;
    private endsWith;
    private chunkString;
    private getLength;
    private doesNotContains;
    private contains;
    private isInBlackList;
    private between;
    private isIMessage;
    private isNumber;
    private isLetter;
    private isUppercaseLetter;
    private isLowercaseLetter;
    private isSymbol;
    private getSymbols;
    private getLengthScore;
    private getUppercaseLettersScore;
    private getLowercaseLettersScore;
    private getNumbersScore;
    private getSymbolsScore;
    private getLettersOnlyScore;
    private getNumbersOnlyScore;
    private getConsecutiveUppercaseLettersScore;
    private getConsecutiveLowercaseLettersScore;
    private getConsecutiveNumbersScore;
    private reverseString;
    private sequentialBuilder;
    private distinctArray;
    private sortByLength;
    private getSequentialLettersScore;
    private getSequentialNumbersScore;
    private getSequentialSymbolsScore;
    private getRepeatCharactersScore;
    private getRequirementsScore;
    getResults(passwords: string[], ignoreCase?: boolean): IResult[];
    getResult(password: string, ignoreCase?: boolean): IResult;
}
