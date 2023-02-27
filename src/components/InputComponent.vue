<template>
  <div class="input__container">
    <label class="input__label" :for="id">{{ label }}</label>
    <input
      class="input"
      :class="{ input_error: error != '' }"
      v-if="type != 'range'"
      :id="id"
      :type="type"
      :require="require"
      :value="modelValue"
      @input="updateInput"
    />
    <input
      class="input__range"
      :style="{ backgroundSize: modelValue + '% 100%' }"
      v-else
      :id="id"
      type="range"
      min="0"
      max="100"
      :value="modelValue"
      @input="updateInput"
    />
    <p class="input__temp input__temp_hot" v-if="type === 'range'">HOT</p>
    <p class="input__temp input__temp_cold" v-if="type === 'range'">COLD</p>
    <p v-if="error != ''" class="input__error-text">
      {{ error }}
    </p>
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  props: {
    label: String,
    id: String,
    type: String,
    require: Boolean,
    modelValue: [String, Number],
    error: String,
  },
  methods: {
    updateInput(evt) {
      this.$emit("update", evt.target.value);
    },
  },
};
</script>

<style>
.input__container {
  display: flex;
  flex-direction: column;
  margin-bottom: 51px;
  position: relative;
}

.input__label {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 5px;
}

.input {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(238, 235, 230, 0.5);
  color: #eeebe6;
  padding: 3px 0;
}

.input_error {
  border-bottom: 1px solid rgba(255, 0, 0, 0.5);
  color: red;
}

.input__error-text {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: red;
  position: absolute;
  top: 48px;
  left: 0;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.input:focus-visible {
  outline: none;
}

.input__temp {
  position: absolute;
  top: 48px;
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  line-height: 150%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.input__temp_hot {
  left: 0;
}

.input__temp_cold {
  right: 0;
}

.input__range {
  appearance: none;
  position: absolute;
  top: 41px;
  left: 0;
  width: 100%;
  height: 1px;
  background: #5baaf9;
  background-image: linear-gradient(#ff69b4, #ff69b4);
  background-size: 50% 100%;
  background-repeat: no-repeat;
}

.input__range::-webkit-slider-thumb {
  appearance: none;
  height: 13px;
  width: 13px;
  border-radius: 50%;
  background: #b6a16b;
  cursor: ew-resize;
  transition: background 0.3s ease-in-out;
}

.input__range::-moz-range-thumb {
  appearance: none;
  height: 13px;
  width: 13px;
  border-radius: 50%;
  background: #b6a16b;
  cursor: ew-resize;
  transition: background 0.3s ease-in-out;
}

.input__range::-ms-thumb {
  appearance: none;
  height: 13px;
  width: 13px;
  border-radius: 50%;
  background: #b6a16b;
  cursor: ew-resize;
  transition: background 0.3s ease-in-out;
}

.input__range::-webkit-slider-runnable-track {
  appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}

.input__range::-moz-range-track {
  appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}

.input__range::-ms-track {
  appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}
</style>