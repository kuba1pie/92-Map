<template>
  <div class="modal">
    <div class="modalContent m-5">
      <span
        class="close"
        @click="store.showModal=false"
      >&times;</span>
      <span class="font-semibold">Distance: </span> <br>
      <p class="p">
        {{ store.distance }} meters that is
        {{ distanceKm }} kilometers
      </p>
    </div>
  </div>
</template><script setup lang="ts">
const store = useDefaultStore();
const distanceKm = store.distance / 1000
</script>
<style lang="scss">


.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modalContent {
  background-color: #fefefe;
  color: #000000;
  margin: 15% auto;
  padding: 2em;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 2em;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>