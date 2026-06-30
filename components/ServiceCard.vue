<template>
  <div class="flex gap-4 border-b border-neutral-200 pb-5">
    <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#eef3df] text-2xl">
      {{ iconMap[icon] }}
    </div>

    <div>
      <h3 class="font-black uppercase">{{ title }}</h3>
      <p class="mt-1 text-sm text-neutral-600">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: 'pressure' | 'patio' | 'lawn'
}>()

const iconMap = {
  pressure: '💦',
  patio: '🧱',
  lawn: '🌱'
}
</script>