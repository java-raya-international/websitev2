<script setup lang="ts">

import {defineComponent, ref, watch} from "vue";
import leadershipJson from "~/data/leadership.json";

const leadershipJsonData = ref(leadershipJson);

function getBrandAssetStore(fileName: string) {
  try {
    const globalBrandAssetStore: any = inject("globalBrandAssetStore");
    const modules = globalBrandAssetStore.allBrandAssetStore;

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
  <div>
    <div class="container">
      <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
        <h2 class="font-bold text-3xl text-gray-800">Leadership Team</h2>

        <v-container>

          <v-row class="ma-2" dense>
            <v-col v-for="(item, i) in leadershipJsonData" :key="i" class="pa-3 d-flex flex-column" cols="12" md="5">
              <v-card class="elevation-5 flex d-flex flex-column fill-height" max-width="450px">
                <img :alt="item.name" :src="getBrandAssetStore(item.photo)" style="max-height: 500px; "/>

                <v-card-item>
                  <v-card-title>{{ item.name }}</v-card-title>

                  <v-card-subtitle>
                    <span class="me-1">{{ item.title }}</span>

                  </v-card-subtitle>
                </v-card-item>

                <v-divider class="mx-4 mb-1"></v-divider>

                <v-card-text class="flex ma-2">
                  <div class="justify-stretch">
                    {{ item.description }}
                  </div>
                </v-card-text>

                <v-divider class="mx-4 mb-1"></v-divider>

                <v-card-title>Social Media</v-card-title>

                <div class="px-4 mb-2">
                  <a :href="item.linkedin" target="_blank">
                    <font-awesome-icon icon="fa-brands fa-linkedin"/>
                    Linkedin
                  </a>

                </div>


              </v-card>


            </v-col>

          </v-row>
        </v-container>

      </div>


    </div>
  </div>
</template>

<style scoped lang="scss">

</style>