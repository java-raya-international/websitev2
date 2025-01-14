<template>
  <div>
    <LayoutPreloader v-if="isLoading" />
    <NuxtPage/>
    <LayoutResponsiveNavbar />
    <LayoutLocationOption />
    <LayoutCopyright />
    <LayoutBackToUp />
    <LayoutRTLSwitchBtn />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  setup() {
    const isLoading = ref(true);

    onMounted(() => {
      setTimeout(() => {
        isLoading.value = false;
      }, 500);
    });

    return {
      isLoading,
    };
  },
});
</script>
