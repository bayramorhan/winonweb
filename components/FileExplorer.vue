<script setup>
import { Square2StackIcon } from '@heroicons/vue/24/outline';
import { XMarkIcon, MinusIcon } from '@heroicons/vue/24/solid';

const props = defineProps(["folder"])
const emits = defineEmits(['close'])
</script>

<template>
    <div
        class="absolute w-2/3 left-0 right-0 mx-auto bg-gray-900 rounded-md border border-gray-800 h-4/6 top-1/2 -translate-y-1/2 z-50">
        <div class="w-full bg-black bg-opacity-40 pt-2.5 flex justify-between px-4">
            <div
                class="bg-gray-900 py-2.5 w-56 text-white rounded-t-md px-4 text-xs flex items-center space-x-2.5 relative">
                <component :is="folder.icon" class="w-4" :class="folder.color"></component>
                <span>{{ folder.name }}</span>
                <button type="button" class="absolute right-2 p-1 hover:bg-gray-800 rounded">
                    <XMarkIcon class="w-4" />
                </button>
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
        <div class="w-full bg-gray-900 border-b border-gray-800 p-4">
            <p class="text-xs text-gray-400 select-none">Toolbar is not ready</p>
        </div>
    </div>
</template>