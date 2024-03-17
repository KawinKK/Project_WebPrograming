<template>
  <navbar_frontend />
  <div class="m-14">
    <RouterView />
  </div>
</template>

<script setup>
import navbar_frontend from './components/navbar_frontend.vue';
</script>

<style lang="scss" scoped></style>