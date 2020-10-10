# nuxt-consumes-stenciljs-bwc

### How to consume stencil web component to my Vue project

Create a new file called `stenciljs-components.js` to plugins folder
```
import Vue from 'vue'

/**
 * Stenciljs imports from
 * https://stenciljs.com/docs/vue
 */
import { applyPolyfills, defineCustomElements } from 'stencil-components-collection/loader'

Vue.config.productionTip = false

// ignore the web components name witgh regex
Vue.config.ignoredElements = [/stencil-wc-\w*/];

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements()
})

```
then add the file to the nuxt.config.js file
```
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '@/plugins/stenciljs-components.js', mode: 'client'}
  ],
```

And add `stencil-components-collection` as a Dependency to package.json 
```
"stencil-components-collection": "^0.0.1"
```

Whenever you make changes to stencil components, you need to build the stencil-components-collection with `npm run build`.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
