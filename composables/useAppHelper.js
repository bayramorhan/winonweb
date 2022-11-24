const useAppHelper = () => {
    const ctxMenu = reactive(
        {
          isActive: false,
          x: 0,
          y: 0,
          submenu: false
        }
      )
   
      const isFullScreen = ref(false);

      const fullscreenHandler = () => {
        isFullScreen.value = !isFullScreen.value;
      }
      
      const onContextMenu = (event) => {
        event.preventDefault();
        ctxMenu.submenu = false;
        ctxMenu.isActive = true;
        ctxMenu.x = event.clientX + 'px';
        ctxMenu.y = event.clientY + 'px';
      }

      return { ctxMenu, isFullScreen, onContextMenu, fullscreenHandler }
      
}

export default useAppHelper