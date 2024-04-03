<template>
  <v-layout class="rounded rounded-md">
    <Header></Header>
    <SideMenu></SideMenu>

    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      <RouterView />
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import Header from "./Header.vue";
import SideMenu from "./SideMenu.vue";
</script>

<style scoped></style>
