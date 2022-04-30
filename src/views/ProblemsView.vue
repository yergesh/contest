
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Problem } from '@/types/Problem';
import ProblemCard from "@/components/problems/ProblemCard.vue";
import ProblemsTable from "@/components/problems/ProblemsTable.vue";
import { getProblemsAsync } from '@/services/problem-service';

const problems = ref<Array<Problem>>([]);
onMounted(async () => {
  problems.value = await getProblemsAsync();
})
// var prob = new Array<Problem>();
// prob = problems.value;
console.log("Problem = ", problems)
</script>

<template>
<div>
  <v-container fluid  class="px-0">
    <v-row dense align="end">
      <v-col cols="12" sm="12" md="10" lg="3" align="left">
        <v-text-field
          label="Поиск"
          variant="outlined"
          density="compact"
          hide-details
        ></v-text-field>
      </v-col>
      <v-col align="left">
        <div class="d-flex">
          <v-btn height="40" color="primary" class="mr-2">Поиск</v-btn>
          <v-btn height="40" color="primary">Дополнительно</v-btn>
          <v-spacer></v-spacer>
          <v-btn height="40" color="secondary" to="/AddProblem">Добавить задачу</v-btn>

        </div>
      </v-col>
    </v-row>

  </v-container>
  <h1>It is search view!</h1>
  <problems-table :problems="problems" class="elevation-1">

  </problems-table>
</div>
</template>
