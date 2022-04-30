<script setup lang="ts">
const message = "Главная";
</script>

<template>
  <div>
    <v-card height="300px" elevation="1">
      <v-card-title>{{ message }}</v-card-title>
      <v-card-text>
        <router-link :to="{name: 'login'}">Войти</router-link>
      </v-card-text>
    </v-card>
  </div>
</template>