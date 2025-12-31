<template>
  <v-layout class="rounded rounded-md">
    <Header></Header>
    <SideMenu></SideMenu>
    <v-main class="w-100 pa-3 mt-9" style="min-height: 600px;">
      <RouterView />
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import Header from "./HeaderArea.vue";
import SideMenu from "./SideMenu.vue";
</script>

<style scoped></style>
