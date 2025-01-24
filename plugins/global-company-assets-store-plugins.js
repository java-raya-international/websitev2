import {createPinia} from 'pinia'
import {useGlobalCompanyAssets} from '@/store/global-company-assets-store.js'

export default defineNuxtPlugin((nuxtApp) => {
    const pinia = createPinia()
    nuxtApp.vueApp.use(pinia)

    const globalCompanyAssetStore = useGlobalCompanyAssets()
    nuxtApp.vueApp.provide('globalCompanyAssetStore', globalCompanyAssetStore)
});