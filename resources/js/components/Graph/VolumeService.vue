<template>
  <div class="flex-[2] bg-white rounded-xl shadow p-6 min-w-[150px]">
    <h2 class="text-base font-semibold mb-2">Volume vs Service Level</h2>
    <canvas ref="chartCanvas" width="100%" height="100"></canvas>

    <div class="flex justify-center gap-4 text-xs mt-4">
      <div class="flex flex-col items-center">
        <div class="flex items-center gap-1">
          <span class="inline-block w-3 h-3 rounded-full bg-[#0095FF]"></span>
          <span class="text-gray-400">Volume</span>
        </div>
        <div class="text-[10px] font-bold mt-1">{{ totalVolume }}</div>
      </div>

      <div class="w-px h-8 bg-gray-200"></div>

      <div class="flex flex-col items-center">
        <div class="flex items-center gap-1">
          <span class="inline-block w-3 h-3 rounded-full bg-[#00E096]"></span>
          <span class="text-gray-400">Service</span>
        </div>
        <div class="text-[10px] font-bold mt-1">{{ totalService }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { Chart } from 'chart.js/auto'

export default {
  name: 'VolumeServiceChart',
  setup() {
    const chartCanvas = ref(null)
    const labels = ['Area 1', 'Area 2', 'Area 3', 'Area 4', 'Area 5', 'Area 6']
    const volumeData = []
    const serviceData = []

    for (let i = 0; i < 6; i++) {
      const total = Math.floor(Math.random() * 50) + 50
      const volume = Math.floor(Math.random() * total)
      const service = total - volume
      volumeData.push(volume)
      serviceData.push(service)
    }

    const totalVolume = volumeData.reduce((a, b) => a + b, 0)
    const totalService = serviceData.reduce((a, b) => a + b, 0)

    onMounted(() => {
      new Chart(chartCanvas.value.getContext('2d'), {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Volume',
              data: volumeData,
              backgroundColor: '#0095FF',
              stack: 'stack1'
            },
            {
              label: 'Service',
              data: serviceData,
              backgroundColor: '#00E096',
              stack: 'stack1'
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
            title: { display: false }
          },
          scales: {
            x: {
              stacked: false,
              grid: { display: false },
              ticks: { display: false }
            },
            y: {
              stacked: false,
              beginAtZero: true,
              grid: { display: true },
              ticks: { display: false }
            }
          }
        }
      })
    })

    return {
      chartCanvas,
      totalVolume,
      totalService
    }
  }
}
</script>
