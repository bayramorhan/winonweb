<script setup>
import { Square2StackIcon } from '@heroicons/vue/24/outline';
import { XMarkIcon, MinusIcon } from '@heroicons/vue/24/solid';
import animationData from '~~/assets/lf30_editor_1kz2almm.json'
import 'vue3-lottie/dist/style.css'

const emits = defineEmits(['close', 'setup-complete'])

const setupInjected = ref(false);
const setupProgress = ref(0);
const progressLabel = ref('Copying files..');
const addToTaskbar = ref(true);

watch(setupInjected, () => {
    setInterval(() => {
        if (setupProgress.value < 100) {
            setupProgress.value += 1;
            if (setupProgress.value > 50) {
                progressLabel.value = 'Installing..';
            }
        } else {
            emits('setup-complete')
        }
    }, 100);
})
</script>

<template>
    <div
        class="absolute w-1/3 left-0 right-0 mx-auto bg-[#1b1413] rounded-md border border-gray-800 h-4/6 top-1/2 -translate-y-1/2 z-50">
        <div class="w-full bg-black bg-opacity-40 flex justify-between px-4">
            <div class="py-2.5 w-56 text-white rounded-t-md px-4 text-xs flex items-center space-x-2.5 relative">
                <IconsSpotify class="w-5" />
                <span>Spotify Installer</span>
            </div>

            <div class="absolute top-0 right-0">
                <button type="button" class="text-white py-1.5 px-2.5 hover:bg-gray-900 cursor-default">
                    <MinusIcon class="w-5" />
                </button>
                <button type="button" class="text-white py-1.5 px-2.5 hover:bg-gray-900 cursor-default">
                    <Square2StackIcon class="w-5" />
                </button>
                <button type="button" @click="$emit('close')"
                    class="text-white py-1.5 px-2.5 hover:bg-red-600 rounded-tr-md cursor-default">
                    <XMarkIcon class="w-5" />
                </button>
            </div>
        </div>


        <div v-if="setupInjected" class="flex flex-col items-center justify-center h-96 w-full space-y-6">
            <client-only>
                <Vue3Lottie :animationData="animationData" class="text-green-500" :height="160" :width="160" />
            </client-only>

            <p class="text-gray-300 text-xs">{{ progressLabel }} {{ setupProgress }}%</p>
        </div>

        <div class="flex flex-col items-center space-y-10 justify-center py-10 w-full" v-else-if="!setupInjected">
            <IconsSpotify class="w-24" />
            <div class="space-y-6 flex flex-col items-center justify-center">
                <h1 class="text-gray-100">Welcome to Spotify Install Wizard</h1>
                <button type="button" @click="setupInjected = true"
                    class="bg-[#1dda63] hover:bg-opacity-95 text-black px-4 py-1.5 rounded">Install</button>
            </div>

            <div class="flex items-center space-x-2" @click="addToTaskbar = !addToTaskbar">
                <button type="button" class="h-4 w-4 rounded-full bg-gray-800 flex items-center justify-center">
                    <transition enter-active-class="transition duration-200" enter-from-class="opacity-0"
                        enter-to-class="opacity-100">
                        <div v-if="addToTaskbar" class="w-2 h-2 rounded-full bg-[#1dda63]"></div>
                    </transition>
                </button>
                <label for="" class="text-xs text-gray-400 select-none">Add to taskbar</label>
            </div>
        </div>
    </div>
</template>