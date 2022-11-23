<script setup>
import { ArrowTopRightOnSquareIcon, Squares2X2Icon, ArrowsUpDownIcon, ArrowPathIcon, PlusCircleIcon } from '@heroicons/vue/24/outline';
import { vOnClickOutside } from '@vueuse/components'

const helper = useHelper();
const isFullScreen = ref(false);
const ctxMenu = reactive(
  {
    isActive: false,
    x: 0,
    y: 0
  }
)

const fullscreenHandler = () => {
  isFullScreen.value = !isFullScreen.value;
}

const onContextMenu = (event) => {
  event.preventDefault();
  ctxMenu.isActive = true;
  ctxMenu.x = event.clientX + 'px';
  ctxMenu.y = event.clientY + 'px';
}

const closeCtxMenu = () => {
  ctxMenu.isActive = false
}

onMounted(() => {
  document.addEventListener('fullscreenchange', fullscreenHandler);
})
</script>

<template>
  <main class="relative overflow-hidden" @contextmenu="onContextMenu">
    <transition enter-active-class="transition duration-200" enter-from-class="opacity-0" enter-to-class="opacity-100">
      <div v-if="ctxMenu.isActive" class="bg-gray-800 bg-opacity-80 backdrop-blur absolute rounded-md w-60 z-50"
        :style="{ top: ctxMenu.y, left: ctxMenu.x }">
        <ul v-on-click-outside="closeCtxMenu" class="text-sm text-gray-300 p-2">
          <li class="px-2 select-none py-2 hover:bg-white hover:bg-opacity-5 rounded flex space-x-2.5 items-center">
            <Squares2X2Icon class="w-4" />
            <span>View</span>
          </li>
          <li class="px-2 select-none py-2 hover:bg-white hover:bg-opacity-5 rounded flex space-x-2.5 items-center">
            <ArrowsUpDownIcon class="w-4 text-sky-500" />
            <span>Sort by</span>
          </li>
          <li class="px-2 select-none py-2 hover:bg-white hover:bg-opacity-5 rounded flex space-x-2.5 items-center">
            <ArrowPathIcon class="w-4" />
            <span>Refresh</span>
          </li>
          <li class="px-2 select-none py-2 hover:bg-white hover:bg-opacity-5 rounded flex space-x-2.5 items-center">
            <PlusCircleIcon class="w-4 text-sky-500" />
            <span>New</span>
          </li>
          <li class="px-2 select-none py-2 hover:bg-white hover:bg-opacity-5 rounded flex space-x-2.5 items-center">
            <ArrowTopRightOnSquareIcon class="w-4" />
            <span>Show more options</span>
          </li>
        </ul>
      </div>
    </transition>
    <div class="absolute right-4 top-4 z-40 hidden lg:block">
      <button type="button" @click="helper.openFullScreen" class="text-gray-500 hover:text-white" v-if="!isFullScreen">
        <ArrowTopRightOnSquareIcon class="w-6" />
      </button>
    </div>
    <NuxtPage />
  </main>
</template>
