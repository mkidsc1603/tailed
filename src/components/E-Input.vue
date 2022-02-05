.<template>
  <input :class="classString" />
</template>

<script>
import { computed, toRefs, defineComponent } from "vue";
export default defineComponent({
  name: "EInput",
  props: {
    type: {
      type: String,
      default: () => "",
    },
    size: String,
    color: String,
  },
  setup(props) {
    const { size, color, type, label } = toRefs(props);
    const classString = computed(() => {
      let typeClass = "";
      if (type.value.length > 0) {
        typeClass = `ipt-design-${type.value}`;
      }
      return `ipt ipt-${color.value} ipt-size-${size.value} ${typeClass}`;
    });

    return {
      innerLabel: computed(() => label.value),
      classString,
    };
  },
});
</script>

<style lang="scss">
</style>