<template>
  <a v-if="user" class="btn btn-my-primary">
    <img :src="user.avatar" style="border-radius: 50%;width:20px;" alt="avatar" />
    {{ user.username }}
  </a>
</template>

<script>
export default {
  name: "LoggedInBtn",
  props: {
    user: Object,
  },
};
</script>