<template>
  <div class="home">
    <div class="text-center" v-if="gettingPlan">
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>

    <v-container class="my-plan-container" v-else>
      <h1 class="text-center mb-2">WELLNESS PLAN</h1>

      <v-row justify="space-between">
        <div>
          <v-avatar color="indigo">
            <v-icon dark>mdi-account-circle</v-icon>
          </v-avatar>
          <span class="ml-1">{{ myPlan.name }}</span>

          <v-avatar color="indigo" class="ml-3">
            <v-icon dark>mdi-account-circle</v-icon>
          </v-avatar>
          <span class="ml-1">{{ myPlan.mentor }}</span>
        </div>

        <div>
          <v-btn
            class="ma-2"
            outlined
            fab
            color="indigo"
            @click="editMode = true"
            v-if="!editMode"
            small
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <template v-else>
            <v-btn
              color="primary"
              class="mr-2"
              @click="savePlan"
              :loading="savingPlan"
              >Save</v-btn
            >
            <v-btn color="error" @click="editMode = false">Cancel</v-btn>
          </template>
        </div>
      </v-row>

      <v-card class="my-plan-card mt-4">
        <v-card-text v-if="editMode">
          <v-text-field
            v-model="myPlan.my_intension"
            label="MY INTENSION"
          ></v-text-field>

          <v-text-field
            v-model="myPlan.where_now"
            label="WHERE AM I NOW"
          ></v-text-field>

          <v-text-field
            v-model="myPlan.where_to_go"
            label="WHERE DO I WANT TO GO"
          ></v-text-field>

          <v-text-field
            v-model="myPlan.what_care_about"
            label="WHAT DO I CARE ABOUT"
          ></v-text-field>
        </v-card-text>
        <v-card-text v-else>
          <p>
            <strong>MY INTENSION:</strong>

            {{ myPlan.my_intension }}
          </p>
          <p>
            <strong>WHERE AM I NOW:</strong>
            {{ myPlan.where_now }}
          </p>
          <p>
            <strong>WHERE DO I WANT TO GO:</strong>
            {{ myPlan.where_to_go }}
          </p>
          <p>
            <strong>WHAT DO I CARE ABOUT:</strong>
            {{ myPlan.what_care_about }}
          </p>
        </v-card-text>
      </v-card>

      <v-card class="my-plan-card mt-5">
        <v-card-text v-if="editMode">
          <v-text-field
            v-model="myPlan.pro_active_strageties"
            label="PRO-ACTIVE STRATEGIES"
          ></v-text-field>

          <v-text-field
            v-model="myPlan.reward_strategies"
            label="REWARD STRATEGIES"
          ></v-text-field>

          <v-text-field
            v-model="myPlan.maintenence"
            label="MAINTENENCE"
          ></v-text-field>

          <v-text-field
            v-model="myPlan.supports"
            label="SUPPORTS"
          ></v-text-field>
        </v-card-text>
        <v-card-text v-else>
          <p>
            <strong>PRO-ACTIVE STRATEGIES:</strong>
            {{ myPlan.pro_active_strageties }}
          </p>
          <p>
            <strong>REWARD STRATEGIES:</strong>
            {{ myPlan.reward_strategies }}
          </p>
          <p>
            <strong>MAINTENENCE:</strong>
            {{ myPlan.maintenence }}
          </p>
          <p>
            <strong>SUPPORTS:</strong>
            {{ myPlan.supports }}
          </p>
        </v-card-text>
      </v-card>
      <div class="text-center mt-5 mb-5">
        <v-btn
          color="primary"
          v-if="editMode"
          :loading="savingPlan"
          @click="savePlan"
          >SAVE</v-btn
        >
        <v-btn color="primary" @click="printModal = true" v-else
          >DOWNLOAD MY PLAN</v-btn
        >
      </div>
    </v-container>

    <my-print-modal v-model="printModal" @print="printNow">
      <my-plan :plan="myPlan"></my-plan>
    </my-print-modal>

    <v-snackbar v-model="snackbar">
      {{ successMessage }}
      <v-btn color="pink" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
//import a component and use its methods, can name it anything you wantm here we name it MyService
import MyService from "../../service";
import MentorService from "../../service/mentor";
import MyPrintModal from "./MyPrintModal";
import MyPlan from "./MyPlan";
export default {
  name: "my-wellness-plan",
  props: {
    planId: {
      default: 1
    }
  },
  components: {
    MyPrintModal,
    MyPlan
  },
  data() {
    return {
      printModal: false,
      myPlan: {},
      gettingPlan: false,
      editMode: false,
      savingPlan: false,
      snackbar: false,
      successMessage: ""
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
    savePlan() {
      this.savingPlan = true;
      MentorService.updatePlan(this.myPlan)
        .then(res => {
          // simulate loading...
          setTimeout(() => {
            this.successMessage = res.data.message;
            this.snackbar = true;
          }, 555);
        })
        .catch(e => {
          console.log(e);
        })
        .finally(() => {
          // simulate loading...
          setTimeout(() => {
            this.savingPlan = false;
            this.editMode = false;
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
