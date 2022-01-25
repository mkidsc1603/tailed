<script>
import { defineComponent } from "vue";
import EBtn from "./components/E-Btn.vue";

export default defineComponent({
  components: { EBtn },
});
</script>

<template>
  <div>
    <div class="pb-md ">
      <e-btn size="xs" color="primary" label="Extra small" />
    </div>
    <div class="pb-md ">
      <e-btn size="sm" color="primary" label="Small" />
    </div>
    <div class="pb-md ">
      <e-btn size="md" color="primary" label="Medium" />
    </div>
    <div class="pb-md ">
      <e-btn size="lg" color="primary" label="Large" />
    </div>
    <div class="pb-md ">
      <e-btn size="xl" color="primary" label="Extra large" />
    </div>
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
