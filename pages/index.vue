<script setup>

import { OnClickOutside } from '@vueuse/components'
import { useDesktopStore } from '~~/stores/desktop';
import * as HeroIcons from '@heroicons/vue/24/solid';
import SpotifyIcon from '../components/icons/Spotify.vue'
import FileExplorer from '~~/components/FileExplorer.vue';
import TextReader from '~~/components/TextReader.vue';
import InstalerSpotify from '~~/components/installer/Spotify.vue';

const customIcons = [
    {
        name: 'Spotify',
        icon: SpotifyIcon
    }
]
const components = [
    {
        name: 'FileExplorer',
        component: FileExplorer
    },
    {
        name: 'TextReader',
        component: TextReader
    },
    {
        name: 'InstallerSpotify',
        component: InstalerSpotify
    }
]
const desktop = useDesktopStore();
const selectedItem = ref();
const softSelectedItem = ref();
const onItemSelected = (item) => {
    selectedItem.value = item;
}

const keyupHandler = (event) => {
    if (event.keyCode === 46 && softSelectedItem.value) {
        if (softSelectedItem.value.removable) {
            let itemToDelete = softSelectedItem.value.name;
            selectedItem.value = '';
            softSelectedItem.value = '';
            desktop.removeItem(itemToDelete);
        } else {
            alert('You cannot delete this')
        }
    }
}

onMounted(() => {
    document.addEventListener("keyup", keyupHandler);
})
</script>

<template>
    <div class="flex flex-col h-screen overflow-hidden">

        <Transition enter-active-class="transition duration-200" enter-from-class="opacity-0"
            enter-to-class="opacity-100" leave-active-class="transition duration-200"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0">
            <component :is="components.find(component => component.name === selectedItem.component).component"
                v-if="selectedItem" s @close="selectedItem = ''" :folder="selectedItem"
                @setup-complete="selectedItem = ''" />
        </Transition>
        <div class="flex flex-col relative flex-1">
            <OnClickOutside @trigger="softSelectedItem = ''">
                <ul
                    class="inline-flex md:flex-col flex-wrap items-start justify-between md:justify-start list-none gap-y-4 gap-x-2 p-2 max-h-custom">
                    <li v-for="(desktopItem, key) in desktop.items" :key="key">
                        <button type="button" @click="softSelectedItem = desktopItem"
                            @dblclick="onItemSelected(desktopItem)"
                            class="py-1 px-2 flex flex-col items-center justify-center space-y-1 hover:bg-gray-50 hover:backdrop-blur hover:bg-opacity-10 rounded-md w-20 hover:cursor-default focus:ring-0 focus:outline-none"
                            :class="{ 'bg-gray-50 bg-opacity-10': selectedItem?.name === desktopItem.name, 'bg-gray-50 bg-opacity-10': softSelectedItem?.name === desktopItem.name }">
                            <client-only>
                                <component
                                    :is="!desktopItem.customIcon ? HeroIcons[desktopItem.icon] : customIcons.find(customIcon => customIcon.name === desktopItem.icon).icon"
                                    class="w-12" :class="desktopItem.color"></component>
                            </client-only>
                            <span class="text-xs text-white select-none">{{ desktopItem.name }}</span>
                        </button>
                    </li>
                </ul>
            </OnClickOutside>
        </div>
        <ToolBar />
    </div>
</template>

<style>
.max-h-custom {
    max-height: calc(100vh - 100px);
}
</style>