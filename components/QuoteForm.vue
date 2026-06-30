<template>
  <form @submit.prevent="submitForm">
    <!-- your form fields -->

    <div>
      <label class="text-sm font-bold">Upload Photos</label>

      <input
        type="file"
        multiple
        accept="image/*"
        class="mt-2 block w-full text-sm"
        @change="handleFiles"
      />

      <p v-if="fileCount" class="mt-2 text-sm text-[#59682f]">
        {{ fileCount }} {{ fileCount === 1 ? 'photo' : 'photos' }} selected.
      </p>
    </div>

    <button type="submit">
      Send Quote Request
    </button>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const submitted = ref(false)
const fileCount = ref(0)

const form = reactive({
  name: '',
  phone: '',
  suburb: '',
  service: '',
  message: ''
})

function handleFiles(event: Event) {
  const target = event.target as HTMLInputElement
  fileCount.value = target.files?.length || 0
}

function submitForm() {
  submitted.value = true

  console.log('Quote request:', {
    ...form,
    fileCount: fileCount.value
  })
}
</script>

<!-- <style scoped>
.input {
  @apply mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 outline-none transition focus:border-[#59682f] focus:ring-2 focus:ring-[#59682f]/20;
}
</style> -->
