<template>
  <div
      :class="['navbar navbar-expand-lg bg-white ptb-6', { sticky: isSticky }]"
  >
    <div class="container mw-1610">
      <NuxtLink class="navbar-brand d-lg-none" to="/">
<!--        <img-->
<!--            src="~/assets/brands/0000015_javaraya-logo-with-words.png"-->
<!--            class="main-logo"-->
<!--            alt="white-logo"-->
<!--        />-->
      </NuxtLink>
      <a
          class="navbar-toggler"
          href="javascript:void(0);"
          @click="stateStoreInstance.onChangeShow"
      >
        <span class="burger-menu">
          <span class="top-bar"></span>
          <span class="middle-bar"></span>
          <span class="bottom-bar"></span>
        </span>
      </a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
          <li class="nav-item dropdown">
            <a class="nav-link" href="/"> Home </a>
          </li>

          <li class="nav-item mega-menu">
            <a class="nav-link dropdown-toggle" href="#"> Products </a>

            <ul class="dropdown-menu">
              <li class="nav-item">
                <div class="row">
                  <div class="col" v-for="(product,index) in productsJson" :key="index">
                    <h6 class="sub-menu-title">{{ product.title }}</h6>

                    <ul class="sub-menu" v-for="(item, index2) in product.items" :key="index2">
                      <li>
                        <NuxtLink class="dropdown-item" :to="item.relativeURL">
                          {{ item.title }}
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>


                </div>
              </li>
            </ul>


          </li>

          <li class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle"> About </a>

            <ul class="dropdown-menu" >
              <li v-for="(link,index) in aboutLinksJson" :key="index">
                <NuxtLink class="dropdown-item" :to="link.relativeUrl">
                  {{link.title}}
                </NuxtLink>
              </li>
<!--              <li>-->
<!--                <NuxtLink class="dropdown-item" to="/about/company"> Company</NuxtLink>-->
<!--              </li>-->
<!--              <li>-->
<!--                <NuxtLink class="dropdown-item" to="/about/leadership"> Leadership</NuxtLink>-->
<!--              </li>-->
<!--              <li>-->
<!--                <NuxtLink class="dropdown-item" to="/about/privacy">-->
<!--                  Privacy Policy-->
<!--                </NuxtLink>-->
<!--              </li>-->
<!--              <li>-->
<!--                <NuxtLink class="dropdown-item" to="/about/toc">-->
<!--                  Terms & Conditions-->
<!--                </NuxtLink>-->
<!--              </li>-->
<!--              <li>-->
<!--                <NuxtLink class="dropdown-item" to="/about/refund">-->
<!--                  Refund Policy-->
<!--                </NuxtLink>-->
<!--              </li>-->
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#"> Blogs </a>

            <ul class="dropdown-menu">
              <li>
                <NuxtLink class="dropdown-item" to="/our-blog">
                  Our Blog
                </NuxtLink>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <NuxtLink class="nav-link" to="/contact"> Contact</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, onMounted} from "vue";
import stateStore from "~/utils/store";

import productsJson from "~/data/products/products-index.json";
import aboutLinksJson from "~/data/navigation/about-links.json";

import image from "~/assets/images/menu-product.jpg";

export default defineComponent({
  name: "NavbarDesktop",
  data() {
    return {
      productsJson,
      aboutLinksJson
    }
  },
  async setup() {
    const isSticky = ref(false);
    const show = ref(false);
    const stateStoreInstance = stateStore;

    const toggleCategories = () => {
      show.value = !show.value;
    };

    const handleScroll = () => {
      const scrollPos = window.scrollY;
      isSticky.value = scrollPos >= 100;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    return {
      isSticky,
      toggleCategories,
      stateStoreInstance,
      image,
    };
  },
});
</script>
