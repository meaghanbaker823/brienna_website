import js from "@eslint/js";

export default [
  // 1. Start with ESLint's absolute strictest built-in rules
  js.configs.all,

  {
    // Apply to all JavaScript files
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        // Enable browser and node environments
        window: "readonly",
        document: "readonly",
        process: "readonly",
        console: "readonly",
      },
    },

    // 2. Custom overrides to turn warnings into errors and add extra strictness
    rules: {
      // Force errors instead of warnings for everything
      "no-unused-vars": "error",
      "no-console": "error",
      "no-debugger": "error",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],

      // Strict formatting and code quality constraints
      "max-lines-per-function": ["error", { max: 50 }],
      complexity: ["error", { max: 10 }],
      "max-depth": ["error", { max: 3 }],

      // Relax rules that might break standard coding styles
      "one-var": ["error", "never"],
      "no-magic-numbers": "off", // Often too annoying in practice, turn on if desired
    },
  },
];
