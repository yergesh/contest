<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from "vue-router"
import MainLayout from "@/components/layout/MainLayout.vue";
import { usePreferences } from "./stores/preferences";
const preferences = usePreferences();
const layout = computed(() => { 
    const { meta } = useRoute()
    return meta?.layout ?? MainLayout; 
  }
)

</script>

<template>
<!-- <div class="app_wrapper"> -->
  <v-app :theme="preferences.theme" full-height>
    <component :is="layout" />
  </v-app>
<!-- </div> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  position: sticky;
  top: 0;
  height: 100%;
  color: #2c3e50;
}
</style>
