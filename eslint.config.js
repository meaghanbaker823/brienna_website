import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
  {
    // Build output and dependencies should never be linted
    ignores: ['dist/**', 'node_modules/**'],
  },
  {
    // Apply to all JavaScript and JSX files
    files: ['**/*.{js,jsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      prettier,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // --- SUPER STRICT CODE QUALITY RULES ---
      'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-undef': 'error',
      'no-duplicate-imports': 'error',
      'no-self-compare': 'error',
      'no-template-curly-in-string': 'error',
      'no-use-before-define': ['error', { functions: false }],
      'consistent-return': 'error',
      'default-case': 'error',
      eqeqeq: ['error', 'always'],
      'no-alert': 'error',
      'no-eval': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-template': 'error',

      // --- STRICT REACT & JSX RULES ---
      'react/prop-types': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-undef': 'error',
      'react/jsx-uses-vars': 'error',
      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: true,
          shorthandFirst: true,
          reservedFirst: true,
          ignoreCase: true,
        },
      ],
      'react/jsx-uses-react': 'off', // Not needed in modern React
      'react/react-in-jsx-scope': 'off', // Not needed in modern React
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'react/no-array-index-key': 'error',
      'react/no-danger': 'warn',
      'react/no-unused-state': 'error',
      'react/destructuring-assignment': ['error', 'always'],

      // --- REACT HOOKS RULES ---
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error', // Changes warning to strict error

      // --- ACCESSIBILITY (JSX-A11Y) RULES ---
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/aria-proptypes': 'error',
      'jsx-a11y/aria-unsupported-elements': 'error',
      'jsx-a11y/role-has-required-aria-props': 'error',
      'jsx-a11y/role-supports-aria-props': 'error',

      // --- PRETTIER SPACING & FORMATTING ---
      'prettier/prettier': [
        'error',
        {
          semi: true,
          trailingComma: 'es5',
          singleQuote: true,
          printWidth: 100,
          tabWidth: 2,
          useTabs: false,
          jsxSingleQuote: false,
          bracketSpacing: true,
          arrowParens: 'always',
        },
      ],
    },
  },
  configPrettier, // Disables ESLint rules that might conflict with Prettier
];
