<template>
  <transition name="modal">
    <div class="my-print-modal" v-show="value">
      <transition name="zoom">
        <div class="my-print-modal__container" v-if="value" :style="{ width: width }">
          <div class="my-print-modal__header">
            <div class="d-flex justify-space-between">
              <div class="my-print-modal__title">
                <v-btn color="primary" @click="$emit('print')">Print</v-btn>
              </div>
              <div @click="$emit('input', false)" class="my-print-modal__close">&times;</div>
            </div>
          </div>

          <div class="my-print-modal__body">
            <slot></slot>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: "my-print-modal",
  data() {
    return {};
  },

  props: {
    value: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: "960px"
    }
  }
};
</script>


<style>
.my-print-modal {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  background: rgb(204, 204, 204);
  overflow-y: auto;
}
.my-print-modal__container {
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
  background: white;
  display: block;
  margin: 0 auto;
  margin-top: 22px;
  margin-bottom: 0.5cm;
  width: 21cm;
  height: 29.7cm;
}
.my-print-modal__header {
  color: #ff5722;
}
.my-print-modal__title {
  padding: 11px 22px;
}
.my-print-modal__close {
  cursor: pointer;
  padding: 0px 15px;
  font-size: 28px;
}
.my-print-modal__close:hover {
  color: red;
}
.my-print-modal__body {
  padding: 77px;
  overflow-y: auto;
}
@media only screen and (max-width: 600px) {
  .my-print-modal__body {
    padding: 22px;
  }
}
@media print {
  .my-print-modal__container {
    box-shadow: 0;
    margin: 0;
  }
  .my-plan-container,
  .my-print-modal__header,
  .v-toolbar {
    display: none;
  }
}
</style>