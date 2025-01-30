<template>
  <div class="banner-area bg-gray2 ptb-70">
    <div class="container">
      <div class="banner-wrap2 bg-gray2 position-relative">
        <Swiper
          :slidesPerView="1"
          :spaceBetween="0"
          :centeredSlides="false"
          :preventClicks="true"
          :loop="true"
          :effect="'fade'"
          :fadeEffect="{
            crossFade: true,
          }"
          :speed="2000"
          :autoplay="{
            delay: 8000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }"
          :navigation="{
            nextEl: '.next2',
            prevEl: '.prev2',
          }"
          :pagination="{
            el: '.swiper-pagination-banner-grocery',
            clickable: true,
          }"
          :modules="[SwiperEffectFade, SwiperNavigation, SwiperPagination]"
          class="banner-slide2"
        >
          <SwiperSlide v-for="banner in banners" :key="banner.id">
            <v-row class="align-items-center">
              <v-col cols="12" lg="6" md="6">
                <div class="banner-content">
                  <span class="top-title bg-white px-3 mb-2">
                    <i class="flaticon-flash-sale"></i>
                    {{ banner.subTitle }}
                  </span>
                  <h2>{{ banner.heading }}</h2>
                  <p class="mb-6">
                    {{ banner.shortDesc }}
                  </p>
<!--                  <NuxtLink-->
<!--                    :to="banner.btnLink"-->
<!--                    class="btn btn-success rounded-pill text-white"-->
<!--                  >-->
<!--                    <span>{{ banner.btnText }}</span>-->
<!--                    <i class="ri-arrow-right-up-line ms-1 fs-15"></i>-->
<!--                  </NuxtLink>-->
                </div>
              </v-col>
              <v-col cols="12" lg="6" md="6">
                <div class="banner-img-three text-center position-relative">
                  <img :src="banner.image" alt="banner-img" />
                </div>
              </v-col>
            </v-row>
          </SwiperSlide>
        </Swiper>

        <div class="banner-controller2 d-none d-md-block">
          <div class="d-flex justify-content-between align-items-center">
            <div class="controller-icon prev2">
              <i class="flaticon-chevron"></i>
            </div>
            <div class="controller-icon next2">
              <i class="flaticon-chevron"></i>
            </div>
          </div>
        </div>
        <div class="swiper-pagination-banner-grocery"></div>

        <img
          src="~/assets/images/shape-1.png"
          class="shape position-absolute top-0 end-0"
          alt="shape"
        />
        <img
          src="~/assets/images/shape-2.png"
          class="shape position-absolute bottom-0 start-0"
          alt="shape"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/brands/javaraya-b2b-ecommerce.webp";
import image2 from "~/assets/brands/javaraya-b2b-ecommerce-2.webp";

export default defineComponent({
  name: "Banner",
  data() {
    return {
      banners: [
        {
          id: 1,
          image: image1,
          subTitle: "Connecting European Businesses",
          heading: "Your Gateway to Authentic Indonesian Products",
          shortDesc: "Experience the richness of Indonesia with our curated selection of high-quality B2B products.",
          btnText: "Shop Now",
          btnLink: "/",
        },
        {
          id: 2,
          image: image2,
          subTitle: "Unlocking Indonesian Treasures ",
          heading: "Your Gateway to Global Trade",
          shortDesc: "Experience the richness of Indonesia with our curated selection of high-quality B2B products.",
          btnText: "Shop Now",
          btnLink: "/",
        },

      ],
    };
  },
});
</script>
