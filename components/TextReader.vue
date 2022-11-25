<script setup>
import { Square2StackIcon } from '@heroicons/vue/24/outline';
import { XMarkIcon, MinusIcon, DocumentIcon } from '@heroicons/vue/24/solid';
</script>

<template>
    <div
        class="absolute w-1/3 left-0 right-0 mx-auto bg-[#1b1413] rounded-md border border-gray-800 h-4/6 top-1/2 -translate-y-1/2 z-50">
        <div class="w-full bg-black bg-opacity-40 flex justify-between px-4">
            <div class="py-2.5 w-56 text-white rounded-t-md px-4 text-xs flex items-center space-x-2.5 relative">
                <DocumentIcon class="w-5" />
                <span>README</span>
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

        <div class="text-gray-400 text-xs p-4">
            <textarea class="w-full bg-transparent h-72 resize-none text-left p-2 focus:ring-0 focus:outline-none"
                spellcheck="false"
                autocomplete="off">The apps you see in this sample app are just views. For example, when you run an installation, this application only appears to be installed. It is not actually installed on your computer or browser. Also, no data of this application is stored by us.</textarea>
        </div>

    </div>
</template>