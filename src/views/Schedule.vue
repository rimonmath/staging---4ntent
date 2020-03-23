<template>
  <div>
    <Calendar />
  </div>
</template>

<script>
import Calendar from "../components/Schedule/bothMentorsAndNtnSetters/Calendar.vue";
export default {
  name: "schedule",
  components: {
    Calendar
  },
  data: () => ({})
};
</script>

<style lang="scss" scoped></style>
