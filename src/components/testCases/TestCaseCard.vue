<script setup lang="ts">
import { TestCase } from "@/types/TestCase";
import { computed } from "vue";

const props = defineProps<{
  value: TestCase
}>();
const emit = defineEmits(["update:modelValue"])
const model = computed({
  get(): TestCase {
    return props.value; 
  },
  set(val: TestCase) {
    emit("update:modelValue", val)
  }
}
)
</script>
<template>
  <v-row>
    <v-col cols="12" lg="6" md="6" sm="6">
      <textarea class="cts_textarea" solo placeholder="Input" :value="value.input" />
    </v-col>
    <v-col cols="12" lg="6" md="6" sm="6">
      <textarea class="cts_textarea" solo placeholder="Output" :value="value.output" />
    </v-col>
  </v-row>
</template>

<style>
textarea.cts_textarea {
  border-bottom: 1px solid rgb(var(--v-theme-on-surface-variant));
  outline: none;
  padding: 6px 6px;
  /* background: rgb(var(--v-theme-on-surface-variant)); */
  background-color: rgb(var(--v-theme-on-surface-variant));
  color: inherit;
  width: 100%;
  border-radius: 4px 4px 0 0;
}
</style>
