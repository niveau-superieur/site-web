<script setup lang="ts">
import ActivityModalComponent from '@/components/ActivityModalComponent.vue'
import type { Activity } from '@/types/activity'
import type { Stat } from '@/types/stat'
import { formatDuration } from '@/utils/formatUtils'
import { ref } from 'vue'

// PROPS
defineProps<{
  stat: Stat
}>()

// REACTIVE VARS
const selectedActivity = ref<Activity | null>(null)

// FUNCTIONS
function openActivity(activity: Activity) {
  selectedActivity.value = activity
}
</script>

<template>
  <div class="rounded-xl p-4 space-y-2 card">
    <div class="flex flex-col sm:flex-row sm:justify-between gap-1 items-center">
      <h2 class="text-lg sm:text-xl font-bold">{{ stat.name }}</h2>
      <div class="text-xs sm:text-base">{{ stat.startDate }} - {{ stat.endDate }}</div>
    </div>

    <div class="flex flex-col sm:justify-end sm:flex-row text-sm sm:text-base">
      {{ stat.totalActivities }} activités
    </div>
    <div v-if="stat.totalDuration">
      <span class="font-semibold"> Durée totale : </span>{{ formatDuration(stat.totalDuration) }}
    </div>
    <div v-if="stat.totalDistance">
      <span class="font-semibold">Distance totale : </span>{{ stat.totalDistance }} km
    </div>

    <div v-if="stat.highlights?.length">
      <div class="separator h-px mx-16"></div>

      <h3 class="font-semibold mb-2 text-md sm:text-base">Activités marquantes</h3>

      <div class="flex flex-wrap flex-col gap-2 text-sm">
        <div
          v-for="highlight in stat.highlights"
          :key="highlight.label"
          class="flex flex-wrap gap-1 items-center"
        >
          <span class="font-medium mr-1"> {{ highlight.label }} : {{ highlight.value }} </span>

          <button
            v-for="activity in highlight.activities ?? []"
            :key="activity.name + activity.date"
            class="px-2 py-1 rounded border hover-secondary text-xs sm:text-sm"
            @click="openActivity(activity)"
          >
            {{ activity.name }}
          </button>
        </div>
      </div>
    </div>

    <ActivityModalComponent
      v-if="selectedActivity"
      :activity="selectedActivity"
      @close="selectedActivity = null"
    />
  </div>
</template>
