<script>
import { defineComponent } from "vue";
import EBtn from "./components/E-Btn.vue";

export default defineComponent({
  components: { EBtn },
});
</script>

<template>
  <div>
    <div class="flex flex-row justify-center gap-2">
      <div class="pb-md">
        <e-btn size="xs" color="primary" label="Extra small" />
      </div>
      <div class="pb-md">
        <e-btn size="sm" color="secondary" label="Small" />
      </div>
      <div class="pb-md">
        <e-btn size="md" color="accent" label="Medium" />
      </div>
      <div class="pb-md">
        <e-btn size="lg" color="info" label="Large" />
      </div>
      <div class="pb-md">
        <e-btn size="xl" color="error" label="Extra large" />
      </div>
    </div>
    <!--flat-->
    <div class="flex flex-row justify-center gap-2">
      <div class="pb-md">
        <e-btn type="flat" size="xs" color="primary" label="Extra small" />
      </div>
      <div class="pb-md">
        <e-btn type="flat" size="sm" color="secondary" label="Small" />
      </div>
      <div class="pb-md">
        <e-btn type="flat" size="md" color="accent" label="Medium" />
      </div>
      <div class="pb-md">
        <e-btn type="flat" size="lg" color="info" label="Large" />
      </div>
      <div class="pb-md">
        <e-btn type="flat" size="xl" color="error" label="Extra large" />
      </div>
    </div>
    
    <!--link-->
    <div class="flex flex-row justify-center gap-2">
      <div class="pb-md">
        <e-btn type="link" size="xs" color="primary" label="Extra small" />
      </div>
      <div class="pb-md">
        <e-btn type="link" size="sm" color="secondary" label="Small" />
      </div>
      <div class="pb-md">
        <e-btn type="link" size="md" color="accent" label="Medium" />
      </div>
      <div class="pb-md">
        <e-btn type="link" size="lg" color="info" label="Large" />
      </div>
      <div class="pb-md">
        <e-btn type="link" size="xl" color="error" label="Extra large" />
      </div>
    </div>

    <!--gray-->
    <div class="flex flex-row justify-center gap-2">
      <div class="pb-md">
        <e-btn size="xs" color="gray" label="Extra small" />
      </div>
      <div class="pb-md">
        <e-btn size="sm" color="gray" label="Small" />
      </div>
      <div class="pb-md">
        <e-btn size="md" color="gray" label="Medium" />
      </div>
      <div class="pb-md">
        <e-btn size="lg" color="gray" label="Large" />
      </div>
      <div class="pb-md">
        <e-btn size="xl" color="gray" label="Extra large" />
      </div>
    </div>

    <!--gray flat-->
    <div class="flex flex-row justify-center gap-2">
      <div class="pb-md">
        <e-btn type="flat" size="xs" color="gray" label="Extra small" />
      </div>
      <div class="pb-md">
        <e-btn type="flat" size="sm" color="gray" label="Small" />
      </div>
      <div class="pb-md">
        <e-btn type="flat" size="md" color="gray" label="Medium" />
      </div>
      <div class="pb-md">
        <e-btn type="flat" size="lg" color="gray" label="Large" />
      </div>
      <div class="pb-md">
        <e-btn type="flat" size="xl" color="gray" label="Extra large" />
      </div>
    </div>
    <!--gray link-->
    <div class="flex flex-row justify-center gap-2">
      <div class="pb-md">
        <e-btn type="link" size="xs" color="gray" label="Extra small" />
      </div>
      <div class="pb-md">
        <e-btn type="link" size="sm" color="gray" label="Small" />
      </div>
      <div class="pb-md">
        <e-btn type="link" size="md" color="gray" label="Medium" />
      </div>
      <div class="pb-md">
        <e-btn type="link" size="lg" color="gray" label="Large" />
      </div>
      <div class="pb-md">
        <e-btn type="link" size="xl" color="gray" label="Extra large" />
      </div>
    </div>
  </div>
</template>

<style>
#app {
  margin-top: 60px;
}
</style>
