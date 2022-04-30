<script setup lang="ts">
const props = defineProps<{
	status: string | undefined,
    problemId: number | undefined
}>()
var result="success";
var color="success";
if(props.status=="0"){
    result = "inprocess";
    color="orange";
}else if(props.status=="1"){
    result="success";
}else{
    result="Failed";
    color="red";
}
var dialog=false
var on=false;
</script>

<template>
<v-btn :color="color" >{{result}}</v-btn>
<!-- <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <template v-slot:activator="on">

        


      </template>
      <v-card>
        <v-card-title class="text-h5">
          Use Google's location service?
        </v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Disagree
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->
</template>