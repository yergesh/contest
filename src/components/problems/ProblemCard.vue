<script setup lang="ts">
import { Problem } from "@/types/Problem";
import { ref, computed } from "vue"
const props = defineProps<{
  problem: Problem;
}>();

const bodyLines = computed(() => props.problem.body.split("\n"))
</script>
<template>
<h2 class="mt-8 mb-4 text-center">{{ problem.title }}</h2>
<div>
  <p class="text-justify mb-4" v-for="line in bodyLines">{{ line }}</p>
  <h4 class="text-left">Входные данные</h4>
  <p class="text-justify mb-4">{{ problem.inputDescription }}</p>
  <h4 class="text-left">Выходные данные</h4>
  <p class="text-justify mb-4">{{ problem.outputDescription }}</p>
  <template v-for="testcase in problem.testcases" :key="testcase.id">
    <v-row>
      <v-col cols="12" lg="6" md="6">
        <textarea class="cts_textarea" solo :value="testcase.input" />
      </v-col>
      <v-col cols="12" lg="6" md="6">
        <textarea class="cts_textarea" solo :value="testcase.output" />
      </v-col>
    </v-row>
  </template>
  <template v-if="problem.note != null">
    <h4 class="text-left">Примечание</h4>
    <p class="text-justify mb-4">{{ problem.note }}</p>
  </template>
</div>
</template>

<style>
textarea.cts_textarea {
  border-bottom: 1px solid rgb(var(--v-theme-on-surface-variant));;
  outline: none;
  padding: 6px 6px;
  /* background: rgb(var(--v-theme-on-surface-variant)); */
  background-color: rgb(var(--v-theme-on-surface-variant));
  color: inherit;
  width: 100%;
  border-radius: 4px 4px 0 0;
}
</style>
