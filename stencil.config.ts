import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { svgOptimizerPlugin } from './src/utils/rollup-svg';
import { inlineSvg } from 'stencil-inline-svg';

export const config: Config = {
  namespace: 'astro-web-components',
  globalStyle: 'src/global/global.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [sass(),  svgOptimizerPlugin()],
};
