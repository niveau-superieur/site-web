<script setup lang="ts">
import ActivityModalComponent from '@/components/ActivityModalComponent.vue'
import PlanningCalendarComponent from '@/components/PlanningCalendarComponent.vue'
import { ref } from 'vue'

// REACTIVE VARS
const selectedActivity = ref(null)
</script>

<template>
  <PlanningCalendarComponent @activity-click="selectedActivity = $event" />

  <ActivityModalComponent
    v-if="selectedActivity"
    :activity="selectedActivity"
    @close="selectedActivity = null"
  />
</template>
