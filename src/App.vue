<script>
import { defineComponent, computed } from "vue";
import { useRouter } from "vue-router";
import { useThemeStore } from "./stores/theme";
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
  <div class="flex flex-row h-full md:gap-2">
    <div class="flex-none w-0 h-full overflow-hidden md:w-40 md:px-6">
      <div class="flex flex-col h-full gap-2 pt-20">
        <div class="self-center">
          <img title="eropz" class="rounded-full" src="./assets/photo.jpg" />
        </div>
        <div class="self-center flex flex-row gap-2 pb-10 pt-4">
          <img class="w-7 h-7" src="./assets/instagram.png" />
          <img class="w-7 h-7" src="./assets/mixcloud.png" />
        </div>
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
        <e-btn
          type="link"
          size="sm"
          :color="currenRouteName === 'account' ? 'primary' : 'gray'"
          label="account"
          @click="go('account')"
        />
      </div>
    </div>
    <div class="grow h-full p-1 bg-white overflow-y-scroll md:pt-12 md:px-20">
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
