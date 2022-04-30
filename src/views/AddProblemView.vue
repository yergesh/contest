<script setup lang="ts">
import { Ref, ref } from "vue";
import { Problem } from "@/types/Problem";

import { TestCase } from "@/types/TestCase";
import TestCaseCard from "@/components/testCases/TestCaseCard.vue";
import ProblemCard from "@/components/problems/ProblemCard.vue";
import ProblemsTable from "@/components/problems/ProblemsTable.vue";
import { addProblemAsync, getProblemAsync } from "@/services/problem-service";

var problem =  ref<Problem>() as Ref<Problem>;
problem.value = new Problem();

var counters = ref(1);
</script>

<template>
  <div>
    <v-card>
      <v-toolbar flat color="secondary">
        <v-toolbar-title>Добавление новой задачи</v-toolbar-title>
      </v-toolbar>

      <v-card-text>
        <v-text-field
          filled
          label="Заголовок"
          placeholder="Задача номер 1"
          v-model="problem.title"
        ></v-text-field>

        <v-textarea
          filled
          label="Описание задачи"
          placeholder="Вводите текст задачи"
          v-model="problem.body"
        ></v-textarea>
        <v-row>
          <v-col cols="12" lg="6" md="6" sm="12">
            <v-textarea
              filled
              rows="3"
              label="InputDescription"
              placeholder="InputDescription"
              v-model="problem.inputDescription"
            ></v-textarea>
          </v-col>
          <v-col cols="12" lg="6" md="6" sm="12">
            <v-textarea
              filled
              rows="3"
              label="OutputDescription"
              placeholder="OutputDescription"
              v-model="problem.outputDescription"
            ></v-textarea>
          </v-col>
        </v-row>
        
        


        <v-textarea
          filled
          rows="2"
          label="Примечание"
          placeholder="Вводите подробное объяснение или пример"
          v-model="problem.note"
        ></v-textarea>
        <v-text-field
          filled
          label="Теги"
          placeholder="tag1;tag2;tag3"
          v-model="problem.tags"
        ></v-text-field>
        <v-divider class="my-2"></v-divider>

        <v-item-group multiple>
          <v-subheader>Тесты</v-subheader>
          <v-btn class="elevation-0" @click="problem.addTestCase()"
            ><v-icon>mdi-plus-circle</v-icon></v-btn
          >
          <v-item-group v-for="(testcase, idx) in problem.testcases" :key="idx">
            <v-row>

              <v-col cols="12" lg="5" md="5" sm="5">
                <v-textarea 
                
                  rows="1"
                  filled
                  label="Входные данные"
                  
                  v-model="testcase.input"
                ></v-textarea>
              </v-col>
              <v-col cols="12" lg="5" md="5" sm="5">
                <v-textarea 
                  rows="1"
                  filled
                  solo
                  label="Ответ"
                  
                  v-model="testcase.output"
                  
                ></v-textarea>
              </v-col>
              <v-col cols="12" lg="2" md="2" sm="2">
                <v-btn class="elevation-0" @click="problem.delTestCase(idx)"
                  ><v-icon>mdi-minus-circle</v-icon></v-btn
                >
              </v-col>
            </v-row>
          </v-item-group>
        </v-item-group>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success" depressed @click="addProblemAsync(problem)"> Добавить </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style>

</style>
