export const useDesktopStore = defineStore('desktop', () => {

    const items = ref([
        {
            name: 'Documents',
            icon: 'FolderIcon',
            color: 'text-amber-300',
            removable: true
        },
        {
            name: 'Games',
            icon: 'FolderIcon',
            color: 'text-amber-300',
            removable: true
        },
        {
            name: 'Pictures',
            icon: 'FolderIcon',
            color: 'text-amber-300',
            removable: true
        },
        {
            name: 'Apps',
            icon: 'FolderIcon',
            color: 'text-amber-300',
            removable: true
        },
        {
            name: 'Recycle Bin',
            icon: 'TrashIcon',
            color: 'text-gray-100',
            removable: false
        },
        {
            name: 'Spotify Installer',
            icon: 'Spotify',
            customIcon: true,
            color: 'text-gray-100',
            removable: true,
            executable: true
        }
    ]);

    const removeItem = (name) => {
        items.value = items.value.filter(item => item.name !== name);
    }

    const addItem = (desktopItem) => {
        if(items.value.find(item => item.name === desktopItem.name)) {
            desktopItem.name = `${desktopItem.name} #${items.value.filter(item => item.name.includes('New Folder')).length + 1}` 
        }
        items.value.push(desktopItem);
    }

    return { items, removeItem, addItem }
})

