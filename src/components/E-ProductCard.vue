.<template>
  <div class="flex flex-col items-center">
    <div class="relative">
      <img src="https://app-malluat.skm.com.tw/_nuxt/img/heart_w.b74e5a4.svg"
      class=" absolute float-left right-3 top-1 z-10 w-5 h-5 fill-primary-500
      stroke-primary-500" />

      <img
        src="https://dice-dev.oss-ap-southeast-1.aliyuncs.com/pre/502776e8-0e34-4219-a44b-41400a7e57fc.jpg?x-oss-process=image/resize,m_lfit,h_640,w_640"
        class="w-48 h-52 bg-white object-contain"
      />
      <div
        class="
          absolute
          bg-gradient-to-r
          from-primary-600
          to-primary-300
          float-left
          left-0
          bottom-3
          z-10
          text-white text-xs
          p-0.5
          w-1/3
          rounded-r-full
        "
      >
        買一送一
      </div>
    </div>
    <div>
      <label class="font-bold text-sm">薄荷馬鞭草沐浴美體組</label>
    </div>
    <div>
      <label class="text-xs text-gray-400">薄荷馬鞭草沐浴美體組</label>
    </div>
    <div>
      <label class="text-xs text-error-600">NT$1,950</label>
    </div>
    <div>
      <label class="text-xs text-gray-400 line-through">NT$1,950</label>
    </div>
  </div>
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
      if (type.value.length > 0) {
        typeClass = `btn-design-${type.value}`;
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