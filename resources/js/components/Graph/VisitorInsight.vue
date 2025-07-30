<template>
  <div class="flex-[2] bg-white rounded-xl shadow p-6 min-w-[300px]">
    <h2 class="text-lg font-semibold mb-2">Visitor Insights</h2>
    <canvas ref="visitorChartRef" class="w-full h-[100px]"></canvas>
    <div class="flex justify-center gap-4 text-xs mt-2">
      <div class="flex items-center gap-1">
        <span class="inline-block w-3 h-3 rounded-full bg-[#A700FF]"></span> Loyal Customers
      </div>
      <div class="flex items-center gap-1">
        <span class="inline-block w-3 h-3 rounded-full bg-[#3CD856]"></span> Unique Customers
      </div>
      <div class="flex items-center gap-1">
        <span class="inline-block w-3 h-3 rounded-full bg-[#EF4444]"></span> New Customers
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const visitorChartRef = ref(null)

onMounted(() => {
  if (visitorChartRef.value) {
    new Chart(visitorChartRef.value.getContext('2d'), {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Loyal Customers',
            data: [120, 150, 200, 170, 250, 300, 280, 320, 260, 330, 360, 400],
            borderColor: '#A700FF',
            backgroundColor: 'rgba(124, 58, 237, 0.1)',
            tension: 0.4,
            pointRadius: 1,
          },
          {
            label: 'Unique Customers',
            data: [80, 100, 140, 130, 180, 200, 190, 210, 200, 230, 250, 270],
            borderColor: '#3CD856',
            backgroundColor: 'rgba(34, 197, 94, 0.1)',
            tension: 0.4,
            pointRadius: 1,
          },
          {
            label: 'New Customers',
            data: [60, 90, 110, 100, 140, 160, 150, 170, 160, 190, 210, 230],
            borderColor: '#EF4444',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            tension: 0.4,
            pointRadius: 1,
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            grid: {
              display: false,
              drawBorder: false,
              color: '#f3f3f3ff'
            }
          },
          y: {
            grid: {
              display: true,
              drawBorder: false,
              color: '#E5E7EB'
            },
            ticks: {
              display: true
            }
          }
        }
      }
    })
  }
})
</script>
