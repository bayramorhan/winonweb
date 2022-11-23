<script setup>
import { FolderIcon, TrashIcon } from '@heroicons/vue/24/solid';
import { OnClickOutside } from '@vueuse/components'

const desktopItems = [
    {
        name: 'Documents',
        icon: FolderIcon,
        color: 'text-amber-300'
    },
    {
        name: 'Games',
        icon: FolderIcon,
        color: 'text-amber-300'
    },
    {
        name: 'Pictures',
        icon: FolderIcon,
        color: 'text-amber-300'
    },
    {
        name: 'Projects',
        icon: FolderIcon,
        color: 'text-amber-300'
    },
    {
        name: 'Recycle Bin',
        icon: TrashIcon,
        color: 'text-gray-100'
    }
]

const selectedItem = ref();
const softSelectedItem = ref();
const onItemSelected = (item) => {
    selectedItem.value = item;
}
</script>

<template>
    <div class="flex flex-col h-screen overflow-hidden">
        <Transition enter-active-class="transition duration-200" enter-from-class="opacity-0"
            enter-to-class="opacity-100">
            <FileExplorer v-if="selectedItem" :folder="selectedItem" @close="selectedItem = ''" />
        </Transition>
        <div class="flex flex-col relative flex-1">
            <OnClickOutside @trigger="softSelectedItem = ''">
                <ul
                    class="inline-flex md:flex-col flex-wrap items-start justify-between md:justify-start list-none gap-4 md:gap-0 md:space-y-4 p-2 max-h-full">
                    <li v-for="(desktopItem, key) in desktopItems" :key="key">
                        <button type="button" @click="softSelectedItem = desktopItem"
                            @dblclick="onItemSelected(desktopItem)"
                            class="py-1 px-2 flex flex-col items-center justify-center space-y-1 hover:bg-gray-50 hover:backdrop-blur hover:bg-opacity-10 rounded-md w-20 hover:cursor-default"
                            :class="{ 'bg-gray-50 bg-opacity-10': selectedItem?.name === desktopItem.name, 'bg-gray-50 bg-opacity-10': softSelectedItem?.name === desktopItem.name }">
                            <component :is="desktopItem.icon" class="w-12" :class="desktopItem.color"></component>
                            <span class="text-xs text-white select-none">{{ desktopItem.name }}</span>
                        </button>
                    </li>
                </ul>
            </OnClickOutside>
        </div>
        <ToolBar />
    </div>
</template>