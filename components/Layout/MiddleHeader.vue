<template>
  <div class="middle-header-area ptb-20">
    <div class="container">
      <div class="d-lg-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center middle-header-left justify-content-center justify-content-lg-end">
          <NuxtLink to="/" class="d-none d-lg-block middle-logo">
            <img src="~/assets/brands/0000015_javaraya-logo-with-words.png" alt="logo" style="height: 60px;"/>
          </NuxtLink>
          <div class="d-flex">
            <div class="dropdown">
              <button
                  class="dropdown-toggle border border-2 bg-transparent all-categories"
                  @click="toggleAllCategories"
                  :aria-pressed="show ? 'true' : 'false'"
                  :class="{ show: buttonShowState }"
              >
                All Categories
              </button>
              <!--              <ul class="dropdown-menu" :class="{ toggler: show }">-->
              <!--                <li><a class="dropdown-item" href="#">Coconut</a></li>-->
              <!--                <li>-->
              <!--                  <a class="dropdown-item" href="#">-->
              <!--                    Material-->
              <!--                  </a>-->
              <!--                </li>-->
              <!--                <li><a class="dropdown-item" href="#">Samsung</a></li>-->
              <!--                <li>-->
              <!--                  <a class="dropdown-item" href="#">-->
              <!--                    Wireless Bluetooth Over Ear Headphones, with Active-->
              <!--                  </a>-->
              <!--                </li>-->
              <!--                <li>-->
              <!--                  <a class="dropdown-item" href="#">-->
              <!--                    Wireless Ear Buds with USB-C Charging, Up to 2X-->
              <!--                  </a>-->
              <!--                </li>-->
              <!--              </ul>-->
            </div>
            <div class="position-relative">
              <input
                  type="text"
                  class="form-control border-2"
                  placeholder="Search for products..."
              />
              <button
                  type="submit"
                  class="position-absolute top-50 end-0 translate-middle-y btn btn-primary fs-14 fw-medium text-white"
              >
                <i class="ri-search-line"></i>
                <span class="d-none d-sm-inline-block">Search</span>
              </button>
            </div>
          </div>
        </div>

        <!--        <ul class="d-flex middle-header-right ps-0 mb-0 list-unstyled justify-content-center justify-content-lg-end mt-3 mt-lg-0">-->
        <!--          <li class="buy-info">-->
        <!--            <NuxtLink to="/login" class="text-decoration-none">-->
        <!--              <div class="d-flex align-items-center">-->
        <!--                <div class="flex-shrink-0">-->
        <!--                  <i class="ri-user-line"></i>-->
        <!--                </div>-->
        <!--                <div class="flex-grow-1 ms-10">-->
        <!--                  <span>Login Your</span>-->
        <!--                  <h3>Account</h3>-->
        <!--                </div>-->
        <!--              </div>-->
        <!--            </NuxtLink>-->
        <!--          </li>-->
        <!--          <li class="buy-info">-->
        <!--            <NuxtLink to="/wishlist" class="text-decoration-none">-->
        <!--              <div class="position-relative me-9">-->
        <!--                <i class="ri-heart-line"></i>-->
        <!--                <span class="count">0</span>-->
        <!--              </div>-->
        <!--            </NuxtLink>-->
        <!--          </li>-->
        <!--          <li class="buy-info">-->
        <!--            <div class="dropdown">-->
        <!--              <a-->
        <!--                  class="text-decoration-none"-->
        <!--                  href="javascript:void(0);"-->
        <!--                  @click="toggleBuyInfo"-->
        <!--                  :aria-pressed="active ? 'true' : 'false'"-->
        <!--                  :class="{ active: buttonActiveState }"-->
        <!--              >-->
        <!--                <div class="d-flex align-items-center">-->
        <!--                  <div class="flex-shrink-0">-->
        <!--                    <div class="position-relative me-9">-->
        <!--                      <i class="ri-shopping-cart-line"></i>-->
        <!--                      <span class="count">0</span>-->
        <!--                    </div>-->
        <!--                  </div>-->
        <!--                  <div class="flex-grow-1 ms-1">-->
        <!--                    <span>Your Cart</span>-->
        <!--                    <h3>$0.00</h3>-->
        <!--                  </div>-->
        <!--                </div>-->
        <!--              </a>-->
        <!--              <ul-->
        <!--                  class="dropdown-menu cart-dropdown dropdown-menu-end"-->
        <!--                  :class="{ toggler: active }"-->
        <!--              >-->
        <!--                <li-->
        <!--                    class="d-flex justify-content-between align-items-center cart-item"-->
        <!--                >-->
        <!--                  <button class="p-0 border-0 bg-transparent delete-btn">-->
        <!--                    <i class="ri-delete-bin-7-line"></i>-->
        <!--                  </button>-->
        <!--                  <NuxtLink-->
        <!--                      class="dropdown-item d-flex align-items-center"-->
        <!--                      to="/product-details"-->
        <!--                  >-->
        <!--                    <img src="~/assets/images/product-6.png" alt="product"/>-->
        <!--                    <div class="ms-3 d-inline-block text-truncate">-->
        <!--                      <span>-->
        <!--                        Multiplatform Wireless Noise-Cancelling Gaming Headset-->
        <!--                      </span>-->
        <!--                      <h3>$79.50</h3>-->
        <!--                    </div>-->
        <!--                  </NuxtLink>-->
        <!--                </li>-->
        <!--                <li-->
        <!--                    class="d-flex justify-content-between align-items-center cart-item"-->
        <!--                >-->
        <!--                  <button class="p-0 border-0 bg-transparent delete-btn">-->
        <!--                    <i class="ri-delete-bin-7-line"></i>-->
        <!--                  </button>-->
        <!--                  <NuxtLink-->
        <!--                      class="dropdown-item d-flex align-items-center"-->
        <!--                      to="/product-details"-->
        <!--                  >-->
        <!--                    <img src="~/assets/images/product-7.png" alt="product"/>-->
        <!--                    <div class="ms-3 d-inline-block text-truncate">-->
        <!--                      <span>-->
        <!--                        GPS Smartwatch with Bright Touchscreen Display-->
        <!--                      </span>-->
        <!--                      <h3>$119.50</h3>-->
        <!--                    </div>-->
        <!--                  </NuxtLink>-->
        <!--                </li>-->
        <!--                <li-->
        <!--                    class="d-flex justify-content-between align-items-center cart-item"-->
        <!--                >-->
        <!--                  <button class="p-0 border-0 bg-transparent delete-btn">-->
        <!--                    <i class="ri-delete-bin-7-line"></i>-->
        <!--                  </button>-->
        <!--                  <NuxtLink-->
        <!--                      class="dropdown-item d-flex align-items-center"-->
        <!--                      to="/product-details"-->
        <!--                  >-->
        <!--                    <img src="~/assets/images/product-8.png" alt="product"/>-->
        <!--                    <div class="ms-3 d-inline-block text-truncate">-->
        <!--                      <span>-->
        <!--                        SAMSUNG 32-Inch Class QLED 4K Q60C Series Quantum HDR-->
        <!--                      </span>-->
        <!--                      <h3>$397.50</h3>-->
        <!--                    </div>-->
        <!--                  </NuxtLink>-->
        <!--                </li>-->
        <!--                <li-->
        <!--                    class="d-flex justify-content-between align-items-center cart-item"-->
        <!--                >-->
        <!--                  <h3 class="fs-15 mb-0">Total</h3>-->
        <!--                  <h3 class="fs-15 mb-0">$595.63</h3>-->
        <!--                </li>-->
        <!--                <li-->
        <!--                    class="d-flex justify-content-between align-items-center cart-item"-->
        <!--                >-->
        <!--                  <NuxtLink to="/cart" class="btn btn-primary fs-14 text-white">-->
        <!--                    View Cart-->
        <!--                  </NuxtLink>-->
        <!--                  <NuxtLink-->
        <!--                      to="/checkout"-->
        <!--                      class="btn btn-warning fs-14 text-white"-->
        <!--                  >-->
        <!--                    Checkout-->
        <!--                  </NuxtLink>-->
        <!--                </li>-->
        <!--              </ul>-->
        <!--            </div>-->
        <!--          </li>-->
        <!--        </ul>-->
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
