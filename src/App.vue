<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()
const currentRouteName = computed(() => route.name)
</script>

<template>
  <div class="h-full">
    <nav class="bg-gray-800">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="text-xl font-bold text-green-400">Frontend Unit Testing Demo</div>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <RouterLink
                  to="/"
                  :class="[
                    'rounded-md px-3 py-2 text-sm font-medium',
                    currentRouteName === 'Home'
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  ]">
                  Home
                </RouterLink>
                <RouterLink
                  to="/users"
                  :class="[
                    'rounded-md px-3 py-2 text-sm font-medium',
                    currentRouteName === 'Users'
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  ]">
                  Users
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <RouterView />
  </div>
</template>
