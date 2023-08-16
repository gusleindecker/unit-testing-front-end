<script setup lang="ts">
import UserListItem from "@/components/UserListItem.vue";
import type { User } from "@/types";

export interface UserListProps {
  users: User[];
}

const props = defineProps<UserListProps>();
</script>
<template>
  <ul
    role="list"
    class="divide-y divide-gray-100">
    <li
      v-for="user in props.users"
      :key="user.id"
      class="flex justify-between gap-x-6 py-5">
      <user-list-item :user="user" />
    </li>
  </ul>
</template>
