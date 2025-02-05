<template>
  <div :class="['navbar navbar-expand-lg bg-white py-0', { sticky: isSticky }]">
    <div class="container mw-1610">
      <NuxtLink class="navbar-brand d-lg-none" to="/">
        <img
          src="~/assets/images/grocery-shop-logo.png"
          class="main-logo"
          alt="white-logo"
        />
      </NuxtLink>
      <a
        class="navbar-toggler"
        href="javascript:void(0);"
        @click="stateStoreInstance.onChangeShow"
      >
        <span class="burger-menu">
          <span class="top-bar"></span>
          <span class="middle-bar"></span>
          <span class="bottom-bar"></span>
        </span>
      </a>

      <ul class="categories-nav categories-style-three d-none d-lg-block">
        <li class="categories-item dropdown">
          <div
            class="categories-link dropdown-toggle"
            @click="toggleCategories"
            :aria-pressed="show ? 'true' : 'false'"
            :class="{ show: buttonShowState }"
          >
            <i class="ri-menu-2-line"></i>
            <span>Browse Categories</span>
          </div>

          <ul class="dropdown-menu" :class="{ show: show }">
            <li>
              <a
                class="dropdown-item sub-dropdown dropdown-toggle"
                href="javascript:void(0)"
                @click="toggleSubDropdown('smartphones')"
              >
                <i class="flaticon-mobile-phone"></i>
                <span>Smartphone & Tablets</span>
              </a>

              <div
                class="dropdown-menu dropdown-menu-sub only-grid"
                :class="{ show: activeSubDropdown === 'smartphones' }"
              >
                <div class="row">
                  <div class="col-xl-4">
                    <ul>
                      <li>
                        <NuxtLink class="dropdown-item" to="products">
                          Phone Accessories
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                          iPhone
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                          Samsung Phones
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                          Unlocked Phones
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                          Postpaid Phones
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                          Prepaid Phones
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                          Refurbished Phones
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                  <div class="col-xl-4">
                    <ul>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                          Phone Accessories
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                          iPhone
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                          Samsung Phones
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                          Unlocked Phones
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                          Postpaid Phones
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                          Prepaid Phones
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                          Refurbished Phones
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                  <div class="col-xl-4">
                    <ul>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                          Phone Accessories
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                          iPhone
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                          Samsung Phones
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                          Unlocked Phones
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                          Postpaid Phones
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                          Prepaid Phones
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                          Refurbished Phones
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a
                class="dropdown-item sub-dropdown dropdown-toggle"
                href="javascript:void(0)"
                @click="toggleSubDropdown('laptops')"
              >
                <i class="flaticon-laptop"></i>
                <span>Laptop & Desktop</span>
              </a>

              <div
                class="dropdown-menu dropdown-menu-sub only-grid"
                :class="{ show: activeSubDropdown === 'laptops' }"
              >
                <div class="row">
                  <div class="col-xl-6">
                    <ul>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                          All In Ones
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                          Gaming Computer
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                          Dell Screen
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                          Gaming Monitor
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                          Smart Monitor
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                          Desktop Barebones
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                          Internal Components
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                  <div class="col-xl-6">
                    <NuxtLink
                      to="/OldXPervert/products"
                      class="h-100 object-fit-cover d-block"
                    >
                      <img
                        src="~/assets/images/subscribe-img.png"
                        class="h-100 object-fit-cover"
                        alt="subscribe"
                      />
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a
                class="dropdown-item sub-dropdown dropdown-toggle"
                href="javascript:void(0)"
                @click="toggleSubDropdown('electronics')"
              >
                <i class="flaticon-smart-home"></i>
                <span>Smart Home Electronics</span>
              </a>

              <ul
                class="dropdown-menu dropdown-menu-sub"
                :class="{ show: activeSubDropdown === 'electronics' }"
              >
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Phone Accessories
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    iPhone
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Samsung Phones
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Unlocked Phones
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Postpaid Phones
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Prepaid Phones
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Refurbished Phones
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li>
              <a
                class="dropdown-item sub-dropdown dropdown-toggle"
                href="javascript:void(0)"
                @click="toggleSubDropdown('headphones')"
              >
                <i class="flaticon-headphones"></i>
                <span>Headphones</span>
              </a>

              <ul
                class="dropdown-menu dropdown-menu-sub"
                :class="{ show: activeSubDropdown === 'headphones' }"
              >
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Bluetooth Headphones
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Noise Canceling
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Sports & Fitness
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Over-EAR
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li>
              <a
                class="dropdown-item sub-dropdown dropdown-toggle"
                href="javascript:void(0)"
                @click="toggleSubDropdown('watches')"
              >
                <i class="flaticon-electronics"></i>
                <span>Smart Watches</span>
              </a>

              <ul
                class="dropdown-menu dropdown-menu-sub"
                :class="{ show: activeSubDropdown === 'watches' }"
              >
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Men Watches
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Women Watches
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Kids Watches
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Sport Watches
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Watch Brands
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li>
              <a
                class="dropdown-item sub-dropdown dropdown-toggle"
                href="javascript:void(0)"
                @click="toggleSubDropdown('headsets')"
              >
                <i class="flaticon-vr"></i>
                <span>Virtual Reality Headsets</span>
              </a>

              <ul
                class="dropdown-menu dropdown-menu-sub"
                :class="{ show: activeSubDropdown === 'headsets' }"
              >
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    NEO QLED
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Crystal UHD
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    The Sero
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li>
              <a
                class="dropdown-item sub-dropdown dropdown-toggle"
                href="javascript:void(0)"
                @click="toggleSubDropdown('drone')"
              >
                <i class="flaticon-drone"></i>
                <span>Drone & Camera</span>
              </a>

              <ul
                class="dropdown-menu dropdown-menu-sub"
                :class="{ show: activeSubDropdown === 'drone' }"
              >
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Phone Accessories
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    iPhone
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Samsung Phones
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Unlocked Phones
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Postpaid Phones
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Prepaid Phones
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Refurbished Phones
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li>
              <a
                class="dropdown-item sub-dropdown dropdown-toggle"
                href="javascript:void(0)"
                @click="toggleSubDropdown('wireless')"
              >
                <i class="flaticon-headphones-1"></i>
                <span>Wireless Headphone</span>
              </a>

              <ul
                class="dropdown-menu dropdown-menu-sub"
                :class="{ show: activeSubDropdown === 'wireless' }"
              >
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Bluetooth Headphones
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Noise Canceling
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Sports & Fitness
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Over-EAR
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li>
              <a
                class="dropdown-item sub-dropdown dropdown-toggle"
                href="javascript:void(0)"
                @click="toggleSubDropdown('adapter')"
              >
                <i class="flaticon-adapter"></i>
                <span>Electronics Accessories</span>
              </a>

              <ul
                class="dropdown-menu dropdown-menu-sub"
                :class="{ show: activeSubDropdown === 'adapter' }"
              >
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Phone Accessories
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    iPhone
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Samsung Phones
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Unlocked Phones
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Postpaid Phones
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Prepaid Phones
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                    Refurbished Phones
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li>
              <NuxtLink class="dropdown-item single-style" to="/OldXPervert/products">
                Mega Sale 11.11
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="dropdown-item single-style" to="/OldXPervert/products">
                Top Selling Products
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto ms-68">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#"> Home </a>

            <ul class="dropdown-menu">
              <li>
                <NuxtLink class="dropdown-item" to="/">
                  Electronics & Telemobile Online Shop
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/OldXPervert/grocery-shop">
                  Grocery Shop
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/OldXPervert/healthy-diet-foods-shop">
                  Healthy Diet Foods Shop
                </NuxtLink>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#"> Pages </a>

            <ul class="dropdown-menu">
              <li>
                <NuxtLink class="dropdown-item" to="/OldXPervert/about-us">
                  About Us
                </NuxtLink>
              </li>

              <li>
                <a class="dropdown-item sub-dropdown dropdown-toggle" href="#">
                  Authentication
                </a>

                <ul class="dropdown-menu">
                  <li>
                    <NuxtLink class="dropdown-item" to="/OldXPervert/login">
                      Login
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="dropdown-item" to="/OldXPervert/register">
                      Register
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="dropdown-item" to="/OldXPervert/my-account">
                      My Account
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="dropdown-item" to="/OldXPervert/change-password">
                      Change Password
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="dropdown-item" to="/OldXPervert/forgot-password">
                      Forgot Password
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/OldXPervert/faq"> FAQ </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/OldXPervert/privacy-policy">
                  Privacy Policy
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/OldXPervert/terms-conditions">
                  Terms & Conditions
                </NuxtLink>
              </li>
            </ul>
          </li>

          <li class="nav-item mega-menu">
            <a href="#" class="nav-link dropdown-toggle"> Shop </a>

            <ul class="dropdown-menu">
              <li class="nav-item">
                <div class="row">
                  <div class="col">
                    <h6 class="sub-menu-title">Product Layouts</h6>

                    <ul class="sub-menu">
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/best-sellers">
                          Best Sellers
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/featured-products">
                          Featured Products
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/trending-products">
                          Trending Products
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/new-arrivals">
                          New Arrivals
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/categories">
                          Categories
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>

                  <div class="col">
                    <h6 class="sub-menu-title">Products Step</h6>

                    <ul class="sub-menu">
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/products">
                          Products
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/cart">
                          Cart
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/wishlist">
                          Wishlist
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/checkout">
                          Checkout
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/product-details">
                          Product Details
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>

                  <div class="col">
                    <h6 class="sub-menu-title">Admin Page</h6>

                    <ul class="sub-menu">
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/dashboard">
                          Dashboard
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/edit-profile">
                          Edit Profile
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/order-history">
                          Order History
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/order-details">
                          Order Details
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/OldXPervert/password">
                          Change Password
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>

                  <div class="col">
                    <NuxtLink
                      to="/OldXPervert/products"
                      class="bg-img menu-img"
                      :style="{
                        'background-image': `url(${image})`,
                      }"
                    >
                    </NuxtLink>
                  </div>
                </div>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#"> Blog </a>

            <ul class="dropdown-menu">
              <li>
                <NuxtLink class="dropdown-item" to="/OldXPervert/our-blog">
                  Our Blog
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/OldXPervert/blog-details">
                  Blog Details
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/OldXPervert/tags"> Tags </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/OldXPervert/categories">
                  Categories
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/OldXPervert/author"> Author </NuxtLink>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <NuxtLink class="nav-link" to="/contact"> Contact </NuxtLink>
          </li>
        </ul>
      </div>

      <ul
        class="d-none d-lg-flex others-options grocery-options ps-0 mb-0 list-unstyled justify-content-end"
      >
        <li class="info">
          <a
            href="#"
            class="text-decoration-none success-hover-bg"
            @click="stateStoreInstance.onChange"
          >
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <i class="ri-map-pin-2-line"></i>
              </div>
              <div class="flex-grow-1 ms-10">
                <span>Deliver to</span>
                <h3>Find Location</h3>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from "vue";
import stateStore from "~/utils/store";

import image from "~/assets/images/menu-product.jpg";

export default defineComponent({
  name: "NavbarStyleThree",
  setup() {
    const isSticky = ref(false);
    const show = ref(false);
    const buttonShowState = ref(false);
    const activeSubDropdown = ref<string | null>(null);
    const stateStoreInstance = stateStore;

    const toggleCategories = () => {
      show.value = !show.value;
      buttonShowState.value = !buttonShowState.value;
    };

    const toggleSubDropdown = (subDropdown: string) => {
      activeSubDropdown.value =
        activeSubDropdown.value === subDropdown ? null : subDropdown;
    };

    const handleScroll = () => {
      const scrollPos = window.scrollY;
      isSticky.value = scrollPos >= 100;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    watch(isSticky, (newValue: any) => {
      if (newValue) {
        show.value = false;
        buttonShowState.value = false;
      }
    });

    return {
      isSticky,
      show,
      buttonShowState,
      toggleCategories,
      toggleSubDropdown,
      activeSubDropdown,
      stateStoreInstance,
      image,
    };
  },
});
</script>
