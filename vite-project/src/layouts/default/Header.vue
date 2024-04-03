<template>
  <v-app-bar color="primary" prominent>
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="store.layoutStore().changeDrawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>Title</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon="mdi-magnify" variant="text"></v-btn>
    <v-btn icon="mdi-swap-horizontal" @click.stop="toggleTheme"></v-btn>
    <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
import { store } from "@/stores";

const theme = useTheme();

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
};
</script>

<style scoped></style>
