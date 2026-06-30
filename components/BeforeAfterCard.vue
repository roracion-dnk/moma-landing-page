<template>
  <article class="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
    <img :src="image" :alt="title" class="h-56 w-full object-cover" />

    <div class="flex items-center justify-between p-4">
      <h3 class="font-black uppercase">{{ title }}</h3>
      <span class="rounded-full bg-white px-3 py-1 text-xs font-black uppercase text-black">
        Before / After
      </span>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  image: string
  title: string
}>()
</script>