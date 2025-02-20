<script setup lang="ts">
import {defineComponent, ref, watch} from "vue";
import derivativeCoconutJson from "~/data/products/materials/product-oil-coconut-derivative.json";

const tab = ref(null);
const derivativeProducts = ref(derivativeCoconutJson);
const globalCompanyAsset: any = inject("globalCompanyAssetStore");


function getCompanyAssetStore(fileName: string) {
  try {
    const modules = globalCompanyAsset.allCompanyAssetStore;

    const moduleKeys = Object.keys(modules);
    const fileSrc = moduleKeys.find(key => key.endsWith(fileName));
    const srcResult = fileSrc ? modules[fileSrc] : '';

    return srcResult;
  } catch (err) {
    console.log("Errornya :" + err)
  }
}
</script>

<template>
  <div class="products-area products-page ptb-60">
    <div class="container">
      <v-container>
        <v-row>
          <v-col cols="12" md="4" v-for="(product, index) in derivativeProducts" :key="index">
            <v-card class="mx-auto" max-width="320">
              <div class="pa-4">
                <v-img :src="getCompanyAssetStore(product.images[0].URL)" max-height="200" :alt="product.name"
                       aspect-ratio="1"/>
              </div>


              <v-card-title>{{ product.name }}</v-card-title>
              <v-card-text class="bg-surface-light">
                <div class="pa-4">
                  {{ product.description }}
                </div>

              </v-card-text>

              <v-card-actions class="bg-surface-light">
                <v-btn :to="`/products/materials/details/oil-coco-derivative-${product.id}`" color="primary" class="right">
                  Learn More
                </v-btn>
                <!--                <v-btn :to="`/products/foods/buy/rice-${product.id}`" color="primary" class="right">-->
                <!--                  Buy-->
                <!--                </v-btn>-->
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>


    </div>
  </div>
</template>

<style scoped lang="scss">

</style>