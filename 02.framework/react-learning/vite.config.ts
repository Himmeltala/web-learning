import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// unocss
import Unocss from "unocss/vite";
import { rules, shortcuts } from "./unocss.config";
import { presetAttributify, presetUno } from "unocss";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  plugins: [
    react(),
    Unocss({
      rules,
      shortcuts,
      transformers: [
        transformerDirectives({
          applyVariable: ["--at-apply", "--uno-apply", "--uno"],
        }),
      ],
      presets: [presetAttributify({}), presetUno()],
    }),
  ],
});
