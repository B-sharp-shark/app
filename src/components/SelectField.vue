<template>
  <div class="select-input">
    <div>
      <label class="font-semibold">{{ label }}</label>
      <select
        v-bind="$attrs"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      >
        <option v-if="placeholder" value="" disabled selected hidden>
          {{ placeholder }}
        </option>
        <option v-for="o in options" :value="o.value" :key="o.value">
          {{ o.text }}
        </option>
      </select>
    </div>
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
    type: {
      required: false,
      default: "text",
      type: String,
    },
    placeholder: {
      required: false,
      type: [String, Number],
    },
    options: {
      required: true,
      type: Array,
    },
  },
  beforeCreate() {
    console.log("At this point, events and lifecycle have been initialized.");
  },
};
</script>

<style lang="scss" scoped>
.select-input {
  label {
    display: block;
  }
  select {
    border: 2px solid lightgray;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    color: black;
    width: 100%;
    padding: 10px;
  }
}
</style>
