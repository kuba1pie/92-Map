<script setup lang="ts">
import useVueLidate from '@vuelidate/core'
import { between, helpers, integer, required } from '@vuelidate/validators'
import { Coordinates } from '../types'

const props = defineProps({
  point: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: '',
  },
})

const store = useDefaultStore()

const formData = (store.coordinates)

const rules = reactive({
  lonStart: { required, integer, betweenValue: between(-180, 180) },
  latStart: { required, integer, betweenValue: between(-90, 90) },
  lonEnd: { required, integer, betweenValue: between(-180, 180) },
  latEnd: { required, integer, betweenValue: between(-90, 90) },
})
const v$ = useVueLidate(rules, formData)

const placeholder: string = (props.type === 'lon') ? '-180.00 to 180.00' : '-90.00 to 90.00'
</script>

<template>
  <div
    class="c-FormInput place-items-center flex flex-col"
    :class="props.point"
  >
    <label
      class="label p-10"
      :for="props.point"
    >{{ (props.type === "lon") ? 'Longitude' : 'Latitude' }}</label>
    <input
      :id="props.point"
      v-model="formData[props.point as keyof Coordinates]"
      type="text"
      :name="props.point"
      :placeholder="placeholder"
      :class="{ red: v$[props.point].$error }"
      class="input"
      @blur="v$[props.point].$touch"
    >
    <FormErrors
      v-show="v$[props.point].$error"
      :errors="v$[props.point].$errors"
    />
  </div>
</template>

<style lang="scss">
.input {
  display: block;
  text-align: center;
  margin: 0.2em auto;
  font-size: 1em;
}
.label {
  padding: .625rem
}
</style>
