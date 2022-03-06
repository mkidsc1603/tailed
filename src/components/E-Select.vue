.<template>
  <select v-model="innerValue" :class="classString">
    <slot>
      <option v-for="val in options" :key="val" :value="val">{{ val }}</option>
    </slot>
  </select>
</template>

<script>
import { computed, toRefs, defineComponent } from "vue";
export default defineComponent({
  name: "ESelect",
  props: {
    modelValue: String | Number,
    type: {
      type: String,
      default: () => "",
    },
    size: String,
    color: String,
    /**
     * { key, value }
     */
    options: Array,
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { size, color, type, modelValue } = toRefs(props);
    const classString = computed(() => {
      let typeClass = "";
      if (type.value.length > 0) {
        typeClass = `sel-design-${type.value}`;
      }
      return `sel sel-${color.value} sel-size-${size.value} ${typeClass}`;
    });

    return {
      innerValue: computed({
        get: () => modelValue.value,
        set: (val) => emit("update:modelValue", val),
      }),
      classString,
    };
  },
});
</script>

<style lang="scss">
</style>