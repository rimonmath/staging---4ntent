import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
// import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from "firebase/app";
import "firebase/firestore";
// import './scss/scssvariables.scss';
import "./assets/css/style.css";

// Vue.use(VueTextareaAutosize);

firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "ntent-dfdcd.firebaseapp.com",
  databaseURL: "https://ntent-dfdcd.firebaseio.com",
  projectId: "ntent-dfdcd",
  storageBucket: "ntent-dfdcd.appspot.com",
  messagingSenderId: "871087027508"
});

export const db = firebase.firestore();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
