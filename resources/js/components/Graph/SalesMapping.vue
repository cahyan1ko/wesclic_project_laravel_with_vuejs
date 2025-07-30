<template>
  <div class="flex-[3] bg-white rounded-xl shadow p-6 min-w-[200px]">
    <h2 class="text-lg font-semibold mb-2">Sales Mapping by Country</h2>
    <canvas ref="chartCanvas" height="300" width="600"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Chart from 'chart.js/auto'
import { ChoroplethController, GeoFeature, ColorScale, ProjectionScale } from 'chartjs-chart-geo'
import * as topojson from 'topojson-client'

// Register controllers and elements
Chart.register(ChoroplethController, GeoFeature, ColorScale, ProjectionScale)

const chartCanvas = ref(null)

onMounted(async () => {
  const url = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json'
  const res = await fetch(url)
  const data = await res.json()

  const countries = topojson.feature(data, data.objects.countries).features

  const chartData = {
    labels: countries.map(c => c.properties.name),
    datasets: [{
      label: 'Countries',
      data: countries.map(c => ({
        feature: c,
        value: 1
      })),
      backgroundColor: '#93C5FD',
      borderColor: 'white',
      borderWidth: 0.5
    }]
  }

  const config = {
    type: 'choropleth',
    data: chartData,
    options: {
      showOutline: false,
      showGraticule: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        xy: {
          projection: 'equalEarth'
        }
      }
    }
  }

  const ctx = chartCanvas.value.getContext('2d')
  new Chart(ctx, config)
})
</script>

<style scoped>
/* Optional styling if needed */
</style>
