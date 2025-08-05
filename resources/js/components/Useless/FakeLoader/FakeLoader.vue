<template>
  <div class="max-h-[80vh] flex items-center justify-center bg-gray-100 p-4">
    <div class="bg-white p-4 rounded-lg shadow-lg text-center w-full max-w-sm">
      <h2 class="text-2xl font-bold text-[#5D5FEF] mb-4">Loading Simulator</h2>

      <!-- Tombol hanya muncul jika belum selesai -->
      <button
        v-if="!done"
        @click="startProcess"
        :disabled="loading"
        class="bg-[#5D5FEF] text-white px-6 py-2 rounded-md hover:bg-[#4d4fde] transition disabled:opacity-50"
      >
        Mulai Proses Rahasia
      </button>

      <div v-if="loading" class="w-full mt-6">
        <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            class="bg-[#5D5FEF] h-3 animate-pulse"
            :style="{ width: progress + '%' }"
          ></div>
        </div>
        <p class="text-sm mt-2 text-gray-600">Sedang memproses...</p>
      </div>

      <div v-if="done" class="mt-6 text-green-600 font-semibold">
        ✅ Proses selesai. Tapi nggak ada apa-apa…
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const loading = ref(false);
const done = ref(false);
const progress = ref(0);

function startProcess() {
  if (loading.value || done.value) return;
  loading.value = true;
  done.value = false;
  progress.value = 0;

  const interval = setInterval(() => {
    if (progress.value < 100) {
      progress.value += 5;
    } else {
      clearInterval(interval);
      loading.value = false;
      done.value = true;
    }
  }, 150);
}
</script>
