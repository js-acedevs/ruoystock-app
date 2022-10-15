import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import EnvironmentPlugin from "vite-plugin-environment";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: "build",
        manifest: true,
    },
    publicDir: "public",
    plugins: [
        react(),
        EnvironmentPlugin([
            "NODE_ENV",
            "REACT_APP_NAME",
            "REACT_APP_PUBLIC_URL",
            "REACT_APP_API_URI",
            "REACT_APP_JWT_STORAGE_KEY",
        ]),
    ],
});
