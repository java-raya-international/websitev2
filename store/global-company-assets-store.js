import {defineStore} from 'pinia'

export const useGlobalCompanyAssets = defineStore('globalCompanyAssetStore', {
    state: () => ({
        allCompanyAssetStore: import.meta.glob("@/assets/products/**/**/*.{svg,png,jpg}", {eager: true, import: "default"}),
        allCompanyAssetStoreLoaded: true,
        // ... other global variables
    }),
    actions: {
        setUser(allCompanyAssetStore) {
            this.allCompanyAssetStore = allCompanyAssetStore;
        },
        setTheme(allCompanyAssetStoreLoaded) {
            this.allCompanyAssetStoreLoaded = allCompanyAssetStoreLoaded;
        },
        // ... other actions to modify global state
    },
})