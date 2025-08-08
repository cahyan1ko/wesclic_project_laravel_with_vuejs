<template>
  <div
    class="flex items-center justify-center bg-[#1e1e1e] relative overflow-hidden w-full h-[500px] mx-auto rounded-lg"
  >
    <h2 class="absolute top-6 w-full text-center text-xl font-semibold text-white">
      Try to <span class="text-[#5D5FEF]">Click Me</span>
    </h2>

    <button
      :style="{ left: buttonPosition.x + 'px', top: buttonPosition.y + 'px' }"
      class="absolute bg-[#5D5FEF] hover:bg-[#006bb3] text-white px-4 py-2 rounded-xl transition-all duration-150"
      @mouseenter="moveButton"
      @click="successClick"
    >
      Catch Me!
    </button>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      buttonPosition: { x: 200, y: 200 },
    };
  },
  mounted() {
    const area = this.$el.getBoundingClientRect();
    this.buttonPosition.x = area.width / 2 - 50;
    this.buttonPosition.y = area.height / 2 - 20;
  },
  methods: {
    moveButton() {
      const area = this.$el.getBoundingClientRect();
      const maxX = area.width - 120;
      const maxY = area.height - 60;
      this.buttonPosition.x = Math.floor(Math.random() * maxX);
      this.buttonPosition.y = Math.floor(Math.random() * maxY);
    },
    successClick() {
      Swal.fire({
        icon: "success",
        title: "HOREEEE 🎉",
        text: "Kamu berhasil menangkap tombolnya!",
        confirmButtonColor: "#5D5FEF",
      });
    },
  },
};
</script>
