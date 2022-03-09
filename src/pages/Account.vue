<script>
import { computed, defineComponent, onMounted, reactive, ref } from "vue";
import EBtn from "../components/E-Btn.vue";
import EInput from "../components/E-Input.vue";
import ETodoItem from "../components/E-TodoItem.vue";
import ETab from "../components/E-Tab.vue";
import ESelect from "../components/E-Select.vue";
import EProductCard from "../components/E-ProductCard.vue";

export default defineComponent({
  components: { EBtn, EInput, ETodoItem, ETab, ESelect, EProductCard },
  setup() {
    const list = ref([]);
    const form = reactive({
      date: null,
      cost: "",
      type: "",
    });

    const numberClick = (num) => {
      if (Number(num) === 0 && Number(form.cost) === 0) return;

      form.cost = form.cost + num;
    };

    onMounted(() => {
      console.log("account in");
    });
    return {
      list,
      form,
      total: computed(() =>
        Intl.NumberFormat().format(
          list.value.reduce((a, b) => Number(a) + Number(b), 0)
        )
      ),
      numberClick,
      operationClick: (operator) => {
        if (operator === "x") {
          form.cost = form.cost.substr(0, form.cost.length - 1);
        } else if (operator === "+") {
        } else if (operator === "-") {
        } else if (operator === "=") {
        }
      },
      enterClick: () => {
        if (!form.cost) return;

        list.value.push(form.cost);
        form.cost = "";
      },
    };
  },
});
</script>
<template>
  <div class="grow flex flex-col w-full h-full bg-gray-100 gap-1">
    <div class="flex flex-col h-2/5 w-full rounded bg-gray-300 gap-1">
      <div class="overflow-y-scroll">
        <div
          v-for="(item, index) in list"
          :key="index"
          class="flex flex-row justify-between px-4"
        >
          <div>吃飯</div>
          <div>${{ Intl.NumberFormat().format(item) }}</div>
        </div>
      </div>
      <div class="border-b border-gray-400 pt-3"></div>
      <div class="flex flex-row justify-between px-4">
        <div>總計</div>
        <div>${{ total }}</div>
      </div>
    </div>
    <div class="flex flex-row h-3/5 w-full rounded bg-gray-100 gap-2">
      <div class="flex h-full w-1/3 rounded bg-primary-400"></div>
      <div class="flex h-full w-2/3 rounded bg-primary-400">
        <div
          class="
            grid grid-cols-3
            gap-4
            w-full
            auto-cols-max
            text-center text-4xl
            font-bold
          "
        >
          <div class="col-span-3 flex">
            <e-input
              v-model="form.cost"
              class="flex-auto w-64 text-right px-2"
              placeholder="0"
            />
            <e-btn
              label="E"
              color="secondary"
              class="flex-1 px-2"
              @click="enterClick"
            />
          </div>
          <div class="text-accent-700 self-center" @click="numberClick(7)">
            7
          </div>
          <div class="text-accent-700 self-center" @click="numberClick(8)">
            8
          </div>
          <div class="text-accent-700 self-center" @click="numberClick(9)">
            9
          </div>
          <div class="text-accent-700 self-center" @click="numberClick(4)">
            4
          </div>
          <div class="text-accent-700 self-center" @click="numberClick(5)">
            5
          </div>
          <div class="text-accent-700 self-center" @click="numberClick(6)">
            6
          </div>
          <div class="text-accent-700 self-center" @click="numberClick(1)">
            1
          </div>
          <div class="text-accent-700 self-center" @click="numberClick(2)">
            2
          </div>
          <div class="text-accent-700 self-center" @click="numberClick(3)">
            3
          </div>
          <div class="text-accent-700 self-center" @click="numberClick(0)">
            0
          </div>
          <div class="text-accent-700 self-center" @click="numberClick('00')">
            00
          </div>
          <div class="text-accent-700 self-center" @click="operationClick('x')">
            x
          </div>
          <div class="text-accent-700 self-center" @click="operationClick('+')">
            +
          </div>
          <div class="text-accent-700 self-center" @click="operationClick('-')">
            -
          </div>
          <div class="text-accent-700 self-center" @click="operationClick('=')">
            =
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
</style>