.<template>
  <button :class="classString">{{ innerLabel }}</button>
</template>

<script>
import { computed, toRefs, defineComponent } from "vue";
export default defineComponent({
  name: "EBtn",
  props: {
    type: {
      type: String,
      default: () => "standard",
    },
    size: String,
    color: String,
    label: String,
  },
  setup(props) {
    const { size, color, type, label } = toRefs(props);
    const classString = computed(() => {
      const res = `
      rounded 
      border-none 
      ring-none 
      outline-none  
      text-${size.value} 
      bg-${color.value}-500  
      hover:bg-${color.value}-600  
      active:bg-${color.value}-700 `;

      // padding, default: md
      let padding = `px-md py-sm`;
      if (size.value === "xs") {
        padding = "px-md py-xs";
      } else if (size.value === "sm") {
        padding = "px-md py-sm";
      } else if (size.value === "lg") {
        padding = "px-lg py-sm";
      } else if (size.value === "xl") {
        padding = "px-xl py-md";
      }

      // font-color
      let fontColor = "text-white";
      if (type.value === "flat") {
        fontColor = "text-primary-500";
      }

      return res + " " + padding + " " + fontColor;
    });

    return {
      innerLabel: computed(() => label.value),
      classString,
    };
  },
});
</script>

<style>
</style>