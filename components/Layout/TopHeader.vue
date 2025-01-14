<template>
  <div class="top-header-area border-bottom ptb-12">
    <div class="container">
      <v-row>
        <v-col cols="12" lg="6" md="5">
          <ul
            class="ps-0 mb-0 list-unstyled info-link d-flex align-items-center justify-content-center justify-content-md-start position-relative tops-1"
          >
            <li>
              <NuxtLink to="/about/us">About Us</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/customers/faq">FAQs</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact">Help & Contact</NuxtLink>
            </li>
          </ul>
        </v-col>
<!--        <v-col cols="12" lg="6" md="7">-->
<!--          <ul-->
<!--            class="ps-0 mb-0 list-unstyled info-link info-right d-flex align-items-center justify-content-center justify-content-md-end mt-2 mt-md-0"-->
<!--          >-->
<!--            <li>-->
<!--              <NuxtLink-->
<!--                to="/products"-->
<!--                class="text-danger d-flex align-items-center position-relative tops-1"-->
<!--              >-->
<!--                <i class="flaticon-flash-sale"></i>-->
<!--                <span>Flash sale 20% off</span>-->
<!--              </NuxtLink>-->
<!--            </li>-->
<!--            <li>-->
<!--              <div class="dropdown flag-wrap">-->
<!--                <button-->
<!--                  class="dropdown-toggle fw-medium fs-14 p-0 border-0 bg-transparent flag"-->
<!--                  @click="toggleDropdown"-->
<!--                  :aria-pressed="show ? 'true' : 'false'"-->
<!--                  :class="{ show: buttonShowState }"-->
<!--                >-->
<!--                  <img :src="currentImage" :alt="currentName" />-->
<!--                  <span>{{ currentName }}</span>-->
<!--                </button>-->
<!--                <ul class="dropdown-menu" :class="{ toggler: show }">-->
<!--                  <li>-->
<!--                    <div v-if="languages.length > 0">-->
<!--                      <a-->
<!--                        class="dropdown-item d-flex align-items-center"-->
<!--                        href="#"-->
<!--                        v-for="(language, index) in languages"-->
<!--                        :key="language.id"-->
<!--                        @click.prevent="toggleSelected(language, index)"-->
<!--                      >-->
<!--                        <img :src="language.image" :alt="language.name" />-->
<!--                        <span class="ms-2">{{ language.name }}</span>-->
<!--                      </a>-->
<!--                    </div>-->
<!--                  </li>-->
<!--                </ul>-->
<!--              </div>-->
<!--            </li>-->
<!--            <li>-->
<!--              <select-->
<!--                class="form-select p-0 border-0 currency fw-medium fs-14 text-secondary"-->
<!--                aria-label="Default select example"-->
<!--              >-->
<!--                <option selected>USD $</option>-->
<!--                <option value="1">EUR £</option>-->
<!--                <option value="2">YEN ¥</option>-->
<!--              </select>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </v-col>-->
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import image1 from "~/assets/images/united-states.png";
import image2 from "~/assets/images/china.png";
import image3 from "~/assets/images/arabi.png";

interface LanguageOption {
  id: string;
  image: string;
  name: string;
}

export default defineComponent({
  name: "TopHeader",
  setup() {
    const show = ref(false);
    const buttonShowState = ref(false);
    const languages = ref<LanguageOption[]>([
      { id: "1", image: image1, name: "English" },
      { id: "2", image: image2, name: "China" },
      { id: "3", image: image3, name: "Arabic" },
    ]);
    const currentName = ref("English");
    const currentImage = ref(image1);
    const clicked = ref<number | null>(null);

    const toggleDropdown = () => {
      show.value = !show.value;
      buttonShowState.value = !buttonShowState.value;
    };

    const toggleSelected = (language: LanguageOption, index: number) => {
      clicked.value = clicked.value === index ? null : index;
      currentName.value = language.name;
      currentImage.value = language.image;
      show.value = false;
      buttonShowState.value = false;
    };

    return {
      show,
      buttonShowState,
      languages,
      currentName,
      currentImage,
      clicked,
      toggleDropdown,
      toggleSelected,
    };
  },
});
</script>
