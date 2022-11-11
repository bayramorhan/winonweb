// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss"],
    css: ['@/assets/css/main.scss'],
    build: {
        transpile: ["@heroicons/vue", "@vueuse/components"]
    }
})