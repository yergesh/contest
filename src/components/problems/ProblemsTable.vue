<script setup lang="ts">
import { Problem } from '@/types/Problem';

const props = defineProps<{
	problems: Array<Problem>

}>()
console.log("table: ", props.problems)
</script>

<template>
	<v-table>
		<thead>
			<tr>
				<th class="text-left" width="20px">
					ID
				</th>
				<th class="text-left">
					Название
				</th>
				<th class="text-left">
					Сложность
				</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="problem in problems" :key="problem.id">
				<td class="text-left">
					{{ problem.id }}
				</td>
				<td class="text-left">
					<router-link class="secondary--text" :to="{ name: 'problem', params: { id: problem.id }}">{{ problem.title }}</router-link>
				</td>
				<td class="text-left">
					{{ problem.rating }}
				</td>
			</tr>
		</tbody>
	</v-table>
</template>