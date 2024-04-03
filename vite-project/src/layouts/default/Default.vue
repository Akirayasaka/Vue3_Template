<template>
  <v-layout class="rounded rounded-md">
    <Header></Header>
    <SideMenu></SideMenu>
    <v-main style="height: 500px">
      <RouterView />
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import Header from "./Header.vue";
import SideMenu from "./SideMenu.vue";
</script>

<style scoped></style>
