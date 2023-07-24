<script setup lang="ts">
import type { User } from '@/types'

export interface UserListItemProps {
  user: User
}

const props = defineProps<UserListItemProps>()
</script>
<template>
  <div class="flex gap-x-4">
    <img
      class="h-12 w-12 flex-none rounded-full bg-gray-50"
      :src="props.user.picture.thumbnail"
      :alt="`${props.user.name.first}'s thumbnail`" />
    <div class="min-w-0 flex-auto">
      <p class="text-sm font-semibold leading-6 text-gray-900">
        {{ props.user.name.first }} {{ props.user.name.last }}
      </p>
      <p class="mt-1 truncate text-xs leading-5 text-gray-500">{{ props.user.email }}</p>
    </div>
  </div>
  <div class="hidden sm:flex sm:flex-col sm:items-end">
    <p class="text-sm leading-6 text-gray-900">
      {{ props.user.location.city }} - {{ props.user.location.state }}
    </p>
    <p class="mt-1 text-xs leading-5 text-gray-500">{{ props.user.login.username }}</p>
  </div>
</template>
