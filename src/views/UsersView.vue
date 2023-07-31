<script setup lang="ts">
import UserList from '@/components/UserList.vue'
import { useRoute } from 'vue-router'
import FadeTransition from '@/components/FadeTransition.vue'
import { useLoadingDelay, useUsers } from '@/composables'

const route = useRoute()
const { users, error, isLoading } = useUsers()
const { isLoadingWithDelay } = useLoadingDelay(isLoading, 400)
</script>

<template>
  <header class="bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">{{ route.name }}</h1>
    </div>
  </header>
  <main>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <FadeTransition>
        <user-list v-if="!isLoadingWithDelay" :users="users" />
        <div v-else-if="error" class="text-red-500">Error: {{ error }}</div>
      </FadeTransition>
      <FadeTransition>
        <div
          v-if="isLoading"
          class="flex justify-center absolute m-auto top-10 right-0 bottom-0 left-0 w-32 h-7">
          Loading users...
        </div>
      </FadeTransition>
    </div>
  </main>
</template>
