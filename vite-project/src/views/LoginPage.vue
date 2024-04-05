<template>
  <form>
    <v-img
      class="mx-auto my-6"
      max-width="228"
      src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
    />

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      />

      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
      >
        Password
        <a
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Forgot login password?
        </a>
      </div>

      <v-text-field
        v-model="password.value.value"
        :counter="10"
        :error-messages="password.errorMessage.value"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      />

      <v-card class="mb-12" color="surface-variant" variant="tonal">
        <v-card-text class="text-medium-emphasis text-caption">
          Warning: After 3 consecutive failed login attempts, you account will
          be temporarily locked for three hours. If you must login now, you can
          also click "Forgot login password?" below to reset the login password.
        </v-card-text>
      </v-card>

      <v-btn
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        block
        type="button"
        @click="onSubmit"
      >
        Log In
      </v-btn>

      <v-card-text class="text-center">
        <a
          class="text-blue text-decoration-none"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Sign up now <v-icon icon="mdi-chevron-right" />
        </a>
      </v-card-text>
    </v-card>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { useForm, useField } from "vee-validate";
import { store } from "@/stores";
import router from "@/router";

interface MyForm {
  email: string;
  password: string;
}

//#region form: vee-validation
const { handleSubmit } = useForm<MyForm>({
  validationSchema: {
    email(value: string) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) {
        return true;
      } else {
        return "Must be a valid e-mail.";
      }
    },
    password(value: string) {
      if (value?.trim().length === 0) {
        return "Invalid value.";
      }
      if (value?.length >= 4) {
        return true;
      } else {
        return "Password needs to be at least 4 characters.";
      }
    },
  },
});

const email = useField("email");
const password = useField("password");
//#endregion

const visible = ref(false);

const onSubmit = handleSubmit((values: MyForm) => {
  console.log("formData:", values);
  if (values.email) store.userStore().user.email = values.email;
  store.userStore().user.password = values.password;
  router.push("/");
});
</script>

<style scoped></style>
