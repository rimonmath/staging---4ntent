<template>
  <div>
    WP view
    <my-wellness-plan></my-wellness-plan>
  </div>
</template>

<script>
import MyWellnessPlan from "../components/WellnessPlan/MyWellnessPlan";
export default {
  name: "wellness-plan",
  components: { MyWellnessPlan },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
