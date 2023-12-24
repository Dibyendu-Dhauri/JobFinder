import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
// import dotenv from 'dotenv'
// dotenv.config()


// https://vitejs.dev/config/
export default defineConfig(({mode})=>{
  const env = loadEnv(mode, process.cwd(), '');
  console.log(env.BASE_URL);
  return {
    plugins: [react()],
    server: {
      proxy: {
         "/api": env.BASE_URL,
        // "/api": {
        //   target: env.BASE_URL, // Replace with your backend server
        //   changeOrigin: true,
        //   secure: false,
        // },
      },
    },
  }
});
