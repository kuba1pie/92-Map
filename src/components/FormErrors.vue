
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
ue

<script setup lang="ts">
const props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  errors: Object
})

</script>
