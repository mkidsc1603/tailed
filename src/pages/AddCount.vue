<script>
import { defineComponent, reactive, ref } from "vue";
import EBtn from "../components/E-Btn.vue";
import EInput from "../components/E-Input.vue";
import ETodoItem from "../components/E-TodoItem.vue";
import ETab from "../components/E-Tab.vue";
import ESelect from "../components/E-Select.vue";
import EProductCard from "../components/E-ProductCard.vue";
import { useThemeStore } from "../stores/theme";

export default defineComponent({
  components: { EBtn, EInput, ETodoItem, ETab, ESelect, EProductCard },
  setup() {
    const themeStore = useThemeStore();
    const list = reactive([]);
    const form = reactive({
      name: "",
    });
    const nameRef = ref(null);

    return {
      themeStore,
      list,
      form,
      nameRef,
      add: () => {
        if (form.name === "") return;
        if (list.findIndex((x) => x.value === form.name) > -1) {
          return alert("Already exist!");
        }

        list.push({
          value: form.name,
          label: form.name,
          done: false,
        });

        // clear input
        form.name = "";
        nameRef.value.$el.focus();
      },
      onRemove: (key) => {
        console.log(key);
        let idx = list.findIndex((x) => x.value === key);
        if (idx > -1) {
          list.splice(idx, 1);
        }
      },
    };
  },
});
</script>
<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-row gap-2">
      <e-tab :size="themeStore.size" :color="themeStore.color" />
    </div>
    <div class="flex flex-row gap-2">
      <e-tab type="flat" :size="themeStore.size" :color="themeStore.color" />
    </div>
    <div class="flex flex-row gap-2">
      <div class="flex flex-col gap-1 flex-auto">
        <label class="text-sm font-bold">項目名稱</label>
        <e-input
          ref="nameRef"
          v-model="form.name"
          :size="themeStore.size"
          :color="themeStore.color"
          placeholder="Please type todo item ..."
        />
      </div>
      <div class="flex flex-col justify-end">
        <e-btn
          :color="themeStore.color"
          type="outline"
          :size="themeStore.size"
          label="新增"
          @click="add"
          @keyup.enter="add"
          :disabled="form.name === ''"
        />
      </div>
    </div>
    <div class="flex flex-row gap-2">
      <div class="flex flex-col gap-1 flex-auto">
        <label class="text-sm font-bold">項目分類</label>
        <e-select :size="themeStore.size" :color="themeStore.color">
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </e-select>
      </div>
    </div>
    <div class="flex flex-row gap-1 flex-wrap">
      <!-- <e-product-card  v-for="i in 25" :key="i"/> -->
    </div>
    <div class="flex flex-col gap-2">
      <!-- <label v-for="item in list" :key="item.value">{{ item.label }}</label> -->
      <e-todo-item
        v-for="item in list"
        :key="item.value"
        :done="item.done"
        :label="item.label"
        @remove="onRemove"
      />
    </div>
  </div>
</template>


<style>
</style>