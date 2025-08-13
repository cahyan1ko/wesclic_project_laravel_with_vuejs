<template>
  <div
    class="bg-[#1e1e1e] text-gray-200 rounded-xl border border-gray-700 shadow-lg w-full max-w-md p-5"
  >
    <!-- Header -->
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-2">
        <div class="h-2 w-2 rounded-full bg-red-500"></div>
        <div class="h-2 w-2 rounded-full bg-yellow-400"></div>
        <div class="h-2 w-2 rounded-full bg-green-500"></div>
      </div>
      <span class="text-sm text-gray-400">Virus Scanner</span>
    </div>

    <!-- Title -->
    <h2 class="text-xl font-semibold mb-2">Quick Scan</h2>
    <p class="text-sm text-gray-400 mb-4">
      This will scan your feelings and cat videos. It’s totally real. Trust me.
    </p>

    <!-- Progress -->
    <div class="mb-4">
      <div class="flex justify-between text-xs mb-1">
        <span>{{ scanning ? "Scanning…" : done ? "Scan complete" : "Ready" }}</span>
        <span>{{ progress }}%</span>
      </div>
      <div class="w-full h-2 bg-gray-800 rounded overflow-hidden">
        <div
          class="h-full bg-[#007acc] transition-all duration-150"
          :style="{ width: progress + '%' }"
        ></div>
      </div>
    </div>

    <div
      class="bg-[#121212] border border-gray-800 rounded-lg p-3 h-40 overflow-auto mb-4"
    >
      <ul class="space-y-1 text-xs font-mono">
        <li v-for="(f, i) in files" :key="i" class="flex items-center gap-2">
          <svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
            <path
              d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path d="M14 3v6h6" stroke="currentColor" stroke-width="1.5" />
          </svg>
          <span class="text-gray-300">{{ f }}</span>
          <span class="ml-auto text-[10px] text-gray-500">OK</span>
        </li>
        <li v-if="scanning" class="text-[10px] text-gray-500">
          {{ statusHint }}
        </li>
      </ul>
    </div>

    <!-- Results -->
    <div v-if="done" class="mb-4">
      <div class="flex items-center gap-2 text-green-400">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 6 9 17l-5-5"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span class="font-medium">0 threats found</span>
      </div>
      <p class="text-xs text-gray-400 mt-1">…but we deleted something anyway.</p>
      <p class="text-xs text-gray-500">Report ID: #{{ reportId }}</p>
    </div>

    <!-- Actions -->
    <div class="flex items-center justify-end gap-2">
      <button
        v-if="!scanning && !done"
        @click="startScan"
        class="px-4 py-2 rounded bg-[#007acc] hover:bg-[#006bb3] text-white transition"
      >
        Start Scan
      </button>
      <button
        v-if="scanning"
        disabled
        class="px-4 py-2 rounded bg-gray-800 text-gray-400 cursor-not-allowed"
      >
        Scanning…
      </button>
      <button
        v-if="done"
        @click="reset"
        class="px-3 py-2 rounded bg-gray-800 hover:bg-gray-700 text-gray-200 transition"
      >
        Run Again
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const scanning = ref(false);
const done = ref(false);
const progress = ref(0);
const files = ref([]);
const reportId = ref("");
const statusHint = ref("Parsing cosmic entropy…");

let progressTimer = null;
let fileTimer = null;
let hintTimer = null;

const hints = [
  "Optimizing quantum hamster wheels…",
  "Negotiating with coffee machine…",
  "Hashing your nostalgia…",
  "Defragmenting memes…",
  "De-obfuscating spaghetti code…",
  "Indexing dad jokes…",
  "Warming up the GPU (Gajah Processing Unit)…",
];

const namesA = [
  "cat_video",
  "final",
  "project",
  "secret",
  "definitely_not",
  "tax_2020",
  "notes",
  "todo",
  "lol",
  "resume",
  "passwords_but_fake",
  "very_private",
];
const namesB = [
  "v2",
  "v3",
  "final",
  "final_final",
  "final_TRULY",
  "backup",
  "old",
  "draft",
  "archive",
  "ultimate",
];
const exts = [".mp4", ".zip", ".pdf", ".xlsx", ".txt", ".png", ".docx", ".psd", ".7z"];

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function fakeFile() {
  const a = rand(namesA);
  const b = Math.random() < 0.6 ? "_" + rand(namesB) : "";
  const n = Math.random() < 0.4 ? "_" + Math.floor(Math.random() * 9999) : "";
  const e = rand(exts);
  return `${a}${b}${n}${e}`;
}

function startScan() {
  reset(); // ensure clean state
  scanning.value = true;
  reportId.value = Math.random().toString(36).slice(2, 8).toUpperCase();

  // progress
  progressTimer = setInterval(() => {
    // speed up then ease near end
    const step = progress.value < 70 ? 5 : progress.value < 90 ? 3 : 2;
    progress.value = Math.min(progress.value + step, 100);
    if (progress.value >= 100) finish();
  }, 140);

  // file stream
  fileTimer = setInterval(() => {
    if (!scanning.value) return;
    files.value.unshift("Scanning: " + fakeFile());
    if (files.value.length > 60) files.value.pop();
  }, 120);

  // rotating hints
  statusHint.value = rand(hints);
  hintTimer = setInterval(() => {
    statusHint.value = rand(hints);
  }, 1000);
}

function finish() {
  clearInterval(progressTimer);
  clearInterval(fileTimer);
  clearInterval(hintTimer);
  scanning.value = false;
  done.value = true;
  // final lines
  files.value.unshift("Sanitizing: dont_open_this.txt → OK");
  files.value.unshift("Reviewing: cat_video_2021_final_final_really.mp4 → OK");
}

function reset() {
  clearInterval(progressTimer);
  clearInterval(fileTimer);
  clearInterval(hintTimer);
  scanning.value = false;
  done.value = false;
  progress.value = 0;
  files.value = [];
  statusHint.value = "Standing by…";
}
</script>
