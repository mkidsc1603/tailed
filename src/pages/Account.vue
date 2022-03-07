<script>
import { defineComponent, reactive, ref } from "vue";
import EBtn from "../components/E-Btn.vue";
import EInput from "../components/E-Input.vue";
import ETodoItem from "../components/E-TodoItem.vue";
import ETab from "../components/E-Tab.vue";
import ESelect from "../components/E-Select.vue";
import EProductCard from "../components/E-ProductCard.vue";

export default defineComponent({
  components: { EBtn, EInput, ETodoItem, ETab, ESelect, EProductCard },
  setup() {
    return {};
  },
});
</script>
<template>
  <div class="flex flex-col w-full h-full p-2 gap-1 bg-gray-50">
    <div class="grow flex flex-col w-full h-full bg-gray-100 gap-1 ">
      <div class="flex h-2/5 w-full rounded bg-gray-300">
      
      </div>
      <div class="flex flex-row h-3/5 w-full rounded bg-gray-100 gap-2">
        <div class="flex h-full w-1/3 rounded bg-primary-400"></div>
        <div class="flex h-full w-2/3 rounded bg-primary-400"></div>
      </div>
    </div>

    <div class="flex-none h-14 w-full rounded bg-gray-300"></div>
  </div>
</template>


<style>
</style>