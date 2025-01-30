<template>
  <div class="copyright-area bg-white">
    <div class="container">
      <v-row class="align-items-center">
        <v-col cols="12" lg="6" md="6">
          <p class="mb-2 mb-md-0 text-center text-md-start">
            © <span>Javaraya International, LTD.</span> All Rights Reserved by Javaraya International, LTD.

          </p>
          <p class="mb-2 mb-md-0 text-center text-md-start">
            Powered by: NUXT-3, DOtnetCore-9, NodeJS-22.X
          </p>
          <p>Develop by: <a href="https://bokongsemok.co.uk" target="_blank">Boksem Tech</a></p>
        </v-col>
        <v-col cols="12" lg="6" md="6">
          <div class="text-center text-md-end">
            <img src="~/assets/brands/mastercard-logo.svg" alt="mastercard logo"/>
            <img src="~/assets/brands/visa-logo.png" alt="visa logo"/>
            <img src="~/assets/brands/amex-logo.png" alt="amex logo" style="height: 48px;"/>
            <img src="~/assets/brands/bitcoin-logo.svg" alt="bitcoin logo" style="height: 48px;"/>
            <img src="~/assets/brands/ethereum-logo.svg" alt="ethereum logo" style="height: 48px;"/>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Copyright",
};
</script>
