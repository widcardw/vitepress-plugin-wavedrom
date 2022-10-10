# vitepress-plugin-wavedrom

Add wavedrom support for vitepress

## Caution

**WIP** it works in `dev` mode, but may fail in `production` mode. (Add `onMounted` deps to _Wavedrom.vue_ may help)

The plugin is not tested well, and it does not support dark skin. Please report any issues.

Also, wavedrom may load slowly.

## Installation

```bash
npm install wavedrom
npm install vitepress-plugin-wavedrom
```

## Usage

Register component globaly.

```ts
// .vitepress/theme/index.ts
import DefaultTheme from "vitepress/theme";
import WavedromVue from 'vitepress-plugin-wavedrom/Wavedrom.vue';

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component("WavedromVue", WavedromVue);
    }
}
```

If you are annoyed with the error of the missing declaration of vue component, you can create a file named _shim.d.ts_.

```ts
// shim.d.ts
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
```

Add configuration.

```ts
// .vitepress/config.ts
import wavedromPlugin from 'vitepress-plugin-wavedrom';
export default defineConfig({
    markdown: {
        config: md => {
            md.use(wavedromPlugin);
        }
    }
})
```

Use in any markdown file.

```wavedrom
{ signal: [
    { name: "clk",  wave: "P......" },
    { name: "bus",  wave: "x.==.=x", data: ["head", "body", "tail", "data"] },
    { name: "wire", wave: "0.1..0." }
]}
```

## Inspiration

[vitepress-plugin-mermaid](https://github.com/emersonbottero/vitepress-plugin-mermaid)
