<script setup lang="ts">
import { useRoute } from 'vue-router'
import UserProfile from '@/components/UserProfile.vue'
import FadeTransition from '@/components/FadeTransition.vue'
import { useLoadingDelay, useUser } from '@/composables'

const route = useRoute()
const { user, error, isLoading } = useUser(+route.params.id)
const { isLoadingWithDelay } = useLoadingDelay(isLoading, 400)
</script>

<template>
  <div class="h-[calc(100vh_-_64px)] bg-slate-100">
    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">
          <span>{{ route.name }}</span>
          <span v-if="!isLoadingWithDelay && user" class="text-lg font-normal">
            / {{ user.name }}
          </span>
        </h1>
      </div>
    </header>

    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <FadeTransition>
          <user-profile v-if="!isLoadingWithDelay && user" :user="user" />
          <div v-else-if="error" class="text-red-500">Error: {{ error }}</div>
        </FadeTransition>
        <FadeTransition>
          <div
            v-if="isLoading"
            class="flex justify-center absolute m-auto top-10 right-0 bottom-0 left-0 w-32 h-7">
            Loading user...
          </div>
        </FadeTransition>
      </div>
    </main>
  </div>
</template>
