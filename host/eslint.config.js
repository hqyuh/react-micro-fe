import js from '@eslint/js';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginSonarjs from 'eslint-plugin-sonarjs';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import { dirname } from 'path';
import tseslint from 'typescript-eslint';
import { fileURLToPath } from 'url';

// get address eslint.config.js file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default tseslint.config(
  { ignores: ['dist', 'vite.config.ts', '**/*.config.js', 'src/components'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint.plugin,
      prettier: eslintPluginPrettier,
      unicorn: eslintPluginUnicorn,
      sonarjs: eslintPluginSonarjs,
      '@stylistic/ts': stylisticTs
    },
    languageOptions: {
      parserOptions: {
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.eslint.json']
      }
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prettier/prettier': [
        'warn',
        {
          arrowParens: 'always',
          bracketSameLine: false,
          bracketSpacing: true,
          embeddedLanguageFormatting: 'auto',
          htmlWhitespaceSensitivity: 'css',
          insertPragma: false,
          jsxSingleQuote: true,
          proseWrap: 'preserve',
          quoteProps: 'as-needed',
          requirePragma: false,
          semi: true,
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'none',
          useTabs: false,
          vueIndentScriptAndStyle: false,
          printWidth: 120,
          endOfLine: 'auto',
          plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
          importOrder: ['^src/(.*)$', '^[./]'],
          importOrderSeparation: true
        }
      ],
      //** plugin:sonarjs */
      'sonarjs/no-duplicate-string': 'off',
      //** plugin:unicorn */
      // NOTE: disable
      // 'unicorn/filename-case': [
      //   'error',
      //   {
      //     cases: {
      //       kebabCase: true,
      //       pascalCase: true
      //     }
      //   }
      // ],
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-static-only-class': 'off',
      'unicorn/prefer-module': 'off',
      'unicorn/prefer-node-protocol': 'off',
      //** plugin:typescript-eslint  */
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true
        }
      ],
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
      '@typescript-eslint/no-restricted-types': [
        'error',
        {
          types: {
            Object: {
              message: 'Avoid using the Object type. Did you mean object?'
            },

            Function: {
              message: 'Avoid using the Function type. Prefer a specific function type, like () => void.'
            },

            Boolean: {
              message: 'Avoid using the Boolean type. Did you mean boolean?',

              fixWith: 'boolean'
            },

            Number: {
              message: 'Avoid using the Number type. Did you mean number?',

              fixWith: 'number'
            },

            Symbol: {
              message: 'Avoid using the Symbol type. Did you mean symbol?',

              fixWith: 'symbol'
            },

            String: {
              message: 'Avoid using the String type. Did you mean string?',

              fixWith: 'string'
            },

            '{}': {
              message: 'Use Record<K, V> instead',

              fixWith: 'Record<K, V>'
            }

            // object: {
            //   message: 'Use Record<K, V> instead',

            //   fixWith: 'Record<K, V>'
            // }
          }
        }
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-member-accessibility': [
        'off',
        {
          overrides: {
            constructors: 'off'
          }
        }
      ],
      '@stylistic/ts/indent': ['error', 2],
      '@typescript-eslint/member-ordering': 'off',
      '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
      '@typescript-eslint/no-duplicate-enum-values': 'error',
      '@typescript-eslint/no-empty-interface': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/ban-tslint-comment': 'error',
      '@typescript-eslint/consistent-indexed-object-style': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/no-require-imports': 'error',
      'keyword-spacing': 'off',
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-this-alias': 'error',
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/no-use-before-declare': 'off',
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        // {
        //   selector: 'default',
        //   format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
        //   filter: {
        //     regex: '^_.*$',
        //     match: false
        //   }
        // },
        // {
        //   selector: 'variable',
        //   format: ['camelCase', 'UPPER_CASE']
        // },
        {
          selector: 'interface',
          format: ['PascalCase'],
          prefix: ['I']
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
          prefix: ['T']
        },
        {
          selector: 'typeParameter',
          format: ['PascalCase'],
          custom: {
            regex: '^[A-Z]$',
            match: true
          }
        },
        {
          selector: 'class',
          format: ['PascalCase']
        },
        {
          selector: 'enum',
          format: ['PascalCase'],
          prefix: ['E']
        },
        {
          selector: 'memberLike',
          modifiers: ['private'],
          format: ['camelCase'],
          leadingUnderscore: 'forbid'
        },
        {
          selector: 'variable',
          types: ['boolean'],
          format: ['PascalCase'],
          prefix: ['is', 'should', 'has', 'can', 'did', 'will']
        },
        {
          selector: 'property',
          format: null,
          modifiers: ['requiresQuotes']
        }
      ],
      '@typescript-eslint/unified-signatures': 'error',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unused-expressions': ['error'],
      '@typescript-eslint/no-unnecessary-condition': 'off',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/await-thenable': 'error',
      // plugin:eslint
      'no-await-in-loop': 'error',
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: '*', next: 'try' },
        { blankLine: 'always', prev: 'try', next: '*' },
        { blankLine: 'always', prev: '*', next: 'block-like' },
        { blankLine: 'always', prev: 'block-like', next: '*' },
        { blankLine: 'always', prev: '*', next: 'throw' },
        { blankLine: 'always', prev: 'var', next: '*' }
      ],
      'arrow-body-style': 'error',
      'arrow-parens': ['error', 'always'],
      complexity: 'off',
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'rxjs/Rx',
              message: "Please import directly from 'rxjs' instead"
            }
          ]
        }
      ],
      'object-curly-spacing': ['error', 'always'],
      'no-multi-spaces': 'error',
      'no-useless-return': 'error',
      'no-else-return': 'error',
      'no-implicit-coercion': 'error',
      'constructor-super': 'error',
      yoda: 'error',
      strict: ['error', 'never'],
      curly: 'error',
      'dot-notation': 'error',
      'eol-last': 'error',
      eqeqeq: ['error', 'smart'],
      'guard-for-in': 'error',
      'id-match': 'error',
      'max-classes-per-file': ['error', 2],
      'max-len': [
        'error',
        {
          code: 121
        }
      ],
      'new-parens': 'error',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-cond-assign': 'error',
      'no-constant-condition': 'error',
      'no-dupe-else-if': 'error',
      'lines-between-class-members': ['error', 'always'],
      'no-console': [
        'warn',
        {
          allow: [
            'info',
            'dirxml',
            'warn',
            'error',
            'dir',
            'timeLog',
            'assert',
            'clear',
            'count',
            'countReset',
            'group',
            'groupCollapsed',
            'groupEnd',
            'table',
            'Console',
            'markTimeline',
            'profile',
            'profileEnd',
            'timeline',
            'timelineEnd',
            'timeStamp',
            'context'
          ]
        }
      ],
      'no-debugger': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'off',
      'no-empty': 'error',
      'no-eval': 'error',
      'no-extra-bind': 'error',
      'no-fallthrough': 'error',
      'no-invalid-this': 'error',
      'no-irregular-whitespace': 'error',
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1
        }
      ],
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-redeclare': 'error',
      'no-return-await': 'error',
      'no-sequences': 'error',
      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'error',
      'no-shadow': 'off',
      'no-throw-literal': 'error',
      'no-trailing-spaces': 'error',
      'no-undef-init': 'error',
      'no-unsafe-finally': 'error',
      'no-unused-expressions': 'off',
      'no-unused-labels': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-const': 'error',
      'prefer-object-spread': 'error',
      'quote-props': ['error', 'as-needed'],
      radix: 'error',
      'use-isnan': 'error',
      'valid-typeof': 'off',
      'space-before-function-paren': 'off'
    }
  }
);
