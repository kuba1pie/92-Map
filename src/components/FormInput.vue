<script setup lang="ts">
const store = useDefaultStore();
defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <label for="fname">First name:</label><br>
  <input
    id="fname"
    type="text"
    name="fname"
    pattern="[a-zA-Z0-9]+"
    minlength="4"
    maxlength="10"
  ><br>
</template>

<style scoped lang="sass">
.read-the-docs
  color: #888
</style>
