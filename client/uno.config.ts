import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetWind4,
  transformerAttributifyJsx,
} from "unocss";

export default defineConfig({
  presets: [
    presetAttributify({
      /* preset options */
    }),
    presetWind4(),
    // ...
  ],
  transformers: [transformerAttributifyJsx()],
});
