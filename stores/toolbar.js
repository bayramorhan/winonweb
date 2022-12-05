export const useToolbarStore = defineStore('toolbar', () => {
    const toolbarItems = ref([
        {
            name: 'Mail',
            icon: 'EnvelopeOpenIcon',
            color: 'text-gray-100',
            component: 'MailApp'
        }
    ]);

    const addToolbarItem = (item) => {
        toolbarItems.value.push(item);
    }

    return { toolbarItems, addToolbarItem }
})