import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'stencil-components-collection',
  enableCache: false,
  plugins: [
    sass()
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    // REGULAR STENCILJS BUILD
    {
      type: 'www',
      serviceWorker: null // disable service workers
    },
    // STATIC GENERATED STENCILJS BUILD
    // {
    //   type: 'www',
    //   baseUrl: 'https://stenciljs.com/',
    //   prerenderConfig: './prerender.config.ts',
    // }
  ]
};
