<template>
  <div class="flex-[2] bg-white rounded-xl shadow p-6 min-w-[150px] w-full">
    <h2 class="text-base font-semibold mb-2">Target vs Reality</h2>
    <div class="relative w-full" style="max-height: 180px;">
      <canvas ref="targetRealityChart" class="w-full h-full"></canvas>
    </div>

    <div class="flex items-center justify-between mt-4 text-xs">
      <div class="flex items-center gap-2">
        <img src="/assets/icons/reality-sales-icon.png" alt="Reality Sales" class="w-10 h-10" />
        <div>
          <p class="text-sm font-medium">Reality Sales</p>
          <p class="text-[11px] text-gray-500">Global</p>
        </div>
      </div>
      <p class="text-sm font-semibold text-[#27AE60]">8.823</p>
    </div>

    <div class="flex items-center justify-between mt-2 text-xs">
      <div class="flex items-center gap-2">
        <img src="/assets/icons/target-sales-icon.png" alt="Target Sales" class="w-10 h-10" />
        <div>
          <p class="text-sm font-medium">Target Sales</p>
          <p class="text-[11px] text-gray-500">Commercial</p>
        </div>
      </div>
      <p class="text-sm font-semibold text-[#FFA412]">12.122</p>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import Chart from 'chart.js/auto';

export default {
  name: 'TargetRealityChart',
    setup() {
    const targetRealityChart = ref(null);

    const generateRandomData = (length, min, max) => {
      return Array.from({ length }, () =>
        Math.floor(Math.random() * (max - min + 1)) + min
      );
    };

    onMounted(() => {
      const ctx = targetRealityChart.value.getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [
            {
              label: 'Target',
              data: generateRandomData(7, 700, 1100),
              backgroundColor: '#4AB58E',
            },
            {
              label: 'Reality',
              data: generateRandomData(7, 600, 1050),
              backgroundColor: '#FFCF00',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              display: false,
              beginAtZero: true,
            },
          },
        },
      });
    });

    return {
      targetRealityChart,
    };
  }
};
</script>
