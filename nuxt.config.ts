// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", ["@pinia/nuxt", { autoImports: ['defineStore'] }]],
    css: ['@/assets/css/main.scss'],
    build: {
        transpile: ["@heroicons/vue", "@vueuse/components"]
    }
})
