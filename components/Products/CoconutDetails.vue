<script setup>
import {defineComponent, ref, watch, reactive, computed, onMounted} from "vue";
import productCoconutJson from "~/data/products/foods/product-coconut.json";


const productCoconut = ref(productCoconutJson);
const filteredProduct = ref(null);
const tab = ref(null);
const selectedPricingToggleButton = ref(null);

const visibleGoods = computed(() => {
  return filteredProduct.value?.availableGoods?.filter(good => good.visible === "true") || [];
});

const filterById = () => {
  const route = useRoute()
  filteredProduct.value = productCoconut.value.find(product => product.id === route.params.id);
  if (!filteredProduct.value) {
    console.log("Product not found!"); // Handle the case where the product isn't found.
  }
};

onMounted(() => {
  filterById();
});

function getCompanyAssetStore(fileName) {
  try {
    const globalCompanyAsset = inject("globalCompanyAssetStore");
    const modules = globalCompanyAsset.allCompanyAssetStore;

    const moduleKeys = Object.keys(modules);
    const fileSrc = moduleKeys.find(key => key.endsWith(fileName));
    const srcResult = fileSrc ? modules[fileSrc] : '';

    return srcResult;
  } catch (err) {
    console.log("Errornya :" + err)
  }
}

const navigateTo = (path) => {
  window.open(path, "_blank");
};


</script>

<template>


  <div class="product-details-area products-page pt-30 pb-60">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="tab-content position-relative">
            <div class="tab-pane product-details-img fade show active">
              <img :src="getCompanyAssetStore(filteredProduct?.images[0].URL)" :alt="filteredProduct?.name"/>
            </div>
            <!--            <span class="discounts">-10%</span>-->
          </div>
        </div>
        <div class="col-lg-6">
          <div class="product-details-content">
              <span class="stock">
                <i class="ri-check-line"></i>
                In Stock
              </span>
            <h3>{{ filteredProduct?.name }}</h3>
            <div class="d-flex gap-1 review">
              <i class="flaticon-star"></i>
              <i class="flaticon-star"></i>
              <i class="flaticon-star"></i>
              <i class="flaticon-star"></i>
              <i class="flaticon-star"></i>
              <!--                <span>(5 Reviews)</span>-->
            </div>
            <h2 class="price">Price and Buy</h2>
            <div v-if="filteredProduct?.availableGoods?.length >0">
              <v-container fluid>

                <v-row>
                  <v-col cols="12">
                    <v-btn-toggle v-model="selectedPricingToggleButton" divided
                                  v-for="good in visibleGoods"
                                  :key="good.id"
                                  class="d-flex" density="compact">
                      <v-btn


                          @click="navigateTo(good.paymentStripeURL)"

                      >
                        <v-icon>mdi-credit-card-outline</v-icon>
                        <span>{{ good.name }} - {{ good.totalPrice }} {{ good.totalPriceUnit }}</span>
                      </v-btn>


                    </v-btn-toggle>
                  </v-col>
                </v-row>
              </v-container>

              <h2 class="price">Specific Buy</h2>
              <div>Do you have specific request for our product.

                <v-btn target="_blank" href="https://calendly.com/nicko-bokongsemok/schedule-free-consulting-javaraya">
                  Lets
                  discuss.
                </v-btn>
              </div>
            </div>

            <div v-else>
              Pricing is not available online.
              <v-btn target="_blank" href="https://calendly.com/nicko-bokongsemok/schedule-free-consulting-javaraya">
                Lets
                discuss.
              </v-btn>
              for your specific needs.
            </div>


            <ul class="services-list ps-0 mb-0 list-unstyled">
              <li class="d-flex align-items-center">
                <i class="ri-check-line"></i>
                <span>Genuine exported from Indonesia</span>
              </li>
              <li class="d-flex align-items-center">
                <i class="ri-check-line"></i>
                <span>Directly from farm and factory </span>
              </li>
              <li class="d-flex align-items-center">
                <i class="ri-check-line"></i>
                <span>Available in Tons</span>
              </li>
            </ul>
            <ul class="sku-list ps-0 mb-0 list-unstyled">
              <li class="d-flex align-items-center">
                <span class="title">SKU:</span>
                <span class="title2">{{ filteredProduct?.sku }}</span>
              </li>
              <li class="d-flex align-items-center">
                <span class="title">Category:</span>
                <span class="title2">{{ filteredProduct?.category }}</span>
              </li>
              <li class="d-flex align-items-center">
                <span class="title">Tags:</span>
                <span class="title2">{{ filteredProduct?.tags.join(",") }}</span>
              </li>
            </ul>
            <ul
                class="social-link ps-0 mb-0 list-unstyled d-flex gap-2 flex-wrap"
            >
              <li class="d-flex align-items-center me-2">
                <span>Share:</span>
              </li>
              <li class="d-flex align-items-center gap-2">
                <SocialShare network="facebook" :styled="true" :label="false" class="ri-facebook-fill"/>
              </li>
              <li class="d-flex align-items-center gap-2">
                <SocialShare network="x" :styled="true" :label="false" class="ri-twitter-x-line"/>
              </li>
              <li class="d-flex align-items-center gap-2">
                <SocialShare network="linkedin" :styled="true" :label="false" class="ri-linkedin-fill"/>
              </li>
              <li class="d-flex align-items-center gap-2">
                <SocialShare network="whatsapp" :styled="true" :label="false" class="ri-whatsapp-line"/>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="pt-60"></div>

      <section id="long description">
        <v-tabs
            v-model="tab"
            bg-color="white"
            class="product-tabs d-block border-0"
        >
          <v-tab value="description"> Description</v-tab>
          <v-tab value="specification"> Specification</v-tab>
          <v-tab value="reviews"> Certification</v-tab>
        </v-tabs>

        <v-card-text>
          <v-tabs-window v-model="tab">
            <v-tabs-window-item value="description">
              <div class="description-content">
                <p class="mb-3">
                  {{
                    filteredProduct?.description
                  }}
                </p>
                <p class="mb-3">
                  {{
                    filteredProduct?.description2
                  }}
                </p>
                <p>
                  {{

                  }}
                </p>
              </div>
            </v-tabs-window-item>
            <v-tabs-window-item value="specification">
              <div class="additional-info table-responsive p-0">
                <table class="table table-bordered">
                  <tbody>
                  <tr>
                    <td class="title text-dark">Brand</td>
                    <td class="price">{{ filteredProduct?.brand }}</td>
                  </tr>
                  <tr>
                    <td class="title text-dark">Categories</td>
                    <td class="price">{{ filteredProduct?.tags.join(",") }}</td>
                  </tr>
                  <tr>
                    <td class="title text-dark">SKU</td>
                    <td class="price">{{ filteredProduct?.sku }}</td>
                  </tr>
                  <tr>
                    <td class="title text-dark">Generic Description</td>
                    <td class="price">{{ filteredProduct?.genericSpecification.description }}</td>
                  </tr>
                  <tr>
                    <td class="title text-dark">Physical Description</td>
                    <td class="price">
                      <span>color: {{ filteredProduct?.genericSpecification?.color.join(",") }}</span> <br/>
                      <span>taste: {{ filteredProduct?.genericSpecification?.taste.join(",") }}</span> <br/>
                      <span>smell: {{ filteredProduct?.genericSpecification?.smell.join(",") }}</span><br/>
                      <span>form: {{ filteredProduct?.genericSpecification?.form.join(",") }}</span><br/>
                    </td>
                  </tr>

                  </tbody>
                </table>
              </div>
            </v-tabs-window-item>
            <v-tabs-window-item value="reviews">
              <div class="product-reviews">


                <h3>Certification and Standard</h3>

                <ul class="comment-list ps-0 list-unstyled m-0 pb-5 mb-lg-5"
                    v-for="(cert,idxx) in  filteredProduct?.certificates" :key="idxx">
                  <li>
                    <div class="d-sm-flex">
                      <div class="flex-shrink-0">
                        <div class="border-style d-inline-block mb-3 mb-sm-0">

                        </div>
                      </div>
                      <div class="flex-grow-1 ms-0 ms-sm-4">
                        <h4>{{ cert.name }}</h4>
                        <div class="align-items-center">
                          <div> Issuance Date : {{ cert.dateStart }}
                          </div>
                          <div>Certificate Number : {{ cert.number }}</div>
                        </div>
                        <p>
                          {{
                            cert.description
                          }}
                        </p>
                      </div>
                    </div>
                  </li>

                </ul>


              </div>
            </v-tabs-window-item>
          </v-tabs-window>
        </v-card-text>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>