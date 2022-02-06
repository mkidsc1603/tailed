<template>
  <div
    class="
      flex flex-row
      justify-between
      border-2 border-solid border-gray-400
      rounded
      p-xs items-baseline hover:border-primary-400 hover:bg-primary-100
    "
  >
    <label class="font-bold">{{ innerLabel }}</label>
    <e-btn type="flat" size="sm" label="刪除" color="error" @click="remove" />
    <!-- <label>{{ innerDone }}</label> -->
  </div>
</template>

<script>
import { computed, toRefs, defineComponent, getCurrentInstance } from "vue";
import EBtn from "./E-Btn.vue";

export default defineComponent({
  components: { EBtn },
  name: "ETodoItem",
  props: {
    label: {
      type: String,
      default: () => "",
    },
    key: {
      type: [String, Number],
      dfault: () => null,
    },
    done: Boolean,
  },
  emits: ["remove"],
  setup(props, { emit }) {
    const { label, key, done } = toRefs(props);
    const instance = getCurrentInstance();

    return {
      innerLabel: computed(() => label.value),
      innerDone: computed(() => (done.value ? "完成" : "未完成")),
      remove: () => emit("remove", instance.vnode.key),
    };
  },
});
</script>

<style lang="scss">
</style>