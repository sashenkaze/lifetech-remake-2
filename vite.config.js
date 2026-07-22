import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  // base: command === 'build' ? '/lifetech-remake-2/' : '/',
  base: '/lifetech-remake-2/',
}));
