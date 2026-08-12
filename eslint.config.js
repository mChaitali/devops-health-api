const js = require("@eslint/js");
const jest = require("eslint-plugin-jest");

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: {
        console: "readonly",
        process: "readonly",
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
        __filename: "readonly"
      }
    }
  },

  // Jest test files
  {
    files: ["tests/**/*.js", "**/*.test.js", "**/*.spec.js"],
    plugins: {
        jest
    },
    languageOptions: {
        globals: {
            ...jest.environments.globals.globals
        }
    },
    rules: {
        ...jest.configs.recommended.rules
    }
  }
];