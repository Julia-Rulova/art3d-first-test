<template>
  <div class="input__container">
    <label class="input__label" :for="id">{{ label }}</label>
    <input class="input" v-if="type != 'range'" :id="id" :type="type" />
    <input class="input_range" v-else :id="id" type="range" />
    <p class="input__hot" v-if="type == 'range'">HOT</p>
    <p class="input__cold" v-if="type == 'range'">COLD</p>
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  props: {
    label: String,
    id: String,
    type: String,
  },
};
</script>

<style>
</style>