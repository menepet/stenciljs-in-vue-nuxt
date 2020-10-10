# vue-consumes-stenciljs-bwc

### How to consume stencil web component to my Vue project

Add `stencil-components-collection` as a Dependency to package.json 
```
"stencil-components-collection": "^0.0.1"
```

then add this webpack config line to vue.config.gr
```
chainWebpack: (config) => { config.resolve.symlinks(false) }
```

and just add the code below to main.js
```
/**
 * Stenciljs imports from
 * https://stenciljs.com/docs/vue
 */
import { applyPolyfills, defineCustomElements } from 'stencil-components-collection/loader';

Vue.config.productionTip = false;

// ignore the web components name witgh regex
Vue.config.ignoredElements = [/stencil-wc-\w*/];

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements();
});
```

Whenever you make changes to stencil components, you need to build the stencil-components-collection with `npm run build`.

## Project setup
```
npm run install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Link Stenciljs Components Project
```
lerna add stencil-components-collection
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
