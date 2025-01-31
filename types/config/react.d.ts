export const defaultRule: {
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
