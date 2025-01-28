<script setup>
import {defineComponent, ref, watch, reactive, computed, onMounted} from "vue";
import productRiceJson from "~/data/products/foods/product-rice-organic.json";


const productRice = ref(productRiceJson);
const filteredProduct = ref(null);
const tab = ref(null);
const selectedPricingToggleButton = ref(null);

const visibleGoods = computed(() => {
  return filteredProduct.value?.availableGoods?.filter(good => good.visible === "true") || [];
});

const filterById = () => {
  const route = useRoute()
  filteredProduct.value = productRice.value.find(product => product.id === route.params.id);
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
                <a href="https://facebook.com/" target="_blank">
                  <i class="ri-facebook-fill"></i>
                </a>
              </li>
              <li class="d-flex align-items-center gap-2">
                <a href="https://twitter.com/" target="_blank">
                  <i class="ri-twitter-x-line"></i>
                </a>
              </li>
              <li class="d-flex align-items-center gap-2">
                <a href="https://linkedin.com/" target="_blank">
                  <i class="ri-linkedin-fill"></i>
                </a>
              </li>
              <li class="d-flex align-items-center gap-2">
                <a href="https://whatsapp.com/" target="_blank">
                  <i class="ri-whatsapp-line"></i>
                </a>
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
          <!--            <v-tab value="reviews"> Reviews </v-tab>-->
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
                <div class="total-rating-wrap">
                  <div class="row">
                    <div class="col-lg-3 col-md-3">
                      <span class="title text-start">Average Rating </span>
                      <div class="total-review text-center mb-4 mb-md-0 rounded-0">
                        <h1>4.8</h1>
                        <ul
                            class="d-flex justify-content-center ps-0 list-unstyled"
                        >
                          <li>
                            <i class="ri-star-line"></i>
                          </li>
                          <li>
                            <i class="ri-star-line"></i>
                          </li>
                          <li>
                            <i class="ri-star-line"></i>
                          </li>
                          <li>
                            <i class="ri-star-line"></i>
                          </li>
                          <li>
                            <i class="ri-star-line"></i>
                          </li>
                        </ul>
                        <span>5 Rating</span>
                      </div>
                    </div>

                    <div class="col-lg-9 col-md-9">
                      <span class="title text-start">Detailed Rating</span>
                      <ul class="ps-0 mb-0 list-unstyled total-rating">
                        <li class="d-flex align-items-center">
                          <div class="d-flex align-items-center">
                            <span class="ms-2">5</span>
                          </div>
                          <div class="w-100 px-2">
                            <v-progress-linear
                                color="blue-accent-2"
                                model-value="100"
                                rounded
                            ></v-progress-linear>
                          </div>
                          <span class="rating">3%</span>
                        </li>
                        <li class="d-flex align-items-center">
                          <div class="d-flex align-items-center">
                            <span class="ms-2">4</span>
                          </div>
                          <div class="w-100 px-2">
                            <v-progress-linear
                                color="blue-accent-2"
                                model-value="70"
                                rounded
                            ></v-progress-linear>
                          </div>
                          <span class="rating">2%</span>
                        </li>
                        <li class="d-flex align-items-center">
                          <div class="d-flex align-items-center">
                            <span class="ms-2">3</span>
                          </div>
                          <div class="w-100 px-2">
                            <v-progress-linear
                                color="blue-accent-2"
                                model-value="0"
                                rounded
                            ></v-progress-linear>
                          </div>
                          <span class="rating">0%</span>
                        </li>
                        <li class="d-flex align-items-center">
                          <div class="d-flex align-items-center">
                            <span class="ms-2">2</span>
                          </div>
                          <div class="w-100 px-2">
                            <v-progress-linear
                                color="blue-accent-2"
                                model-value="0"
                                rounded
                            ></v-progress-linear>
                          </div>
                          <span class="rating">0%</span>
                        </li>
                        <li class="d-flex align-items-center">
                          <div class="d-flex align-items-center">
                            <span class="ms-2">1</span>
                          </div>
                          <div class="w-100 px-2">
                            <v-progress-linear
                                color="blue-accent-2"
                                model-value="0"
                                rounded
                            ></v-progress-linear>
                          </div>
                          <span class="rating">0%</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3>Client Feedback</h3>

                <ul class="comment-list ps-0 list-unstyled m-0 pb-5 mb-lg-5">
                  <li>
                    <div class="d-sm-flex">
                      <div class="flex-shrink-0">
                        <div class="border-style d-inline-block mb-3 mb-sm-0">
                          <img
                              class="rounded-circle wh-108"
                              src="~/assets/images/user-8.jpg"
                              alt="user-1"
                          />
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-0 ms-sm-4">
                        <h4>Maria Cruz</h4>
                        <div class="d-flex align-items-center">
                          <div class="d-flex">
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                          </div>
                          <span>(5.00)</span>
                        </div>
                        <p>
                          Pellentesque urna varius nunc risus. Nisl sagittis et id
                          ac faucibus sollicitudin purus. Mattis a ac purus sapien
                          mauris mauris sagittis ut in. Molestie integer luctus nam
                          duis egestas placerat amet netus. Est ut ligula aliquam
                          sed.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-sm-flex">
                      <div class="flex-shrink-0">
                        <div class="border-style d-inline-block mb-3 mb-sm-0">
                          <img
                              class="rounded-10 wh-108 rounded-circle"
                              src="~/assets/images/user-9.jpg"
                              alt="user-2"
                          />
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-0 ms-sm-4">
                        <h4>Anthony Hernandez</h4>
                        <div class="d-flex align-items-center">
                          <div class="d-flex">
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                          </div>
                          <span>(5.00)</span>
                        </div>
                        <p>
                          Molestie integer luctus nam duis egestas placerat amet
                          netus. Est ut ligula aliquam sed. Enim tincidunt
                          adipiscing consectetur mauris tincidunt quam. Ipsum
                          aliquet aliquet cras nec in eget tristique. Facilisis
                          purus viverra interdum viverra.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-sm-flex">
                      <div class="flex-shrink-0">
                        <div class="border-style d-inline-block mb-3 mb-sm-0">
                          <img
                              class="rounded-10 wh-108 rounded-circle"
                              src="~/assets/images/user-10.jpg"
                              alt="user-3"
                          />
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-0 ms-sm-4">
                        <h4>Mildred Benally</h4>
                        <div class="d-flex align-items-center">
                          <div class="d-flex">
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-half-fill"></i>
                          </div>
                          <span>(4.80)</span>
                        </div>
                        <p>
                          Nisl sagittis et id ac faucibus sollicitudin purus. Mattis
                          a ac purus sapien mauris mauris sagittis ut in. Molestie
                          integer luctus nam duis egestas placerat amet netus. Est
                          ut ligula aliquam sed.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>

                <div class="review-form">
                  <h3>Write A Review</h3>
                  <div class="d-flex align-items-center rate">
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-half-fill"></i>
                    <span>(3)</span>
                  </div>
                  <form>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group mb-4">
                          <label class="label">Full Name</label>
                          <input
                              type="text"
                              class="form-control"
                              placeholder="Kim Keener"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group mb-4">
                          <label class="label">Email</label>
                          <input
                              type="email"
                              class="form-control"
                              placeholder="hello@tuan.com"
                          />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="form-group mb-4">
                          <label class="label">Summary</label>
                          <textarea
                              class="form-control"
                              placeholder="Write review summary"
                              cols="30"
                              rows="10"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="form-group mb-0">
                          <button
                              type="submit"
                              class="btn btn-warning text-white rounded-pill"
                          >
                            Submit Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
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