<script setup>
import { vOnClickOutside } from '@vueuse/components'
import { ArrowTopRightOnSquareIcon, Squares2X2Icon, ArrowsUpDownIcon, ArrowPathIcon, PlusCircleIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';
import { FolderIcon, DocumentIcon } from '@heroicons/vue/24/solid'
import { useDesktopStore } from '~~/stores/desktop';

const ctxMenu = inject('ctx-menu')
const desktop = useDesktopStore();

const closeCtxMenu = () => {
  ctxMenu.isActive = false
  ctxMenu.submenu = false;
}

const reload = () => {
  ctxMenu.isActive = false
  location.reload();
}

const newFolder = () => {
  desktop.addItem({
    name: 'New Folder',
    icon: 'FolderIcon',
    color: 'text-amber-300',
    removable: true
  })

  closeCtxMenu();
}

</script>

<template>
    <transition enter-active-class="transition duration-200" enter-from-class="opacity-0" enter-to-class="opacity-100">
        <div v-if="ctxMenu.isActive" class="bg-gray-800 absolute rounded-md w-60 z-[100]"
        :style="{ top: ctxMenu.y, left: ctxMenu.x }">
        <ul v-on-click-outside="closeCtxMenu" class="text-sm text-gray-300">
          <li class="select-none px-2.5 py-2.5 hover:bg-white hover:bg-opacity-5 rounded flex space-x-2.5 items-center">
            <Squares2X2Icon class="w-4" />
            <span>View</span>
          </li>
          <li class="select-none px-2.5 py-2.5 hover:bg-white hover:bg-opacity-5 rounded flex space-x-2.5 items-center">
            <ArrowsUpDownIcon class="w-4 text-sky-500" />
            <span>Sort by</span>
          </li>
          <li class="select-none px-2.5 py-2.5 hover:bg-white hover:bg-opacity-5 rounded flex space-x-2.5 items-center"
            @click="reload">
            <ArrowPathIcon class="w-4" />
            <span>Refresh</span>
          </li>
          <li class="select-none px-2.5 py-2.5 hover:bg-white hover:bg-opacity-5  flex justify-between items-center border-t border-b border-gray-700 relative" @click="ctxMenu.submenu = !ctxMenu.submenu">
            <div class="flex items-center space-x-2.5">
              <PlusCircleIcon class="w-4 text-sky-500" />
            <span>New</span>
            </div>
            <ChevronRightIcon class="w-4" />

            <transition enter-active-class="transition duration-200" enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0">
              <div class="absolute top-0 left-full bg-gray-800 rounded shadow-lg -ml-2 border border-gray-900 w-56" v-if="ctxMenu.submenu">
              <ul class="p-1">
                <li class="flex items-center space-x-2.5 hover:bg-gray-700 py-2 px-4 rounded" @click="newFolder">
                  <FolderIcon class="w-5 text-amber-400" />
                  <span>Folder</span>
                </li>
                <li class="flex items-center space-x-2.5 hover:bg-gray-700 py-2 px-4 rounded">
                  <DocumentIcon class="w-5 text-gray-200" />
                  <span>Text Document</span>
                </li>
              </ul>
            </div>
            </transition>
          </li>
          <li class="select-none px-2.5 py-2.5 hover:bg-white hover:bg-opacity-5 rounded flex space-x-2.5 items-center">
            <ArrowTopRightOnSquareIcon class="w-4" />
            <span>Show more options</span>
          </li>
        </ul>
      </div>
    </transition>
    
</template>