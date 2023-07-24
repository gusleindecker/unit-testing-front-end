<script setup lang="ts">
import UserList from '@/components/UserList.vue'
import { useUsers } from '@/composables/useUsers'

const { users, error, isLoading } = useUsers()
</script>
<template>
  <user-list v-if="!isLoading" :users="users" />
  <div v-else-if="error" class="text-red-500">{{ error }}</div>
  <div v-else>Loading...</div>
</template>
