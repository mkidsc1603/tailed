<script>
import { defineComponent } from "vue";
import EBtn from "./components/E-Btn.vue";
import EInput from "./components/E-Input.vue";

export default defineComponent({
  components: { EBtn, EInput },
});
</script>

<template>
  <div class="flex flex-row h-full">
    <div class="flex-none w-36 h-full">
      <div class="flex flex-col justify-items-center gap-2">
        <e-btn type="link" size="sm" color="primary" label="Extra small" />
        <e-btn type="link" size="sm" color="secondary" label="Small" />
        <e-btn type="link" size="sm" color="accent" label="Medium" />
        <e-btn type="link" size="sm" color="info" label="Large" />
        <e-btn type="link" size="sm" color="error" label="Extra large" />
      </div>
    </div>
    <div class="grow h-full pt-4">
      <div class="flex flex-row justify-center gap-2">
        <div class="pb-md">
          <div
            class="
              font-mono
              text-xl
              font-bold
              tracking-wide
              align-baseline
              whitespace-nowrap
            "
          >
            Today's Hot News
          </div>
          <div
            class="
              font-sans
              text-base
              font-normal
              tracking-normal
              leading-relaxed
              indent-7
              align-middle
              whitespace-pre-wrap
              break-before-all
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            illo assumenda totam exercitationem! Aut ad accusamus magnam illum
            fuga unde et reprehenderit, voluptatum iste recusandae, voluptatem
            explicabo pariatur quo aspernatur? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Fuga aspernatur accusantium quia
            corporis aut obcaecati. Commodi, ipsam. Inventore unde, neque
            dolorem omnis repellat nisi, eveniet commodi magni officia id
            praesentium.
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-center gap-2">
        <div class="pb-md">
          <e-input size="xs" color="primary" placeholder="Extra small" />
        </div>
        <div class="pb-md">
          <e-input size="sm" color="secondary" placeholder="Small" />
        </div>
        <div class="pb-md">
          <e-input size="md" color="accent" placeholder="Medium" />
        </div>
        <div class="pb-md">
          <e-input size="lg" color="info" placeholder="Large" />
        </div>
        <div class="pb-md">
          <e-input size="xl" color="error" placeholder="Extra large" />
        </div>
      </div>
      <div class="flex flex-row justify-center gap-2">
        <div class="pb-md">
          <e-btn size="xs" color="primary" label="Extra small" disabled />
        </div>
        <div class="pb-md">
          <e-btn size="sm" color="secondary" label="Small" />
        </div>
        <div class="pb-md">
          <e-btn size="md" color="accent" label="Medium" />
        </div>
        <div class="pb-md">
          <e-btn size="lg" color="info" label="Large" />
        </div>
        <div class="pb-md">
          <e-btn size="xl" color="error" label="Extra large" />
        </div>
      </div>
      <!--flat-->
      <div class="flex flex-row justify-center gap-2">
        <div class="pb-md">
          <e-btn type="flat" size="xs" color="primary" label="Extra small" />
        </div>
        <div class="pb-md">
          <e-btn type="flat" size="sm" color="secondary" label="Small" />
        </div>
        <div class="pb-md">
          <e-btn type="flat" size="md" color="accent" label="Medium" />
        </div>
        <div class="pb-md">
          <e-btn type="flat" size="lg" color="info" label="Large" />
        </div>
        <div class="pb-md">
          <e-btn type="flat" size="xl" color="error" label="Extra large" />
        </div>
      </div>

      <!--link-->
      <div class="flex flex-row justify-center gap-2">
        <div class="pb-md">
          <e-btn type="link" size="xs" color="primary" label="Extra small" />
        </div>
        <div class="pb-md">
          <e-btn type="link" size="sm" color="secondary" label="Small" />
        </div>
        <div class="pb-md">
          <e-btn type="link" size="md" color="accent" label="Medium" />
        </div>
        <div class="pb-md">
          <e-btn type="link" size="lg" color="info" label="Large" />
        </div>
        <div class="pb-md">
          <e-btn type="link" size="xl" color="error" label="Extra large" />
        </div>
      </div>

      <!--gray-->
      <div class="flex flex-row justify-center gap-2">
        <div class="pb-md">
          <e-btn size="xs" color="gray" label="Extra small" />
        </div>
        <div class="pb-md">
          <e-btn size="sm" color="gray" label="Small" />
        </div>
        <div class="pb-md">
          <e-btn size="md" color="gray" label="Medium" />
        </div>
        <div class="pb-md">
          <e-btn size="lg" color="gray" label="Large" />
        </div>
        <div class="pb-md">
          <e-btn size="xl" color="gray" label="Extra large" />
        </div>
      </div>

      <!--gray flat-->
      <div class="flex flex-row justify-center gap-2">
        <div class="pb-md">
          <e-btn type="flat" size="xs" color="gray" label="Extra small" />
        </div>
        <div class="pb-md">
          <e-btn type="flat" size="sm" color="gray" label="Small" />
        </div>
        <div class="pb-md">
          <e-btn type="flat" size="md" color="gray" label="Medium" />
        </div>
        <div class="pb-md">
          <e-btn type="flat" size="lg" color="gray" label="Large" />
        </div>
        <div class="pb-md">
          <e-btn type="flat" size="xl" color="gray" label="Extra large" />
        </div>
      </div>
      <!--gray link-->
      <div class="flex flex-row justify-center gap-2">
        <div class="pb-md">
          <e-btn type="link" size="xs" color="gray" label="Extra small" />
        </div>
        <div class="pb-md">
          <e-btn type="link" size="sm" color="gray" label="Small" />
        </div>
        <div class="pb-md">
          <e-btn type="link" size="md" color="gray" label="Medium" />
        </div>
        <div class="pb-md">
          <e-btn type="link" size="lg" color="gray" label="Large" />
        </div>
        <div class="pb-md">
          <e-btn type="link" size="xl" color="gray" label="Extra large" />
        </div>
      </div>
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
