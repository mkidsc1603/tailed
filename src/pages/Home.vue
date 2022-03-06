<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      post_date: "2022-02-19 17:28:23",
    };
  },
});
</script>
<template>
  <div class="flex flex-col justify-center gap-2">
    <!-- Header -->
    <div class="flex flex-col justify-center gap-2">
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
          font-mono
          text-sm
          tracking-wide
          align-baseline
          whitespace-nowrap
          text-gray-400
        "
      >
        <time :datetime="post_date">
          <span class="w-4 h-4 inline-block align-text-top">
            <img class="w-fit h-fit" src="../assets/clock.svg" />
          </span>
          {{ post_date }}
        </time>
      </div>
    </div>
    <div></div>
    <!--Body-->
    <div>
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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi illo
        assumenda totam exercitationem! Aut ad accusamus magnam illum fuga unde
        et reprehenderit, voluptatum iste recusandae, voluptatem explicabo
        pariatur quo aspernatur? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fuga aspernatur accusantium quia corporis aut
        obcaecati. Commodi, ipsam. Inventore unde, neque dolorem omnis repellat
        nisi, eveniet commodi magni officia id praesentium.
      </div>
    </div>
  </div>
</template>