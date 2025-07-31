<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
    <div class="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 animate-fade-in">
      <h2 class="text-2xl font-bold text-[#5D5FEF] mb-6">Edit Produk</h2>
      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label class="block text-sm text-gray-600 mb-1">Nama Produk</label>
          <input
            type="text"
            v-model="form.name"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF]"
          />
        </div>

        <div>
          <label class="block text-sm text-gray-600 mb-1">Harga</label>
          <input
            type="number"
            v-model="form.price"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF]"
          />
        </div>

        <div>
          <label class="block text-sm text-gray-600 mb-1">Deskripsi</label>
          <textarea
            v-model="form.description"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF]"
            rows="3"
          ></textarea>
        </div>

        <div class="flex justify-end gap-2 pt-4">
          <button
            type="button"
            @click="closeModal"
            class="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300"
          >
            Batal
          </button>
          <button
            type="submit"
            class="px-4 py-2 rounded-lg bg-[#5D5FEF] text-white hover:bg-[#4a4ce1]"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'

const props = defineProps(['product'])
const emit = defineEmits(['success', 'close'])

const form = ref({ ...props.product })

watch(
  () => props.product,
  (newVal) => {
    form.value = { ...newVal }
  },
  { deep: true }
)

const closeModal = () => {
  emit('close')
}

const submitForm = async () => {
  try {
    await axios.put(`/api/products/${form.value.id}`, {
      name: form.value.name,
      price: form.value.price,
      description: form.value.description,
    })

    await Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'The product has been successfully updated.',
      confirmButtonText: 'OK',
      confirmButtonColor: '#5D5FEF',
    })

    emit('update') 
    closeModal()
  } catch (error) {
    console.error(error)
  }
}
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 0.25s ease-out;
}
</style>
