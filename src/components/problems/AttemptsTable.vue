<script setup lang="ts">
import { Attempt } from "@/types/Attempt";
import { compareAsc, format } from 'date-fns'
import relativeTime from 'dayjs/plugin/relativeTime'
import  dayjs from 'dayjs'
import 'dayjs/locale/ru'
import statusIndicator from "../statusIndicator.vue";
const props = defineProps<{
  attempts: Array<Attempt>;
}>();
console.log("table: ", props.attempts);
dayjs.locale('ru')
dayjs.extend(relativeTime);
console.log("dayjs is work: ",dayjs().to(dayjs('1990-01-01')))
//dayjs('1999-01-01').fromNow();

function myFormat(d:Date|undefined):string {
    var sec = dayjs().diff(d,"second");
    if(sec>36000)return dayjs(d).format("YYYY-MM-DD HH:mm:ss");
    return dayjs().to(dayjs(d));
}
</script>

<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left" width="20px">ID</th>
        <!-- <th class="text-left">
					Название
				</th> -->
        <th class="text-left">Время отправки</th>
        <th class="text-left">Статус</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="attempt in attempts" :key="attempt.id">
        <td class="text-left">
          {{ attempt.id }}
        </td>
        <td class="text-left">
          <!-- {{ dayjs(attempt.createDate).toNow(true) }} -->
          {{ myFormat(attempt.createDate) }}
        </td>
        <td class="text-left">
          <status-indicator :status="attempt.status?.toString()" :problemId="attempt.problemId"></status-indicator>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
