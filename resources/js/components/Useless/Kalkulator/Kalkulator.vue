<template>
  <div class="flex flex-col gap-4">
    <input
      type="number"
      v-model.number="a"
      class="border rounded px-3 py-2"
      placeholder="Number 1"
    />
    <input
      type="number"
      v-model.number="b"
      class="border rounded px-3 py-2"
      placeholder="Number 2"
    />
    <div class="flex gap-2 justify-center">
      <button @click="calculate('+')" class="bg-[#5D5FEF] text-white px-3 py-1 rounded">+</button>
      <button @click="calculate('-')" class="bg-[#5D5FEF] text-white px-3 py-1 rounded">−</button>
      <button @click="calculate('*')" class="bg-[#5D5FEF] text-white px-3 py-1 rounded">×</button>
      <button @click="calculate('/')" class="bg-[#5D5FEF] text-white px-3 py-1 rounded">÷</button>
    </div>
    <p class="text-lg font-semibold text-center">Result: {{ result }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const a = ref(0)
const b = ref(0)
const result = ref(0)

function calculate(operator) {
  switch (operator) {
    case '+':
      result.value = a.value + b.value
      break
    case '-':
      result.value = a.value - b.value
      break
    case '*':
      result.value = a.value * b.value
      break
    case '/':
      result.value = b.value !== 0 ? a.value / b.value : '∞'
      break
  }
}
</script>
