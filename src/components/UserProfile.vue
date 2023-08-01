<script setup lang="ts">
import type { User } from "@/types";

export interface UserProfileProps {
  user: User;
}

const props = defineProps<UserProfileProps>();
</script>
<template>
  <div class="bg-slate-200">
    <div class="mx-auto">
      <div class="flex bg-white p-4 sm:rounded-lg sm:shadow-md">
        <img
          class="mr-7 h-36 w-36 flex-none rounded-full bg-gray-50"
          :src="`https://i.pravatar.cc/144?u=${props.user.id}`"
          :alt="`${props.user.name}'s thumbnail`" />
        <div class="min-w-0 flex-auto text-gray-900">
          <p class="mb-3 text-lg font-semibold leading-6 text-black">
            {{ props.user.name }}
          </p>
          <p class="mt-1 flex truncate text-sm leading-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="mr-1">
              <g fill="currentColor">
                <path
                  d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path
                  d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </g>
            </svg>
            <span class="font-semibold">email:</span>
            <span class="lowercase">&nbsp;{{ props.user.email }}</span>
          </p>
          <p class="mt-1 flex truncate text-sm leading-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 20 20"
              class="mr-1">
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                clip-rule="evenodd" />
            </svg>
            <span class="font-semibold">address:</span>
            <span>
              &nbsp;{{ props.user.address.street }},
              {{ props.user.address.suite }} -
              {{ props.user.address.city }}
            </span>
          </p>
          <p class="mt-1 flex truncate text-sm leading-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="mr-1">
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            <span class="font-semibold">website:</span>
            <span> &nbsp;{{ props.user.website }} </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
