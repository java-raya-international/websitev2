<template>
  <div class="middle-header-area ptb-20">
    <div class="container">
      <div class="d-lg-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center middle-header-left justify-content-center justify-content-lg-end">
          <!--          <NuxtLink to="/" class="d-none d-lg-block middle-logo">-->
          <NuxtLink to="/" class="d-lg-block middle-logo">
            <img src="~/assets/brands/0000015_javaraya-logo-with-words.png" alt="logo" style="max-height: 60px;"/>
          </NuxtLink>
          <!--          <section id="searchbox">-->
          <!--            <div class="d-flex">-->
          <!--              <div class="dropdown">-->
          <!--                <button-->
          <!--                    class="dropdown-toggle border border-2 bg-transparent all-categories"-->
          <!--                    @click="toggleAllCategories"-->
          <!--                    :aria-pressed="show ? 'true' : 'false'"-->
          <!--                    :class="{ show: buttonShowState }"-->
          <!--                >-->
          <!--                  All Categories-->
          <!--                </button>-->
          <!--              </div>-->
          <!--              <div class="position-relative">-->
          <!--                <input-->
          <!--                    type="text"-->
          <!--                    class="form-control border-2"-->
          <!--                    placeholder="Search for products..."-->
          <!--                />-->
          <!--                <button-->
          <!--                    type="submit"-->
          <!--                    class="position-absolute top-50 end-0 translate-middle-y btn btn-primary fs-14 fw-medium text-white"-->
          <!--                >-->
          <!--                  <i class="ri-search-line"></i>-->
          <!--                  <span class="d-none d-sm-inline-block">Search</span>-->
          <!--                </button>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </section>-->

        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "MiddleHeader",
  setup() {
    const show = ref(false);
    const buttonShowState = ref(false);
    const active = ref(false);
    const buttonActiveState = ref(false);

    const toggleAllCategories = () => {
      show.value = !show.value;
      buttonShowState.value = !buttonShowState.value;
    };
    const toggleBuyInfo = () => {
      active.value = !active.value;
      buttonActiveState.value = !buttonActiveState.value;
    };

    return {
      show,
      buttonShowState,
      active,
      buttonActiveState,
      toggleAllCategories,
      toggleBuyInfo,
    };
  },
});
</script>
