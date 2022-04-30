<script setup lang="ts">
import { Problem } from "@/types/Problem";
import { ref } from "vue"
const props = defineProps<{
  problem: Problem;
}>();
console.log(props.problem);
</script>
<template>
<v-card>
  <v-card-title>Попытка</v-card-title>
</v-card>
</template>
