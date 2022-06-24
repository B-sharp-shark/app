<template>
  <div class="text-input">
    <div>
      <label class="font-semibold">{{ label }}</label>
      <input
        v-bind="$attrs"
        :class="validationClass"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="getPlaceHolder"
        :type="type"
      />
    </div>
    <div v-if="textLimit > 0" class="validation">
      {{ inputCount }}/{{ textLimit }}
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
    usePlaceholder: {
      required: false,
      default: false,
      type: Boolean,
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
    textLimit: {
      required: false,
      type: Number,
    },
  },
  watch: {
    modelValue: function (newValue, oldValue) {
      if (newValue.length > this.textLimit) {
        console.log(newValue, oldValue);
        this.$emit("update:modelValue", oldValue);
      }
    },
  },
  computed: {
    inputCount() {
      return this.modelValue.length;
    },
    getPlaceHolder() {
      if (this.usePlaceholder) {
        return this.label;
      } else {
        return "";
      }
    },
    isEmpty() {
      return this.modelValue.length === 0;
    },
    validationClass() {
      return this.isEmpty ? "invalid" : "valid";
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
.text-input {
  label {
    display: block;
  }
  input {
    border: 2px solid lightgray;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    color: black;
    width: 100%;
    padding: 10px;
  }
  input.valid {
    border: 2px solid lightgray;
  }
  input.invalid {
    border: 2px solid lightgray;
  }
  .validation {
    font-size: 10px;
    text-align: right;
  }
}
</style>
