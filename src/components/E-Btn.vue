.<template>
  <button :class="classString">{{ label }}</button>
</template>

<script>
import { computed, toRefs, defineComponent } from "vue";
export default defineComponent({
  name: "EBtn",
  props: {
    type: {
      type: String,
      default: () => "",
    },
    size: String,
    color: String,
    label: String,
  },
  setup(props) {
    const { size, color, type, label } = toRefs(props);
    const classString = computed(() => {
      let typeClass = "";
      if (type.value.length >0) {
        typeClass = `btn-design-${type.value}`
      }
      return `btn btn-${color.value} btn-size-${size.value} ${typeClass}`;
    });

    return {
      classString,
    };
  },
});
</script>

<style lang="scss">
</style>