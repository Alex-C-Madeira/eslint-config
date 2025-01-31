export declare namespace env {
    let es2021: boolean;
}
declare let _extends: string[];
export { _extends as extends };
export declare let parser: string;
export declare namespace parserOptions {
    let ecmaVersion: string;
    let sourceType: string;
}
export declare let plugins: string[];
export declare let rules: {
    'import/newline-after-import': string;
    'prettier/prettier': (string | {
        printWidth: number;
        tabWidth: number;
        singleQuote: boolean;
        trailingComma: string;
        arrowParens: string;
        semi: boolean;
        endOfLine: string;
    })[];
    'simple-import-sort/imports': (string | {
        groups: string[][];
    })[];
};
export declare let settings: {
    'import/parsers': {
        [x: string]: string[];
    };
};
export declare let ignorePatterns: string[];
