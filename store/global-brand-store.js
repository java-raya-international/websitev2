import {defineStore} from 'pinia'

export const useGlobalBrandAssets = defineStore('globalBrandAssetStore', {
    state: () => ({
        allBrandAssetStore: import.meta.glob("@/assets/brands/*.{svg,png,jpg,webp}",{eager: true, import: "default"}),
        allBrandAssetStoreLoaded: true,
        // ... other global variables
    }),
    actions: {
        setBrandAssetStore(allBrandAssetStore) {
            this.allBrandAssetStore = allBrandAssetStore;
        },
        setBrandAssetStoreLoaded(allBrandAssetStoreLoaded) {
            this.allBrandAssetStoreLoaded = allBrandAssetStoreLoaded;
        },
        // ... other actions to modify global state
    },
})