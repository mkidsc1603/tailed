.<template>
  <input v-model="innerValue" :class="classString" />
</template>

<script>
import { computed, toRefs, defineComponent } from "vue";
export default defineComponent({
  name: "EInput",
  props: {
    modelValue: String | Number,
    type: {
      type: String,
      default: () => "",
    },
    size: String,
    color: String,
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { size, color, type, label, modelValue } = toRefs(props);
    const classString = computed(() => {
      let typeClass = "";
      if (type.value.length > 0) {
        typeClass = `ipt-design-${type.value}`;
      }
      return `ipt ipt-${color.value} ipt-size-${size.value} ${typeClass}`;
    });

    return {
      innerValue: computed({
        get: () => modelValue.value,
        set: (val) => emit("update:modelValue", val),
      }),
      innerLabel: computed(() => label.value),
      classString,
    };
  },
});
</script>

<style lang="scss">
</style>