<script setup>
import { motion } from 'motion-v'
import { defineProps } from 'vue'

const props = defineProps({
  text: { type: String, default: 'Click Me' },
  textColor: { type: String, default: '#000' },
  bgColor: { type: String, default: '#E5E7EB' },
  hoverColor: { type: String, default: '#0095FF' },
  hoverTextColor: { type: String, default: '#FFF' },
  padding: { type: String, default: '0.5rem 1rem' },
  fontSize: { type: String, default: '1rem' },
  borderRadius: { type: String, default: '0.5rem' },
  border: { type: String, default: '1px solid #5D5FEF' },
})
</script>

<template>
  <motion.button
    :style="{
      color: textColor,
      backgroundColor: bgColor,
      padding,
      fontSize,
      borderRadius,
      border,
      cursor: 'pointer',
    }"
    :initial="{ scale: 1, opacity: 0 }"
    :animate="{ scale: 1, opacity: 1 }"
    :whileHover="{ scale: 1.05, backgroundColor: hoverColor, color: hoverTextColor }"
    :transition="{ type: 'spring', stiffness: 300 }"
  >
    {{ text }}
  </motion.button>
</template>
