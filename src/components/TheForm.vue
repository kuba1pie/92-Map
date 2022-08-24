<script setup lang="ts">
const store = useDefaultStore();
defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="flex-row">
    First point:
    <div class="p-4">
      Longitute:
      <FormInput />
    </div>
    <div class="p-4">
      Langitude:
      <FormInput />
    </div>
  </div>
  <div class="flex-row">
    Second point:
    <div class="p-4">
      Longitute:
      <FormInput />
    </div>
    <div class="p-4">
      Langitude:
      <FormInput />
    </div>
  </div>
  <input type="submit">

  <FormButton>
    Calculate
  </FormButton>
  <FormButton>
    Convert
  </FormButton>
</template>

<style scoped lang="sass">
.read-the-docs
  color: #888
</style>
