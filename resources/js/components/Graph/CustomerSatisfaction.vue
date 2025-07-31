<template>
  <div class="flex-[3] bg-white rounded-xl shadow p-6 min-w-[200px] w-full max-w-full h-auto">
    <h2 class="text-lg font-semibold mb-2">Customer Satisfaction</h2>
    <div class="relative w-full" style="max-height: 160px;">
      <canvas ref="chartCanvas" class="w-full h-full"></canvas>
    </div>
    <div class="border-t border-gray-200 my-3"></div>
    <div class="flex justify-center flex-wrap gap-6 text-xs mt-2">
      <div class="flex flex-col items-center gap-1">
        <div class="flex items-center gap-1">
          <img src="/assets/icons/legend-blue-dv-icon.png" alt="Last Month" class="w-auto h-2" />
          <span class="text-gray-400">Last Month</span>
        </div>
        <span class="text-sm font-semibold">$3,004</span>
      </div>
      <div class="w-px h-8 bg-gray-200"></div>
      <div class="flex flex-col items-center gap-1">
        <div class="flex items-center gap-1">
          <img src="/assets/icons/legend-green-dv-icon.png" alt="This Month" class="w-auto h-2" />
          <span class="text-gray-400">This Month</span>
        </div>
        <span class="text-sm font-semibold">$4,504</span>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default {
  name: 'CustomerSatisfaction',
  setup() {
    const chartCanvas = ref(null)

    onMounted(() => {
      if (chartCanvas.value) {
        new Chart(chartCanvas.value.getContext('2d'), {
          type: 'line',
          data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
              {
                label: 'Last Month',
                data: Array.from({ length: 7 }, () => Math.floor(Math.random() * (75 - 60 + 1)) + 60),
                borderColor: '#05C283',
                backgroundColor: 'transparent',
                tension: 0.4,
                pointRadius: 2,
                borderWidth: 2,
              },
              {
                label: 'This Month',
                data: Array.from({ length: 7 }, () => Math.floor(Math.random() * (85 - 66 + 1)) + 66),
                borderColor: '#0095FF',
                backgroundColor: 'transparent',
                tension: 0.4,
                pointRadius: 2,
                borderWidth: 2,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                display: false,
              },
              y: {
                display: false,
              },
            },
            plugins: {
              legend: { display: false },
              tooltip: {
                enabled: true,
                backgroundColor: '#333',
                titleColor: '#fff',
                bodyColor: '#fff',
                borderColor: '#ddd',
                borderWidth: 1,
                cornerRadius: 4,
                padding: 10,
              },
            },
            layout: {
              padding: { top: 10, bottom: 10 },
            },
          },
        })
      }
    })

    return {
      chartCanvas,
    }
  },
}
</script>

<style scoped>
</style>
