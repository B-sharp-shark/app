<template>
  <div class="h-screen main">Student Information</div>
</template>
<script>
export default {
  name: "ProfilePage",
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
  components: {},
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

<style lang="scss" scoped></style>
