import { defineStore } from 'pinia'
import { watch } from 'vue'
export const usePreferences = defineStore('preferences', {
  state: () => ({
    theme: 'light'
  }),
  persist: true
})
