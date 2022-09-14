<script setup lang="ts">
const props = defineProps({

  errors: Object,
})
</script>
ue

<template>
  <div class="error flex flex-col text-5 text-red-500/50 text-center">
    <span
      v-for="error in props.errors"
      :key="error.$uid"
    >
      {{ error.$message }}
    </span>
  </div>
</template>
