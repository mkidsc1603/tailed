.<template>
  <div class="tab-container">
    <div
      v-for="t in tabs"
      :key="t"
      @click="onClick(t)"
      :class="classString"
      :active="t === active"
    >
      {{ t }}
    </div>
  </div>
</template>

<script>
import { computed, toRefs, defineComponent, ref, watch } from "vue";
export default defineComponent({
  name: "ETab",
  props: {
    type: {
      type: String,
      default: () => "",
    },
    size: {
      type: String,
      default: () => "",
    },
    color: String,
    tabs: {
      type: Array,
      default: () => ["tab1", "tab2", "tab3"],
    },
  },
  emits: ["changed"],
  setup(props, { emit }) {
    const { size, color, type, tabs } = toRefs(props);
    const active = ref(null);
    const onClick = (name) => (active.value = name);

    const classString = computed(() => {
      let typeClass = "", sizeClass = "tab-size";

      if (type.value.length > 0) {
        typeClass = `tab-design-${type.value}`;
      }

      if (size.value.length > 0) {
        sizeClass = `tab-size-${size.value}`;
      }

      return `tab tab-${color.value} ${sizeClass} ${typeClass}`;
    });
    watch(active, (val, preVal) => {
      if (val != preVal) {
        emit("changed", val);
      }
    });
    return {
      classString,
      active,
      onClick,
    };
  },
});
</script>

<style lang="scss">
</style>