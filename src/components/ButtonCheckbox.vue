<script setup lang="ts">
import { ref, computed } from "vue"
import { mdiBrightness4, mdiBrightness5  } from "@mdi/js";
import SvgIcon from "vue3-icon";

const props = defineProps({
  value: String,
  modelValue: Boolean,
  true_value_icon: {
    type: String,
    // default: mdiBrightness5
  },
  false_value_icon: {
    type: String,
    // default: mdiBrightness4
  },
  true_value: {
    type: [String, Object],
  },
  false_value: {
    type: [String, Object],
  },
})
const innerModelValue = ref(false);
const innerValue = ref(props.false_value);
const icon = computed(() => { return innerModelValue.value ? props.true_value_icon : props.false_value_icon })
const emit = defineEmits(["update:modelValue", "update:value"])
function toggle() {
  console.log("innerModelValue:", innerModelValue.value);
  innerModelValue.value = !innerModelValue.value;
  innerValue.value = innerModelValue.value ? props.true_value : props.false_value;
  console.log("innerModelValue:", innerModelValue.value);
  emit("update:value", innerValue.value);
  emit("update:modelValue", innerModelValue.value);
}

</script>


<template>
  <v-btn icon @click="toggle" class="button_checkbox__button">
    <svg-icon class="button_checkbox__icon" :path="icon" type="mdi"/>
  </v-btn>
</template>

<style>
.button_checkbox__button svg path {
  fill: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity))!important;
}
</style>
