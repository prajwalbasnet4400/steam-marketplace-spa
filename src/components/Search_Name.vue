<template>
<input type="text" class="form-control" :width="width" placeholder="placeholder">
</template>

<script>
export default {
  name: "Search_Name",
  props:{
      width:String,
      placeholder:String
  }
};
</script>