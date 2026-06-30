<template>
  <article
    class="relative overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    :class="featured ? 'border-[#59682f]' : 'border-neutral-200'"
  >
    <div class="relative h-44 overflow-hidden">
      <img
        src="/images/driveway-before-after.jpg"
        :alt="title"
        class="h-full w-full object-cover"
      />

      <div class="absolute left-4 top-4 rounded-full bg-[#59682f] px-3 py-1 text-xs font-black uppercase text-white">
        {{ label }}
      </div>
    </div>

    <div class="p-6">
      <h3 class="text-2xl font-black uppercase leading-tight">
        {{ title }}
      </h3>

      <ul class="mt-5 space-y-2 text-sm">
        <li v-for="item in items" :key="item" class="flex gap-2">
          <span class="font-black text-[#59682f]">✓</span>
          <span>{{ item }}</span>
        </li>
      </ul>

      <div class="mt-6 rounded-xl bg-black px-4 py-3 text-sm font-black uppercase text-white">
        🎁 Bonus: FREE Basic Car Wash
      </div>

      <div class="mt-6 flex items-end justify-between">
        <div>
          <p class="text-xs font-bold uppercase text-neutral-500">From</p>
          <p class="text-4xl font-black">{{ price }}</p>
        </div>

        <a
          href="#quote"
          class="rounded-lg bg-[#59682f] px-5 py-3 text-sm font-black uppercase text-white hover:bg-[#465326]"
        >
          Get A Quote
        </a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  label: string
  price: string
  items: string[]
  featured?: boolean
}>()
</script>