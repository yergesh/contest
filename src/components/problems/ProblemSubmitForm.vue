<script setup lang="ts">
import { ref, computed, watch, onMounted, onActivated, onUpdated } from "vue";
import * as monaco from 'monaco-editor'
import { on } from "events";
import { usePreferences } from "@/stores/preferences";
import http from "@/services/http-common";
import { sendAttemptAsync } from "@/services/problem-service";
import { Attempt } from "@/types/Attempt";
import { notify } from "@kyvg/vue3-notification";

const preferences = usePreferences();

const props = defineProps<{
  problemId: number
}>();

/// Monaco Editor
let editor: monaco.editor.IStandaloneCodeEditor | null = null;
const sourceCode = ref(`
/*
* C# Program to Display All the Prime Numbers Between 1 to 100
*/

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace VS
{
	class Program
	{
		static void Main(string[] args)
		{
			bool isPrime = true;
			Console.WriteLine("Prime Numbers : ");
			for (int i = 2; i <= 100; i++)
			{
				for (int j = 2; j <= 100; j++)
				{
					if (i != j && i % j == 0)
					{
						isPrime = false;
						break;
					}
				}
				
				if (isPrime)
				{
					Console.Write("\t" +i);
				}
				isPrime = true;
			}
			Console.ReadKey();
		}
	}
}
`)
watch(()=>preferences.theme, (newTheme)=>{
  console.log("switch to theme:", newTheme);
  if(newTheme === "dark")
    monaco.editor.setTheme("vs-dark")
  else 
    monaco.editor.setTheme("vs")
}, {immediate: true})
onMounted(()=>{
  const monacoEditorConainer = document.getElementById('monacoEditorConainer');
  if(monacoEditorConainer != null) {
    editor = monaco.editor.create(monacoEditorConainer, {
      value: sourceCode.value,
      language: 'csharp',
      automaticLayout: true,
    });
    editor.getModel()?.onDidChangeContent(()=>sourceCode.value = editor?.getValue() ?? sourceCode.value)
  }
})

// Langs
const langs = ref({
  "C#": {
    name: "C#",
    compilerName: "csharp",
    extensions: ["cs"],
    defaultTemplate: `using System;

namespace Solution
{
    internal class Program
    {
        static void Main(string[] args)
        {
           Console.WriteLine("Hello World!");
        }
    }
}`
  }
});
const langNames = computed(() => Object.keys(langs.value))
const selectedLang = ref("C#")

/// File Upload
const file = ref<File>();
const fileInput = ref(null);
async function readFileToEditor(event) {
  if(event.target.files.length == 0)
    return;
  console.log("readFileToEditor:", event.target.files[0]);

  let file = event.target.files[0] as File;
  let text = await file.text();
  console.log("Source code:", text);
  editor?.getModel()?.setValue(text);
}


/// Send attempt
async function sendAttempt() {
  if(sourceCode.value == "" || sourceCode.value == undefined) {
    notify({
      title: "Пустое решение",
      type: "error",
    })
    return;
  }

  let model = new Attempt();
  model.problemId = props.problemId;
  model.sourceCode = sourceCode.value;
  await sendAttemptAsync(model);
  console.log(fileInput.value)
  fileInput.value = null;
  editor?.getModel()?.setValue("");
  notify({
    title: "Решение отправлено",
    type: "success",
  })
}
</script>


<template>
<v-container>
  <v-row>
    <v-col cols="12" lg="4" md="4" sm="4">
      <v-select label="Язык"
        v-model="selectedLang" 
        variant="contained" 
        :items="langNames" 
        item-text="name"
        hide-details
      />
    </v-col>
    <v-spacer/>
    <v-col cols="12" lg="8" md="8" sm="8">
      <v-file-input label="Загрузить решение"
        ref="fileInput"
        @change="readFileToEditor"
        accept="text/*,.cs,.cpp,.c,.py,.html,.css,.js"
        variant="contained"
        height="46"
        hide-details
      ></v-file-input>
    </v-col>
  </v-row>  
  <v-row>
    <v-col cols="12">
      <div class="elevation-3">
        <div id="monacoEditorConainer" ></div>
      </div>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12">
      <v-btn variant="contained" color="primary" @click="sendAttempt">Отправить</v-btn>
    </v-col>
  </v-row>
</v-container>
</template>


<style>
#monacoEditorConainer {
  /* height: 100%; */
  /* z-index: 0; */
  height: 400px;
  /* overflow: hidden; */
  outline: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}
button.primary {
  background-color: rgb(var(--v-theme-primary));
}
</style>
