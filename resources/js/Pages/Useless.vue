<template>
  <HeaderDashboard title="Useless" :showSearch="false" />

  <div class="min-h-screen bg-[#F9FAFB] px-4 py-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <!-- Calculator Card -->
      <div class="bg-white shadow-md rounded-xl p-6 w-full max-w-sm mx-auto text-center">
        <h2 class="text-xl font-semibold text-[#5D5FEF] mb-2">Calculator</h2>
        <button
          @click="open('calculator')"
          class="bg-[#5D5FEF] text-white px-4 py-2 rounded hover:bg-[#4d4fde] transition"
        >
          Calculator
        </button>
      </div>

      <!-- Typing Tester Card -->
      <div class="bg-white shadow-md rounded-xl p-6 w-full max-w-sm mx-auto text-center">
        <h2 class="text-xl font-semibold text-[#5D5FEF] mb-2">Typing Tester</h2>
        <button
          @click="open('typing')"
          class="bg-[#5D5FEF] text-white px-4 py-2 rounded hover:bg-[#4d4fde] transition"
        >
          Typing Tester
        </button>
      </div>

      <!-- Don't Click -->
      <div class="bg-white shadow-md rounded-xl p-6 w-full max-w-sm mx-auto text-center">
        <h2 class="text-xl font-semibold text-[#5D5FEF] mb-2">Coming soon...</h2>
        <button
          @click="showAlert"
          class="bg-[#5D5FEF] text-white px-4 py-2 rounded hover:bg-[#4d4fde] transition"
        >
          Jangan diklik
        </button>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div
    v-if="openModal"
    class="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50"
  >
    <div class="bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-md relative">
      <button
        @click="openModal = false"
        class="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
      >
        &times;
      </button>
      <h3 class="text-xl font-bold text-[#5D5FEF] mb-4">
        {{ modalType === "calculator" ? "Calculator" : "Typing Tester" }}
      </h3>
      <component :is="modalComponent" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Swal from "sweetalert2";

import Kalkulator from "../components/Useless/Kalkulator/Kalkulator.vue";
import TypingTester from "../components/Useless/TypingTester/TypingTester.vue";

const openModal = ref(false);
const modalType = ref("calculator");

function open(type) {
  modalType.value = type;
  openModal.value = true;
}

function showAlert() {
  Swal.fire({
    icon: "warning",
    title: "Dibilang jangan diklik!",
    text: "ngeyelllll",
    timer: 2000,
    showConfirmButton: false,
    timerProgressBar: true,
  });
}

const modalComponent = computed(() => {
  if (modalType.value === "typing") return TypingTester;
  return Kalkulator;
});
</script>
