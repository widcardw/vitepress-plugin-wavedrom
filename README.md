# vitepress-plugin-wavedrom
Add wavedrom support for vitepress

## Caution

The plugin is not tested well. Please report any issues.

Also, wavedrom may load slowly, and it does not support dark skin.

## Installation

```bash
npm install wavedrom
npm install vitepress-plugin-wavedrom
```

## Usage

Add component dependency.

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
