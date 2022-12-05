<script setup>
import { vOnClickOutside } from '@vueuse/components'
import * as icons from '@heroicons/vue/24/solid';
import { useToolbarStore } from '~~/stores/toolbar';

const { isOpen, clickOutside, keyupHandler, onSearchFocused } = useToolbar();
const toolbarStore = useToolbarStore()
const { currentDate, currentTime } = useDatetimeHelper();


onMounted(() => {
    document.addEventListener('keyup', keyupHandler);
})
</script>

<template>
    <div v-on-click-outside="clickOutside" class="z-50">
        <transition enter-active-class="transition duration-200 transform ease-out"
            enter-from-class="translate-y-full opacity-0" enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-200 transform ease-out" leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-10 opacity-0">
            <div v-if="isOpen"
                class="w-full lg:w-5/12 2xl:w-4/12 h-auto bg-gray-800 rounded-md border border-gray-700 bg-opacity-90 backdrop-blur-sm absolute bottom-14 lg:bottom-16 left-0 lg:left-2 pt-6">
                <div class="px-6 mb-6">
                    <form action="" class="relative">
                        <component :is="icons.MagnifyingGlassIcon"
                            class="w-4 absolute top-1/2 -translate-y-1/2 left-4 text-gray-300" />
                        <input type="text" placeholder="Type here to search"
                            class="bg-gray-900 w-full px-12 py-2.5 text-sm placeholder:text-gray-300 focus:placeholder:text-gray-200 rounded-md border-b-2 border-b-sky-500 focus:outline-none focus:ring-0 text-white"
                            @focus="onSearchFocused">
                    </form>
                </div>
                <div class="bg-black rounded-b px-4 py-2.5 bg-opacity-30 flex items-center justify-between">
                    <button type="button"
                        class="flex items-center space-x-2 cursor-default px-4 py-1 hover:bg-white hover:bg-opacity-10 rounded">
                        <component :is="icons.UserCircleIcon" class="w-8 text-gray-200" />
                        <span class="text-gray-200 text-xs">Guest User</span>
                    </button>
                    <button type="button" class="p-2 hover:bg-white hover:bg-opacity-10 rounded cursor-default">
                        <component :is="icons.PowerIcon" class="w-5 text-gray-200" />
                    </button>
                </div>
            </div>
        </transition>
        <div
            class="text-white bg-gray-800 py-1 px-2.5 border-t border-t-gray-600 bg-opacity-80 backdrop-blur-sm flex justify-between items-center">
            <div>
                <button type="button" @click="isOpen = !isOpen"
                    class="py-2 px-2.5 hover:bg-gray-50 rounded hover:shadow hover:bg-opacity-5 hover:cursor-default focus:outline-none focus:ring-0">
                    <img src="/img/windows-logo.svg" class="w-6" alt="">
                </button>
                <button type="button" v-for="toolbarItem in toolbarStore.toolbarItems" :key="toolbarItem.name"
                    class="py-2 px-2.5 hover:bg-gray-50 rounded hover:shadow hover:bg-opacity-5 hover:cursor-default"
                    :title="toolbarItem.name">
                    <component :is="icons[toolbarItem.icon]" class="w-6" :class="[toolbarItem.color]" />
                </button>
            </div>

            <div
                class="text-xs text-right space-y-0.5 select-none px-2 py-1.5  hover:bg-white hover:bg-opacity-10 rounded flex items-center space-x-2.5 transition duration-200">
                <div>
                    <div>{{ currentTime }}</div>
                    <div>{{ currentDate }}</div>
                </div>

                <span
                    class="w-4 h-4.5 bg-sky-500 rounded-full flex items-center justify-center text-black text-xs">1</span>
            </div>

        </div>

    </div>
</template>