module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"
        // "plugin:@typescript-eslint/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: "module"
    },
    rules: {
        "react-hooks/exhaustive-deps": "error"
    },
    settings: {
        react: {
            version: "detect"
        }
    },
    ignorePatterns: ["**/*.ts", "**/*.html", "**/*.js", "/assets/*"],
    plugins: ["react", "@typescript-eslint", "react-hooks"]
};
