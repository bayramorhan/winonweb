const useToolbar = () => {
    const isOpen = ref(false);
const onSearchFocused = (event) => {
    event.target.placeholder = 'Search work and your PC';
}
const clickOutside = () => {
    isOpen.value = false
}
const keyupHandler = (event) => {
    if (event.keyCode === 27) {
        isOpen.value = false;
    }
}

return { isOpen, onSearchFocused, clickOutside, keyupHandler }  
}

export default useToolbar