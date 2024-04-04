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
    <!-- <v-btn icon="mdi-dots-vertical" variant="text"></v-btn> -->
    <v-dialog v-model="dialog" max-width="400" persistent>
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn v-bind="activatorProps" icon="mdi-logout" variant="text">
        </v-btn>
      </template>

      <v-card
        prepend-icon="mdi-logout"
        text="This action will redirect to login page!"
        title="Logout out??"
      >
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn @click.stop="logout"> LogOut </v-btn>

          <v-btn @click="dialog = false"> Cancel </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTheme } from "vuetify";
import { store } from "@/stores";
import router from "@/router";

const dialog = ref(false);
const theme = useTheme();

const toggleTheme = (): void => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
};

const logout = (): void => {
  store.userStore().reset_UserStore();
  localStorage.removeItem("user");
  router.push("/login");
};
</script>

<style scoped></style>
