<script setup lang="ts">

import {onMounted} from "vue";

onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
  script.async = true;
  document.body.appendChild(script);

  window.jotformEmbedHandler("iframe[id='JotFormIFrame-250418762765161']", "https://form.jotform.com/")

});


</script>

<template>

  <iframe
      id="JotFormIFrame-250418762765161"
      title="Javaraya general contact form"
      onload="window.parent.scrollTo(0,0)"
      allowtransparency="true"
      allow="geolocation; microphone; camera; fullscreen"
      src="https://form.jotform.com/250418762765161"
      frameborder="0"
      style="min-width:100%;max-width:100%;height:700px;border:none;"
      scrolling="no"
  >
  </iframe>

</template>

<style scoped lang="scss">

</style>