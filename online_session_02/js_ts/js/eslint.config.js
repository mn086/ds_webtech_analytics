import eslint from '@eslint/js';
import globals from 'globals';

export default [
    {
        ignores: [
            'node_modules/',
            'dist/',
            'build/'
        ]
    },
    {
        files: ['**/*.js'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node
            },
            ecmaVersion: 'latest',
            sourceType: 'module'
        },
        rules: {
            'indent': ['error', 4],
            'quotes': ['error', 'single'],
            'semi': ['error', 'always'],
            'no-console': 'warn',
            'no-unused-vars': 'warn'
        }
    }
]; 