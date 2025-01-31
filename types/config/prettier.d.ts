export const defaultRule: {
    'prettier/prettier': (string | {
        printWidth: number;
        tabWidth: number;
        singleQuote: boolean;
        trailingComma: string;
        arrowParens: string;
        semi: boolean;
        endOfLine: string;
    })[];
};
export namespace defaultOptions {
    let printWidth: number;
    let tabWidth: number;
    let singleQuote: boolean;
    let trailingComma: string;
    let arrowParens: string;
    let semi: boolean;
    let endOfLine: string;
}
