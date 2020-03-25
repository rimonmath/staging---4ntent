import { axiosPrivate } from "./axiosInstance";

export default {
  getMyMembers() {
    return axiosPrivate.get("/get-my-members.json");
  },
  updatePlan(/*plan*/) {
    // in production this method should be post
    return axiosPrivate.get("/update-plan.json");
  }
};
