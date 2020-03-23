<template>
  <div class="home">
    <div class="my-loading" v-if="gettingPlan">
      <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
    </div>

    <v-container class="my-plan-container" v-else>
      <my-plan :plan="myPlan"></my-plan>
      <div class="text-center mt-5 mb-5">
        <v-btn color="primary" @click="printModal = true">DOWNLOAD MY PLAN</v-btn>
      </div>
    </v-container>

    <my-print-modal v-model="printModal" @print="printNow">
      <my-plan :plan="myPlan"></my-plan>
    </my-print-modal>
  </div>
</template>

<script>
//import a component and use its methods, can name it anything you wantm here we name it MyService
import MyService from "../../service";
import MyPrintModal from "./MyPrintModal";
import MyPlan from "./MyPlan";
export default {
  name: "my-wellness-plan",
  components: {
    MyPrintModal,
    MyPlan
  },
  data() {
    return {
      printModal: false,
      myPlan: {},
      gettingPlan: false
    };
  },
  mounted() {
    this.getPlan();
  },
  methods: {
    getPlan() {
      this.gettingPlan = true;
      MyService.getMyPlan()
        .then(res => {
          this.myPlan = res.data;
        })
        .catch(e => {
          console.log(e);
        })
        .finally(() => {
          // simulate loading...
          setTimeout(() => {
            this.gettingPlan = false;
          }, 555);
        });
    },
    printNow() {
      window.print();
    }
  }
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .my-plan-card strong {
    display: block;
  }
}
</style>