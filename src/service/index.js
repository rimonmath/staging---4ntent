import {axiosPrivate} from './axiosInstance';

export default {
  getMyPlan () {
    return axiosPrivate.get ('../../public/api/my-plan.json');
  },
};
