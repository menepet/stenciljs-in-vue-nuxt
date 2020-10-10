# stenciljs-in-vue-nuxt monorepo

> In the repo all the reusable Stenciljs Web Components are in the `/shared-components` folder and can be used by each invididual project in the `/projects`.

---
###### StencilJs version: ^2.0.3
###### vueJs version: ^2.6.11
###### NuxtJs version: ^2.14.6
---

## Project setup
You need to install [node](https://nodejs.org/), [git](https://git-scm.com/) and [lerna](https://lerna.js.org/) locally. 
he project is based on [Stenciljs](https://stenciljs.com/), [vue](https://vuejs.org/) & [nuxt](https://nuxtjs.org/).

Inside the `/projects` folder you can create a project in any lib/framework (Vue, React, Angular, ...) you want.
For components reuability, don't forget to add the `stencil-components-collection` dependency
with the command `lerna add stencil-components-collection` in order to create lernas's package symlink.

> Check [here](projects/vue-consumes-stenciljs-bwc/README.md) how to add stencil web component to a vue project and to [here](projects/nuxt-consumes-stenciljs-bwc/README.md) to Nuxt respectively.

## Run the project

```
lerna bootstrap
npm run start
```
It's as simple as that!

### [StencilJs build types](https://stenciljs.com/docs/cli#stencil-build):

> You can choose a choose static generation build only if your project is created entirely in StencilJs. If you want to prerender a web component you can check Dynamic Rendering from Google's recommendation [here](https://developers.google.com/search/docs/guides/dynamic-rendering).

* CSR (client side rendering)
* [Static Site Generation](https://stenciljs.com/docs/static-site-generation)

## Links
- 📌 Stencil components in Vue: [https://stenciljs.com/docs/vue](https://stenciljs.com/docs/vue)
- 📌 Stencil components in React: [https://stenciljs.com/docs/react](https://stenciljs.com/docs/react)
- 📌 Stencil components in Angular: [https://stenciljs.com/docs/angular](https://stenciljs.com/docs/angular)
- 📌 Stencil components without framework: [https://stenciljs.com/docs/javascript](https://stenciljs.com/docs/javascript)
