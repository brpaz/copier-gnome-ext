import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier'

export default defineConfig([
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    ignores: ['node_modules', 'dist'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
])
