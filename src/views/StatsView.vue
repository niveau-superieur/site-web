<script setup lang="ts">
import StatCard from '@/components/StatCardComponent.vue'
import { computeProgramStats } from '@/services/programStats'
import { computed } from 'vue'

// COMPUTED
const stats = computed(() => computeProgramStats())
</script>

<template>
  <div class="space-y-6">
    <StatCard v-for="stat in stats" :key="stat.program" :stat="stat" />
  </div>
</template>
