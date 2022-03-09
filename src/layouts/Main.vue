<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>
<template>
  <div class="flex flex-col w-full h-full p-2 gap-1 bg-gray-50">
    <router-view />
    <div class="flex-none h-14 w-full rounded bg-gray-300"></div>
  </div>
</template>
<style>
</style>