<script setup lang="ts">
import { useRoute } from "vue-router";
import UserProfile from "@/components/UserProfile.vue";
import FadeTransition from "@/components/FadeTransition.vue";
import { useLoadingDelay, useUser } from "@/composables";

const route = useRoute();
const { user, error, isLoading } = useUser(+route.params.id);
const { isLoadingWithDelay } = useLoadingDelay(isLoading, 400);
</script>

<template>
  <div class="h-[calc(100vh_-_64px)] bg-slate-100">
    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">
          <span>{{ route.name }}</span>
          <span
            v-if="!isLoadingWithDelay && user"
            class="text-lg font-normal">
            / {{ user.name }}
          </span>
        </h1>
      </div>
    </header>

    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <FadeTransition>
          <div v-if="!isLoadingWithDelay && user">
            <user-profile :user="user" />
          </div>
          <div
            v-else-if="!isLoadingWithDelay && error"
            class="text-red-500">
            {{ error }} User {{ route.params.id }} Profile.
          </div>
        </FadeTransition>
        <FadeTransition>
          <div
            v-if="isLoading"
            class="absolute bottom-0 left-0 right-0 top-10 m-auto flex h-7 w-32 justify-center">
            Loading user...
          </div>
        </FadeTransition>
      </div>
    </main>
  </div>
</template>
