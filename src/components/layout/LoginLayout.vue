<script setup lang="ts">
import { ref } from 'vue'
import AppFooter from "@/components/layout/AppFooter.vue"
import { usePreferences } from "@/stores/preferences";
const preferences = usePreferences();

</script>

<template>
  <!-- <v-app-bar color="primary">
      <v-spacer />
      <v-switch v-model="preferences.theme" 
        true-value="dark" 
        false-value="light"
        inset
      >
      <template v-slot:label>
          <v-icon color="primary">mdi-lightbulb-on-outline</v-icon>
      </template>
      </v-switch>
  </v-app-bar>
  <app-footer></app-footer> -->

  <v-main class="login_layout__wrapper">
    <router-view />
  </v-main>
</template>

<style>
.login_layout__wrapper {
  height: 100vh;
}
</style>
