import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';

import { dependencies } from './package.json';

export default defineConfig(({ mode }) => {
  const allEnv = loadEnv(mode, process.cwd(), '');

  const env = Object.keys(allEnv)
    .filter((key) => key.startsWith('VITE_'))
    .reduce((acc: { [key: string]: any }, key) => {
      acc[key] = allEnv[key];
      return acc;
    }, {});

  return {
    server: {
      fs: {
        allow: ['.', '../shared']
      }
    },
    build: {
      target: 'chrome89'
    },
    plugins: [
      {
        name: 'generate-environment',
        options: function () {
          console.info('Generating environment file with allEnv:', env);
          writeFileSync('./src/environment.ts', `export default ${JSON.stringify(env)};`);
        }
      },
      federation({
        filename: 'remoteEntry.js',
        name: 'remote',
        exposes: {
          './remote-app': './src/App.tsx',
          './environment': './src/environment'
        },
        remotes: {},
        shared: {
          react: {
            requiredVersion: dependencies.react,
            singleton: true
          }
        }
      }),
      react()
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    }
  };
});
