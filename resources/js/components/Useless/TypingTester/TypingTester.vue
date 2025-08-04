<template>
  <div>
    <div class="mb-4">
      <p class="text-gray-600 mb-2">
        Klik tombol <strong>"Start"</strong> untuk memulai. Ketik kalimat di bawah ini dan
        akhiri dengan menekan <strong>Enter</strong>.
      </p>
      <div class="bg-gray-100 p-4 rounded text-sm text-gray-800">{{ targetText }}</div>
    </div>

    <div class="mb-4">
      <button
        @click="startTest"
        :disabled="started"
        class="bg-[#5D5FEF] text-white px-4 py-2 rounded hover:bg-[#4d4fde] transition"
      >
        Start
      </button>
    </div>

    <textarea
      ref="textareaRef"
      v-model="userInput"
      rows="4"
      class="w-full p-3 border border-gray-300 rounded mb-4"
      placeholder="Mulai mengetik di sini..."
      :disabled="!started || submitted"
      @keydown.enter.prevent="handleEnter"
      @focus="startTimer"
    />

    <div v-if="submitted" class="mt-4 bg-green-50 p-4 rounded">
      <p class="text-green-700 font-semibold mb-1">Hasil:</p>
      <ul class="text-sm text-gray-700">
        <li><strong>Waktu:</strong> {{ elapsedTime }} detik</li>
        <li><strong>Kecepatan:</strong> {{ wpm }} WPM</li>
        <li><strong>Akurasi:</strong> {{ accuracy }}%</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";

const textareaRef = ref(null);

const texts = [
  "Matahari bersinar terang di pagi hari membawa semangat baru untuk memulai aktivitas.",
  "Pohon-pohon rindang tumbuh di sepanjang jalan memberikan keteduhan bagi para pejalan kaki.",
  "Anak-anak bermain riang di taman sambil tertawa dan berlari mengejar satu sama lain.",
  "Teknologi terus berkembang pesat memberikan kemudahan dalam kehidupan sehari-hari manusia.",
  "Kopi hangat di pagi hari menjadi teman terbaik sebelum memulai pekerjaan yang padat.",
  "Hujan turun perlahan membasahi bumi dan menumbuhkan harapan dalam benak manusia.",
  "Perjalanan panjang dimulai dengan satu langkah kecil yang penuh dengan keberanian.",
  "Musik dapat menyentuh hati dan menyampaikan perasaan tanpa harus mengucapkan kata-kata.",
  "Setiap kegagalan adalah pelajaran berharga untuk tumbuh dan menjadi pribadi yang kuat.",
  "Kebersamaan dengan keluarga adalah anugerah yang tidak bisa digantikan oleh apapun.",
];

const targetText = ref("");
const userInput = ref("");
const submitted = ref(false);
const started = ref(false);

const startTime = ref(null);
const elapsedTime = ref(0);
const wpm = ref(0);
const accuracy = ref(0);

const startTest = () => {
  started.value = true;
  submitted.value = false;
  userInput.value = "";
  startTime.value = null;

  nextTick(() => {
    textareaRef.value?.focus();
  });
};

const startTimer = () => {
  if (!startTime.value && started.value) {
    startTime.value = new Date();
  }
};

const handleEnter = () => {
  if (started.value && !submitted.value) {
    submitTyping();
  }
};

const submitTyping = () => {
  const endTime = new Date();
  elapsedTime.value = ((endTime - startTime.value) / 1000).toFixed(2);

  const wordCount = userInput.value.trim().split(/\s+/).length;
  wpm.value = ((wordCount / elapsedTime.value) * 60).toFixed(2);

  const target = targetText.value.trim();
  const input = userInput.value.trim();
  let correctChars = 0;
  for (let i = 0; i < Math.min(target.length, input.length); i++) {
    if (target[i] === input[i]) correctChars++;
  }
  accuracy.value = ((correctChars / target.length) * 100).toFixed(2);

  submitted.value = true;
  started.value = false;
};

onMounted(() => {
  const randomIndex = Math.floor(Math.random() * texts.length);
  targetText.value = texts[randomIndex];
});
</script>
