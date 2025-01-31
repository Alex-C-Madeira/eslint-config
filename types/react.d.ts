declare let _extends: string[];
export { _extends as extends };
export declare namespace env {
    let browser: boolean;
    let jest: boolean;
}
export declare namespace parserOptions {
    namespace ecmaFeatures {
        let jsx: boolean;
    }
}
export declare let plugins: string[];
export declare let rules: {
    'react/prop-types': string;
    'react/react-in-jsx-scope': string;
    'react/self-closing-comp': string;
    'react/no-unknown-property': string;
    'jsx-a11y/aria-props': string;
    'jsx-a11y/aria-proptypes': string;
    'jsx-a11y/role-supports-aria-props': string;
    'jsx-a11y/aria-unsupported-elements': string;
    'jsx-a11y/role-has-required-aria-props': string;
    'jsx-a11y/alt-text': (string | {
        elements: string[];
        img: string[];
    })[];
};
export declare namespace settings {
    namespace react {
        let version: string;
    }
}
