/* eslint-disable @typescript-eslint/no-require-imports */
const { defineConfig } = require("eslint/config");

const globals = require("globals");
const react = require("eslint-plugin-react");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const js = require("@eslint/js");

const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = (async () => {
    const eslintPlugin = await import("eslint-plugin-eslint-plugin");

    return defineConfig([{
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },

            ecmaVersion: "latest",
            sourceType: "module",

            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        extends: compat.extends(
            "eslint:recommended",
            "plugin:react/recommended",
            "plugin:@typescript-eslint/recommended",
            "plugin:security/recommended-legacy",
        ),

        plugins: {
            react,
            "eslint-plugin": eslintPlugin.default,
            "@typescript-eslint": typescriptEslint,
        },

        rules: {
            "security/detect-object-injection": "off",
            "react/react-in-jsx-scope": "off",
        },

        settings: {
            react: {
                version: "detect",
            },
        },
    }]);
})();
