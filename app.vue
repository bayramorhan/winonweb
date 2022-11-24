<script setup>
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline';

const { ctxMenu, onContextMenu, isFullScreen, fullscreenHandler } = useAppHelper();
provide('ctx-menu', ctxMenu)

const helper = useHelper();

onMounted(() => {
  document.addEventListener('fullscreenchange', fullscreenHandler);
})
</script>

<template>
  <main class="relative overflow-hidden" @contextmenu="onContextMenu">
    <ContextMenu />
    <div class="absolute right-4 top-4 z-40 hidden lg:block">
      <button type="button" @click="helper.openFullScreen" class="text-gray-500 hover:text-white" v-if="!isFullScreen">
        <ArrowTopRightOnSquareIcon class="w-6" />
      </button>
    </div>
    <NuxtPage />
  </main>
</template>
