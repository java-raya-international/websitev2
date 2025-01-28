import {defineStore} from 'pinia'

export const useGlobalCompanyAssets = defineStore('globalCompanyAssetStore', {
    state: () => ({
        allCompanyAssetStore: import.meta.glob("@/assets/products/**/**/*.{svg,png,jpg}", {eager: true, import: "default"}),
        allCompanyAssetStoreLoaded: true,
        // ... other global variables
    }),
    actions: {
        setCompanyAssetStore(allCompanyAssetStore) {
            this.allCompanyAssetStore = allCompanyAssetStore;
        },
        setCompanyAssetStoreLoaded(allCompanyAssetStoreLoaded) {
            this.allCompanyAssetStoreLoaded = allCompanyAssetStoreLoaded;
        },
        // ... other actions to modify global state
    },
})