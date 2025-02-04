<template>
  <div
      :class="[
      'mobile-navbar offcanvas offcanvas-end border-0',
      { show: stateStoreInstance.show },
    ]"
  >
    <div class="offcanvas-header justify-space-between">
<!--      <NuxtLink to="/" class="logo d-inline-block">-->
<!--        <img src="~/assets/brands/0000015_javaraya-logo-with-words.png" alt="logo" style="max-height: 60px;"/>-->
<!--      </NuxtLink>-->

      <button
          type="button"
          class="close-btn bg-transparent position-relative lh-1 p-0 border-0"
          @click="stateStoreInstance.onChangeShow"
      >
        <i class="ri-close-fill"></i>
      </button>
    </div>

    <div class="offcanvas-body">
      <NuxtLink to="/" class="dropdown-item">Home</NuxtLink>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-title>Products</v-expansion-panel-title>
          <v-expansion-panel-text>
            <ul class="mobile-menu-items" v-for="(product,index) in productsX" :key="index">
              <li class="mobile-menu-list">
                <v-expansion-panels variant="accordion">
                  <v-expansion-panel>
                    <v-expansion-panel-title>
                      {{ product.title }}
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                      <ul class="mobile-menu-items sub-dropdown" v-for="(item,index2) in product.items" :key="index2">
                        <li  v-if="item.visible === 'true'">
                          <NuxtLink
                              class="dropdown-item"
                              :to="item.relativeURL"
                              @click="stateStoreInstance.onChangeShow"  v-if="item.enable==='true'">
                            {{ item.title }}
                          </NuxtLink>

                          <a class="dropdown-item" :to="item.relativeURL" v-if="item.enable!=='true'" disabled="disabled" style="color:red;">
                            {{ item.title }}
                          </a>

                        </li>
                      </ul>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </li>
            </ul>


          </v-expansion-panel-text>
        </v-expansion-panel>


        <v-expansion-panel>
          <v-expansion-panel-title>About</v-expansion-panel-title>
          <v-expansion-panel-text>
            <ul class="mobile-menu-items" v-for="(about,index) in aboutLinkX" :key="index">
              <li class="mobile-menu-list">
                <NuxtLink  class="dropdown-item" :to="about.relativeUrl">{{about.title}}</NuxtLink>
              </li>
            </ul>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>Blog</v-expansion-panel-title>
          <v-expansion-panel-text>
            <ul class="mobile-menu-items">
              <li>
                <NuxtLink
                    class="dropdown-item"
                    to="/blogs"
                    @click="stateStoreInstance.onChangeShow"
                >
                  Our Blog
                </NuxtLink>
              </li>

            </ul>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title class="without-icon">
            <NuxtLink to="/contact" @click="stateStoreInstance.onChangeShow">
              Contact
            </NuxtLink>
          </v-expansion-panel-title>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import stateStore from "~/utils/store";
import productsJson from "~/data/products/products-index.json";
import aboutLinkJson from "~/data/navigation/about-links.json";
// const productsX = ref(productsJson);

export default defineComponent({
  name: "ResponsiveNavbar",
  data: () => ({
    panel: [0],
    productsX: ref(productsJson),
    aboutLinkX: ref(aboutLinkJson),

  }),

  setup() {
    const show = ref(false);
    const stateStoreInstance = stateStore;
    const activeMobileMenu = ref<string | null>(null);

    const toggleMobileMenu = (mobileMenu: string) => {
      activeMobileMenu.value =
          activeMobileMenu.value === mobileMenu ? null : mobileMenu;
    };

    return {
      show,
      stateStoreInstance,
      toggleMobileMenu,
      activeMobileMenu,
    };
  },
});
</script>
