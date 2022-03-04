<script>
import { defineComponent, computed } from "vue";
import { useRouter } from "vue-router";
import {useThemeStore} from "./stores/theme"
import EBtn from "./components/E-Btn.vue";
import EInput from "./components/E-Input.vue";
import ESelect from "./components/E-Select.vue";

export default defineComponent({
  components: { EBtn, EInput, ESelect },
  setup() {
    const router = useRouter();
    const themeStore = useThemeStore();
    const currenRouteName = computed(() => router.currentRoute.value.name);
    return {
      themeStore,
      currenRouteName,
      go: (name) => router.push({ name: name }),
    };
  },
});
</script>

<template>
  <div class="flex flex-row h-full gap-2">
    <div class="flex-none w-40 h-full">
      <div class="flex flex-col h-full gap-2 pt-20">
        <e-btn
          type="link"
          size="sm"
          :color="currenRouteName === 'home' ? 'primary' : 'gray'"
          label="Home"
          @click="go('home')"
        />
        <e-btn
          type="link"
          size="sm"
          :color="currenRouteName === 'demo' ? 'primary' : 'gray'"
          label="Demo"
          @click="go('demo')"
        />
        <e-btn
          type="link"
          size="sm"
          :color="currenRouteName === 'count' ? 'primary' : 'gray'"
          label="Count"
          @click="go('count')"
        />
      </div>
    </div>
    <div class="grow h-full pt-12 px-20 bg-white">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
body,
html {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
