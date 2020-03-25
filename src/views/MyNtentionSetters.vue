<template>
  <div class="text-left">
    <div class="text-center" v-if="gettingMyMembers">
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>

    <v-simple-table v-else>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Image</th>
            <th class="text-left">Name</th>
            <th class="text-left">Wellness Plan</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(member, i) in myMembers" :key="i">
            <td>
              <img class="avatar-img" :src="member.avatar" alt="avatar" />
            </td>
            <td>{{ member.first_name }} {{ member.last_name }}</td>
            <td>
              <v-select
                :items="member.plans"
                item-text="name"
                item-value="id"
                label="Select"
                single-line
                dense
                class="plan-select"
                @change="handleChange"
              ></v-select>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import MentorService from "../service/mentor";

export default {
  name: "my-ntention-setters",
  data() {
    return {
      myMembers: [],
      gettingMyMembers: false,
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159
        },
        {
          name: "Ice cream sandwich",
          calories: 237
        },
        {
          name: "Eclair",
          calories: 262
        },
        {
          name: "Cupcake",
          calories: 305
        },
        {
          name: "Gingerbread",
          calories: 356
        },
        {
          name: "Jelly bean",
          calories: 375
        },
        {
          name: "Lollipop",
          calories: 392
        },
        {
          name: "Honeycomb",
          calories: 408
        },
        {
          name: "Donut",
          calories: 452
        },
        {
          name: "KitKat",
          calories: 518
        }
      ]
    };
  },
  mounted() {
    this.getMyMembers();
  },

  methods: {
    getMyMembers() {
      this.gettingMyMembers = true;
      MentorService.getMyMembers()
        .then(res => {
          // console.log(res.data);
          this.myMembers = res.data;
        })
        .catch()
        .finally(() => {
          this.gettingMyMembers = false;
        });
    },
    handleChange(value) {
      let routeData = this.$router.resolve({
        name: "wellness-plan",
        params: { planId: value }
      });
      window.open(routeData.href, "_blank");
    }
  }
};
</script>

<style lang="scss" scoped>
.avatar-img {
  width: 44px;
}

.plan-select {
  max-width: 222px;
}
</style>
