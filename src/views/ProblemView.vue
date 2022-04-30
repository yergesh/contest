
<script setup lang="ts">
import { ref,onMounted } from "vue";
import { Problem } from '@/types/Problem';
import ProblemCard from "@/components/problems/ProblemCard.vue";
import ProblemSubmitForm from '../components/problems/ProblemSubmitForm.vue';
import { getProblemAsync,getProblemAttemptsAsync } from "@/services/problem-service";
import { Attempt } from '@/types/Attempt';

import AttemptsTable from "@/components/problems/AttemptsTable.vue";
const props = defineProps<{
    id: number;
}>();
const problem = ref<Problem>();
const attempts=ref<Array<Attempt>>([]);
onMounted(async () => {
  problem.value = await getProblemAsync(props.id);
  attempts.value = await getProblemAttemptsAsync(props.id);
})

console.log(props.id)
const selectedTab = ref("");
</script>

<template>
<template v-if="!problem">
</template>
<template v-else>
  <div>
    <v-tabs v-model="selectedTab">
      <v-tab value="problem">Задача</v-tab>
      <v-tab value="submit">Отослать</v-tab>
      <v-tab value="status">Результат</v-tab>
    </v-tabs>
    <v-window v-model="selectedTab">
      <v-window-item value="problem">
        <problem-card :problem="problem" />
      </v-window-item>
      <v-window-item value="submit">
        <problem-submit-form :problemId="id" />
      </v-window-item>
      <v-window-item value="status">
        <attempts-table :attempts="attempts" /> 
      </v-window-item>
    </v-window>

  </div>
</template>
</template>
