<script>
import { defineComponent, reactive, ref } from "vue";
import EBtn from "../components/E-Btn.vue";
import EInput from "../components/E-Input.vue";
import ETodoItem from "../components/E-TodoItem.vue";

export default defineComponent({
  components: { EBtn, EInput, ETodoItem },
  setup() {
    const list = reactive([]);
    const form = reactive({
      name: "",
    });
    const nameRef = ref(null);

    return {
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
      <e-input
        ref="nameRef"
        v-model="form.name"
        size="sm"
        color="primary"
        placeholder="Please type todo item ..."
      />
      <e-btn
        color="primary"
        type="outline"
        size="sm"
        label="新增"
        @click="add"
        @keyup.enter="add"
        :disabled="form.name === ''"
      />
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