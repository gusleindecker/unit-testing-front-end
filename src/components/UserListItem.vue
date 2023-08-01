<script setup lang="ts">
import type { User } from "@/types";
import { useRouter } from "vue-router";

export interface UserListItemProps {
  user: User;
}

const props = defineProps<UserListItemProps>();

const router = useRouter();
</script>
<template>
  <div class="flex gap-x-4">
    <img
      class="h-12 w-12 flex-none rounded-full bg-gray-50"
      :src="`https://i.pravatar.cc/75?u=${props.user.id}`"
      :alt="`${props.user.name}'s thumbnail`" />
    <div class="min-w-0 flex-auto">
      <p class="text-sm font-semibold leading-6 text-gray-900">
        {{ props.user.name }}
      </p>
      <p class="mt-1 truncate text-xs leading-5 text-gray-500">
        {{ props.user.email }}
      </p>
    </div>
  </div>
  <div class="hidden sm:flex sm:flex-col sm:items-end">
    <p class="text-sm leading-6 text-gray-900">{{ props.user.address.city }}</p>
    <button
      type="button"
      @click="router.push(`/user/${props.user.id}`)"
      class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
      User Details
    </button>
  </div>
</template>
