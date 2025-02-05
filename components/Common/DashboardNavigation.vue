<template>
  <ul class="dashboard-navigation">
    <li>
      <h3>Navigation</h3>
    </li>
    <li>
      <NuxtLink to="/OldXPervert/dashboard">Dashboard</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/OldXPervert/edit-profile">Edit Profile</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/OldXPervert/edit-address">Edit Address</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/OldXPervert/order-history">Order History</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/OldXPervert/order-details">Order Details</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/OldXPervert/address">Address</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/OldXPervert/password">Password</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/OldXPervert/my-account">Log Out</NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: "DashboardNavigation",
};
</script>
