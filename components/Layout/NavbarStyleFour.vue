<template>
  <div
    :class="[
      'navbar navbar-expand-lg bg-warningdiv1 ptb-6',
      { sticky: isSticky },
    ]"
  >
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

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
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
          <a href="tel:808-555-0111" class="text-decoration-none">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <i class="ri-phone-line bg-danger-10"></i>
              </div>
              <div class="flex-grow-1 ms-10">
                <span>Hotline</span>
                <h3>(808) 555-0111</h3>
              </div>
            </div>
          </a>
        </li>
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
import { defineComponent, ref, onMounted } from "vue";
import stateStore from "~/utils/store";

import image from "~/assets/images/menu-product.jpg";

export default defineComponent({
  name: "NavbarStyleFour",
  setup() {
    const isSticky = ref(false);
    const show = ref(false);
    const stateStoreInstance = stateStore;

    const toggleCategories = () => {
      show.value = !show.value;
    };

    const handleScroll = () => {
      const scrollPos = window.scrollY;
      isSticky.value = scrollPos >= 100;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    return {
      isSticky,
      toggleCategories,
      stateStoreInstance,
      image,
    };
  },
});
</script>
