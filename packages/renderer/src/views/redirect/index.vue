<template>
  <div class="redirect-contianer" />
</template>

<script lang="ts" name="Redirect">
import { defineComponent } from 'vue';

export default defineComponent({
  created() {
    const { params, query } = this.$route;
    const { path } = params;
    this.$router.replace({
      path: '/' + (typeof path === 'string' ? path : path.join('/')),
      query,
    });
  },
});
</script>
