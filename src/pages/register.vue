<template>
  <div class="h-screen main">
    <div class="mb-6 text-lg font-extrabold text-blue">Registration Form</div>

    <table class="bg-white rounded-lg RegisterInfo">
      <tbody>
        <tr>
          <td class="p-8 align-top">
            <div>
              <div class="Personal-Information">
                <h3 class="font-bold">Personal Information</h3>
                <TextField
                  v-model="fullname"
                  :label="'Full Name'"
                  :type="'text'"
                />
                <TextField
                  v-model="dob"
                  :label="'Date of Birth'"
                  :type="'date'"
                />
                <RadioButton
                  v-model="gender"
                  :label="'Gender'"
                  :options="genderList"
                />
              </div>
              <div>
                <h3 class="font-bold pt-4">Programme Information</h3>
                <SelectField
                  v-model="programme"
                  :label="'Available Programmes'"
                  :options="programmeList"
                />
              </div>
            </div>
          </td>
          <td class="p-8 align-top">
            <div>
              <div class="Contact-Information">
                <h3 class="font-bold">Contact Information</h3>
                <TextField v-model="email" :label="'Email'" :type="'email'" />
                <TextField
                  v-model="phone"
                  :label="'Mobile Number'"
                  :textLimit="11"
                  :type="'text'"
                />
                <button
                  class="px-6 py-2 font-bold text-white rounded-lg bg-blue"
                >
                  Submit
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import TextField from "../components/TextField.vue";
import SelectField from "../components/SelectField.vue";
import RadioButton from "../components/RadioButton.vue";

export default {
  name: "RegisterPage",
  data() {
    return {
      fullname: "",
      email: "",
      phone: "",
      gender: "",
      dob: "",
      programme: "",
    };
  },
  components: {
    TextField,
    SelectField,
    RadioButton,
  },
  computed: {
    programmeList() {
      return [
        { value: "0", text: "Embedded Systems" },
        { value: "1", text: "Software Development" },
        { value: "2", text: "Artificial Inteligence" },
        { value: "3", text: "Business Analytics" },
      ];
    },
    genderList() {
      return [
        { value: "0", text: "female" },
        { value: "1", text: "male" },
        { value: "3", text: "others" },
      ];
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.main {
  padding: 70px;
}
.RegisterInfo {
  width: 100%;
}
h3 {
  margin-bottom: 15px;
}
</style>
