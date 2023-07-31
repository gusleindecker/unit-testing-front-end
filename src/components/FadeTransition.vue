<template>
  <Transition
    enter-active-class="transition-opacity ease-linear duration-300"
    leave-active-class="transition-opacity ease-linear duration-300"
    enter-from-class="opacity-0"
    leave-from-class="opacity-100">
    <slot />
  </Transition>
</template>
