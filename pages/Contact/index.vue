<script setup>

definePageMeta({
  requiresTurnstile: true // Enable Turnstile for this page (or leave it out for the default true)
});



</script>

<template>
  <div>
    <LayoutMiddleHeader/>
    <LayoutNavbarDesktop/>
    <ContactFormJotForm />

    <LayoutFooter/>
  </div>
</template>

<style scoped lang="scss">

</style>