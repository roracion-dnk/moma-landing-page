<script setup lang="ts">
useHead({
  titleTemplate: (title) => title ? `${title} | MOMA` : 'MOMA',
})

const isAuthenticated = ref(false)
const loginStatus = ref('Checking access...')

const authSessionKey = 'moma-admin-authenticated'
const adminUsername = 'admin'
const adminPassword = 'notreadyyetbitch'

onMounted(() => {
  if (sessionStorage.getItem(authSessionKey) === 'true') {
    isAuthenticated.value = true
    return
  }

  const username = window.prompt('Username')
  const password = window.prompt('Password')

  if (username === adminUsername && password === adminPassword) {
    sessionStorage.setItem(authSessionKey, 'true')
    isAuthenticated.value = true
    window.alert('Access granted')
    return
  }

  sessionStorage.removeItem(authSessionKey)
  loginStatus.value = 'Access denied. Refresh the page to try again.'
  window.alert('Incorrect username or password')
})
</script>

<template>
  <NuxtPage v-if="isAuthenticated" />
  <main
    v-else
    class="min-h-screen bg-[#111111] px-5 py-12 text-[#f8f8f4]"
  >
    <div class="mx-auto flex min-h-[calc(100vh-6rem)] max-w-xl items-center justify-center text-center">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-[#b7c68a]">
          MOMA
        </p>
        <h1 class="mt-4 text-3xl font-semibold sm:text-5xl">
          Admin access required
        </h1>
        <p class="mt-4 text-base text-[#d7d7cd]">
          {{ loginStatus }}
        </p>
      </div>
    </div>
  </main>
</template>
