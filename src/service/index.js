import { axiosPrivate } from "./axiosInstance";

export default {
  getMyPlan() {
    return axiosPrivate.get("/my-plan.json");
  }
};
