<script setup lang="ts">
import useVueLidate from '@vuelidate/core'
import { between, integer, required } from '@vuelidate/validators'
import FormInput from './FormInput.vue'

const store = useDefaultStore()

const formData = computed(() => store.coordinates)

const rules = reactive({
  lonStart: { required, integer, betweenValue: between(-180, 180) },
  latStart: { required, integer, betweenValue: between(-90, 90) },
  lonEnd: { required, integer, betweenValue: between(-180, 180) },
  latEnd: { required, integer, betweenValue: between(-90, 90) },
})
const v$ = useVueLidate(rules, formData)

async function submitForm() {
  const result = await v$.value.$validate()
  if (result)
    store.getDistance()
}

const points = [{ name: 'lonStart', type: 'lon' },
  {
    name: 'latStart', type: 'lat',
  },
  { name: 'lonEnd', type: 'lon' }, { name: 'latEnd', type: 'lat' }]
</script>

<template>
  <div class="c-TheForm wrapper flex-col">
    <FormInput
      v-for="point in points"
      :key="point.name"
      ref="form"
      :point="point.name"
      :type="point.type"
    />
    <FormButton
      class="bg-green-500"
      @click="submitForm()"
    >
      Calculate
    </FormButton>
  </div>
</template>

<style>
.red {
  border-color: #8a3434;
}

.wrapper>div:nth-child(3)::before {
  content: 'End point';
  font-size: 1.3em;
  color: #aaaaaa;
  margin: 1rem
}

.wrapper>div:nth-child(1)::before {
  content: 'Start point';
  font-size: 1.3em;
  color: #aaaaaa;
  margin: 1rem
}
.wrapper>.c-FormInput {
  min-height: 14rem;
}
.wrapper>.c-FormInput:nth-child(even) {
  min-height: 10rem;
}
</style>
