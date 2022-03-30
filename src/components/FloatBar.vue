<template>
  <div class="position-relative">
    <span class="position-absolute" :style="{left :position(),'z-index':'9'}"><i class="fas fa-sort-up"></i></span>
    <div
      class="progress"
      style="margin-bottom: 0px; height: 7px; background-color: #f8f8f8"
    >
      <div
        class="progress-bar progress-bar-success poptip"
        data-toggle="tooltip"
        title=""
        role="progressbar"
        style="width: 7%"
        data-original-title="Factory New"
      ></div>
      <div
        class="progress-bar progress-bar-info poptip"
        data-toggle="tooltip"
        title=""
        role="progressbar"
        style="width: 8%"
        data-original-title="Minimal Wear"
      ></div>
      <div
        class="progress-bar progress-bar-primary poptip"
        data-toggle="tooltip"
        title=""
        role="progressbar"
        style="width: 23%"
        data-original-title="Field-Tested"
      ></div>
      <div
        class="progress-bar progress-bar-warning poptip"
        data-toggle="tooltip"
        title=""
        role="progressbar"
        style="width: 7%"
        data-original-title="Well-Worn"
      ></div>
      <div
        class="progress-bar progress-bar-danger poptip"
        data-toggle="tooltip"
        title=""
        role="progressbar"
        style="width: 55%"
        data-original-title="Battle-Scarred"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FloatBar",
  props: { float: Number },
  methods:{
    position(){
      return `${this.float*100}%`;
    }
  }
};
</script>

<style scoped>
.cursor {
  position: absolute;
}
.progress {
  position: relative;
}
.progress-bar-success {
  background-color: #00bc8c;
}
.progress-bar-info {
  background-color: #3498db;
}
.progress-bar-primary {
  background-color: #375a7f;
}
.progress-bar-warning {
  background-color: #f39c12;
}
.progress-bar-danger {
  background-color: #e74c3c;
}
</style>