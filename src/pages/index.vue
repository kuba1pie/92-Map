<script setup lang="ts">
const store = useDefaultStore()
</script>

<template>
  <div class="v-Index">
    <TheHeader />
    <main class="main flex flex-col items-center">
      <TheForm />
      <TheResult v-if="store.showModal" />
    </main>
  </div>
</template>

<style lang="scss">
.v-Index {
  font-size: 2em;
  @media screen and (max-width: 700px) {
      font-size: 1em;
    }
}
</style>
