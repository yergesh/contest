<script setup lang="ts">
import { Component, ref } from 'vue'
import AppFooter from "@/components/layout/AppFooter.vue"
import ButtonCheckbox from "@/components/ButtonCheckbox.vue"
import TopMenu from "@/components/layout/TopMenu.vue"
import { usePreferences } from "@/stores/preferences";
import { mdiBrightness4, mdiBrightness5, mdiPlus } from "@mdi/js";

const preferences = usePreferences();
</script>

<template>
<div class="main_layout__wrapper">
  <header class="main_layout__header elevation-2">
    <div class="ml-2">
      <!-- <span class="text-h5">Contester</span> -->
    </div>
    <div class="d-flex">
      <top-menu />
      <v-spacer />
      <v-sheet color="on-primary" border append-icon="mdi-magnify" class="rounded-pill" width="300">
        <v-text-field
          label="Поиск"
          density="compact"
          variant="plain"
          class="pl-4"
          single-line
          clearable
          hide-details
          name="xxx"
        ></v-text-field>
    </v-sheet>
    </div>
    <div class="d-flex mr-4">
      <v-spacer />
      <button-checkbox v-model:value="preferences.theme"  
        true_value="dark" 
        false_value="light"
        :true_value_icon="mdiBrightness5"
        :false_value_icon="mdiBrightness4" 
      />
      <v-btn variant="text" to="/login">Войти</v-btn>
    </div>
  </header>
  <main class="main_layout__main">
    <router-view  />
    <notifications class="mb-8" position="bottom right" />
  </main>
  <footer class="main_layout__footer">

  </footer>
</div>
</template>

<style>
.main_layout__wrapper {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-areas: "head head head"
                       "left main right"
                       "foot foot foot";
  gap: var(--grid-gap);
  grid-template-rows: var(--header-height) 1fr var(--footer-height);
  grid-template-columns: var(--grid-columns);

  --header-height: 64px;
  --footer-height: 30px;
  --grid-columns: 1fr 900px 1fr;
  --grid-gap: 6px;
}
.main_layout__header {
  grid-area: head;
  position: sticky; 
  top: 0;

  display: grid;
  grid-template-columns: var(--grid-columns);
  gap: var(--grid-gap);
  align-content: center;
  height: var(--header-height);
  background-color: rgb(var(--v-theme-primary));
}
.main_layout__main {
  grid-area: main;
  background-color: var(--v-theme-background);
}
.main_layout__footer {
  grid-area: foot;
  position: sticky;
  bottom: 0;
  background-color: rgb(var(--v-theme-primary));
}
</style>
