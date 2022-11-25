export const useDesktopStore = defineStore('desktop', () => {

    const items = ref([
        {
            name: 'Documents',
            icon: 'FolderIcon',
            color: 'text-amber-300',
            component: 'FileExplorer',
            removable: true
        },
        {
            name: 'Games',
            icon: 'FolderIcon',
            color: 'text-amber-300',
            component: 'FileExplorer',
            removable: true
        },
        {
            name: 'Pictures',
            icon: 'FolderIcon',
            color: 'text-amber-300',
            component: 'FileExplorer',
            removable: true
        },
        {
            name: 'Apps',
            icon: 'FolderIcon',
            color: 'text-amber-300',
            component: 'FileExplorer',
            removable: true
        },
        {
            name: 'Recycle Bin',
            icon: 'TrashIcon',
            color: 'text-gray-100',
            component: 'FileExplorer',
            removable: false
        },
        {
            name: 'Spotify Installer',
            icon: 'Spotify',
            customIcon: true,
            color: 'text-gray-100',
            component: 'InstallerSpotify',
            removable: true,
            executable: true
        },
        {
            name: 'README',
            icon: 'DocumentIcon',
            color: 'text-gray-100',
            component: 'TextReader',
            removable: false,
            txtfile: true
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

