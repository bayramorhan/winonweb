<script setup>
import { Square2StackIcon } from '@heroicons/vue/24/outline';
import { FolderIcon, TrashIcon, XMarkIcon, MinusIcon } from '@heroicons/vue/24/solid';
</script>

<template>
    <div class="flex flex-col h-screen overflow-hidden">
        <div
            class="absolute w-2/3 left-0 right-0 mx-auto bg-gray-900 rounded-md border border-gray-800 h-4/6 top-1/2 -translate-y-1/2 z-50">
            <div class="w-full bg-black bg-opacity-40 pt-2.5 flex justify-between px-4">
                <div
                    class="bg-gray-900 py-2.5 w-56 text-white rounded-t-md px-4 text-xs flex items-center space-x-2.5 relative">
                    <FolderIcon class="w-4 text-amber-300" />
                    <span>Games</span>
                    <button type="button" class="absolute right-2 p-1 hover:bg-gray-800 rounded">
                        <XMarkIcon class="w-4" />
                    </button>
                </div>

                <div class="absolute top-0 right-0">
                    <button type="button" class="text-white py-1.5 px-2.5 hover:bg-gray-900">
                        <MinusIcon class="w-5" />
                    </button>
                    <button type="button" class="text-white py-1.5 px-2.5 hover:bg-gray-900">
                        <Square2StackIcon class="w-5" />
                    </button>
                    <button type="button" class="text-white py-1.5 px-2.5 hover:bg-red-600 rounded-tr-md ">
                        <XMarkIcon class="w-5" />
                    </button>
                </div>
            </div>
            <div class="w-full bg-gray-900 border-b border-gray-800 py-6">

            </div>
        </div>
        <div class="flex flex-col relative flex-1">
            <ul
                class="flex md:flex-col flex-wrap items-start justify-between md:justify-start list-none gap-4 md:gap-0 md:space-y-4 p-2">
                <li>
                    <button type="button"
                        class="py-1 px-2 flex flex-col items-center justify-center space-y-1 hover:bg-gray-50 hover:backdrop-blur hover:bg-opacity-20 rounded-md w-20 hover:cursor-default">
                        <FolderIcon class="w-12 text-amber-300" />
                        <span class="text-xs text-white select-none">Documents</span>
                    </button>
                </li>
                <li>
                    <button type="button"
                        class="py-1 px-2 flex flex-col items-center justify-center space-y-1 hover:bg-gray-50 hover:backdrop-blur hover:bg-opacity-20 rounded-md w-20 hover:cursor-default">
                        <FolderIcon class="w-12 text-amber-300" />
                        <span class="text-xs text-white select-none">Games</span>
                    </button>
                </li>
                <li>
                    <button type="button"
                        class="py-1 px-2 flex flex-col items-center justify-center space-y-1 hover:bg-gray-50 hover:backdrop-blur hover:bg-opacity-20 rounded-md w-20 hover:cursor-default">
                        <FolderIcon class="w-12 text-amber-300" />
                        <span class="text-xs text-white select-none">Pictures</span>
                    </button>
                </li>
                <li>
                    <button type="button"
                        class="py-1 px-2 flex flex-col items-center justify-center space-y-1 hover:bg-gray-50 hover:backdrop-blur hover:bg-opacity-20 rounded-md w-20 hover:cursor-default">
                        <FolderIcon class="w-12 text-amber-300" />
                        <span class="text-xs text-white select-none">Projects</span>
                    </button>
                </li>
                <li>
                    <button type="button"
                        class="py-1 px-2 flex flex-col items-center justify-center space-y-1 hover:bg-gray-50 hover:backdrop-blur hover:bg-opacity-20 rounded-md w-20 hover:cursor-default">
                        <TrashIcon class="w-12 text-gray-100" />
                        <span class="text-xs text-white select-none">Recylce Bin</span>
                    </button>
                </li>
            </ul>
        </div>
        <ToolBar />
    </div>
</template>