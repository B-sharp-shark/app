<template>
  <div class="radio-input">
    <label class="font-semibold header">{{ label }}</label>
    <span v-for="o in options" :key="o.value">
      <input
        v-bind="$attrs"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="getPlaceHolder"
        name="label"
        type="radio"
        :id="o.text"
      />
      <label :for="o.text" class="option-label">{{ o.text }}</label>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      required: true,
      type: [String, Number],
    },
    label: {
      required: false,
      default: "",
      type: String,
    },
    options: {
      required: true,
      type: Array,
    },
  },
  beforeCreate() {
    console.log(
      "TextField At this point, events and lifecycle have been initialized."
    );
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: block;
  margin-bottom: 10px;
}
.radio-input {
  margin-right: 20px;
  size: 50px;
  input {
    margin-right: 10px;
  }
}
span {
  margin-right: 20px;
  label {
    text-transform: capitalize;
  }
}
</style>
