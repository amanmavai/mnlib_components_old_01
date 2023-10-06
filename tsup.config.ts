import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  clean: true,
  publicDir: true,
  "dts": true,
  "format": [
    "cjs",
    "esm"
  ],
  "external": [
    "react",
    "react-dom"
  ],
})