<script setup lang="ts">
const store = useDefaultStore();
defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <button class="fancy-btn">
    <slot /> <!-- slot outlet -->
  </button>
</template>

<style scoped lang="sass">
.read-the-docs
  color: #888
</style>
